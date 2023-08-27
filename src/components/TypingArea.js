import React, { useState, useEffect, useRef } from 'react'

export const TypingArea = (props) => {

    const onFocus = props.onFocus
    const setIsTyping = props.setIsTyping
    const textString = 'Type here you lil shee!!\0'.split('')
    const initIndex = 0
    const initState = textString.map((c, i) => ({ color: 'black', letter: c, index: i }))
    const [content, setContent] = useState(initState);
    const [index, setIndex] = useState(initIndex);


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
                if (index < textString.length - 1) {
                    color = event.key === content[index].letter ? 'green' : 'red'
                    setIndex(index => index + 1)
                    updateColorAtIndex(index, color)
                    console.log('index', index, 'pressedKey', event.key, 'content val', content[index].letter)

                }
            } else if (event.key === 'Backspace') {
                if (index > 0) {
                    setIndex(index => index - 1)
                    updateColorAtIndex(index - 1, 'black')
                    console.log('indexoo', index, 'pressedKeyoo', event.key, 'content valoo', content[index].letter)
                    //     event.preventDefault()
                }
            }
            setIsTyping(true)

            if (index == textString.length - 2) {
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
        >
            {content.map((s, i) => { return <span style={{ color: s.color }} key={i} >{s.letter}</span> })
            }
        </span >

    </>
    );
};