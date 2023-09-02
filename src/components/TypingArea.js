import React, { useState, useEffect, useRef } from 'react'
import rawTextFile from '../TextFiles/TextFileHere.txt';

export const TypingArea = (props) => {

    const onFocus = props.onFocus
    const setIsTyping = props.setIsTyping
    const setKeyStrokes = props.setKeyStrokes
    //  let textString = []//'Type here you lil shee!!\0'.split('')
    const [textString, setTextString] = useState([]);

    let initState = textString.map((c, i) => ({ color: 'black', letter: c, index: i }))

    const initIndex = 0

    const [content, setContent] = useState(initState);
    const [index, setIndex] = useState(initIndex);

    useEffect(() => {
        fetch(rawTextFile)
            .then(response => {
                return response.text()
            }
            )
            .then(data => {
                console.log("ddddd:", data)
                const textData = (data + '\0').split('');
                let initState = textData.map((c, i) => ({ color: 'black', letter: c, index: i }));
                setContent(initState);
                setTextString(textData)

            })
            .catch(error => console.error('Error fetching file:', error));

        if (spanRef.current) {
            spanRef.current.scrollTop = spanRef.current.scrollHeight;
        }
    }, [])

    // textString = 'kdflskjflakdlfkshldif ksdhf kasdh;fkhas;dfh;sio\0'.split('')
    // initState = textString.map((c, i) => ({ color: 'black', letter: c, index: i }))
    // setContent(initState)


    const updateColorAtIndex = (index, color) => {
        console.log('IIndex', index, 'IIcontent val', content[index].letter)

        setContent(prevArray => {
            const newArray = [...prevArray];
            newArray[index].color = color;
            return newArray;
        });
    };

    let color = 'green'
    const validKeys = new Set([...Array(26).keys()].map(i => String.fromCharCode(i + 65)).concat(" ", "!", ".", ",").concat([...Array(26).keys()].map(i => String.fromCharCode(i + 97))));




    const handleKeyDown = event => {
        if (isEditable) {
            console.log('Key pressed:', event.key);
            if (validKeys.has(event.key)) //((event.key >= 'A' && event.key <= 'Z') || (event.key >= 'a' && event.key <= 'z')) {
            {
                if (event.key === ' ') {
                    event.preventDefault()
                    event.stopPropagation();
                }
                if (index < textString.length - 1) {
                    color = event.key === content[index].letter ? 'green' : 'red'
                    setIndex(index => index + 1)
                    updateColorAtIndex(index, color)
                    console.log('index', index, 'pressedKey', event.key, 'content val', content[index].letter)

                }
                setKeyStrokes(prev => prev + 1)

            } else if (event.key === 'Backspace') {
                if (index >= 0) {
                    setIndex(index => index - 1)
                    updateColorAtIndex(index - 1, 'black')
                    console.log('indexoo', index, 'pressedKeyoo', event.key, 'content valoo', content[index].letter)
                }
            }
            setIsTyping(true)

            if (index === textString.length - 2) {
                setIsTyping(false)
            }
        }
    };
    const [isEditable, setIsEditable] = useState(false)
    const spanRef = useRef(null)

    useEffect(() => {
        setIsEditable(onFocus);
        focusText();
    }, [onFocus]);

    const focusText = () => {
        spanRef.current.focus();
    };
    return (<>
        <span
            tabIndex={0}
            onKeyDown={handleKeyDown}
            ref={spanRef}
            style={{
                display: 'block',
                overflow: 'auto',
                height: '20vh', // 100% of viewport height
                width: '50vw',  // 100% of viewport width
                padding: '10px', // Add padding for better appearance
                fontSize: '40px',
                border: '5px solid #1976d2',
                borderColor: 'Highlight',
                borderRadius: '10px',
                outline: '1px solid #1976d2',
                outlineOffset: '2px'

            }}
        >
            {content.map((s, i) => {
                return <span style={{
                    color: s.color,
                    backgroundColor: s.letter === ' ' && s.color === 'red' ? 'red' : 'transparent'
                }} key={i} >{s.letter}</span>
            })
            }
        </span >

    </>
    );
};


