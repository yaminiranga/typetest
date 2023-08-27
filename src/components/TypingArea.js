import React, { useState, useEffect, useRef } from 'react'

export const TypingArea = () => {

    const textString = 'Type here you lil shee!!\n'.split('')
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

        }
    };
    const spanRef = useRef(null)

    const focusText = () => {
        spanRef.current.focus()
    }

    const [isEditable, setIsEditable] = useState(false)
    const [isButton, setIsButton] = useState(false)
    const toggleButton = () => {
        setIsButton(prev => !prev)
        setIsEditable(!isButton)
        focusText()
    }
    return (<>
        <span
            tabIndex={0}
            onKeyDown={handleKeyDown}
            ref={spanRef}
        >
            {content.map((s, i) => { return <span style={{ color: s.color }} key={i} >{s.letter}</span> })
            }
        </span >
        <button onClick={toggleButton}>{isButton ? 'Stop' : 'Start'}</button>

    </>
    );
};