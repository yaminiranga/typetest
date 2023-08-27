// import React, { useState, useRef } from 'react';

// const TypingTest = () => {
//     const text = "Type here you lil shee!!";
//     const textArray = text.split('');
//     const [typedText, setTypedText] = useState('');

//     const typingAreaRef = useRef(null);

//     const handleKeyDown = event => {
//         const keyPressed = event.key;

//         // Exclude special keys and prevent their default behavior
//         if (keyPressed.length === 1) {
//             // if (keyPressed === 'Backspace') {
//             //     setTypedText(prevTypedText => prevTypedText.slice(0, -1));
//             // } else {
//             setTypedText(prevTypedText => prevTypedText + keyPressed);
//             //  }
//             updateCursor();
//         } else if (keyPressed === 'Backspace') {
//             event.preventDefault(); // Prevent the default behavior of the Backspace key
//             if (typedText.length > 0) {
//                 setTypedText(prevTypedText => prevTypedText.slice(0, -1));
//                 updateCursor();
//             }
//         }

//         event.preventDefault(); // Prevent the default behavior of all keys
//     };

//     const updateCursor = () => {
//         if (typingAreaRef.current) {
//             const cursorPosition = typedText.length;
//             typingAreaRef.current.style.setProperty('--cursor-position', cursorPosition);
//         }
//     };

//     const getColorAtIndex = i => {
//         if (typedText[i] === textArray[i]) {
//             return 'green';
//         } else if (typedText[i] === undefined) {
//             return 'black';
//         } else {
//             return 'red';
//         }
//     };

//     return (
//         <div>
//             <div
//                 ref={typingAreaRef}
//                 tabIndex={0} // Make the div focusable
//                 onKeyDown={handleKeyDown}
//                 style={{ display: 'inline-block', position: 'relative', outline: 'none' }} // Add outline: 'none' to remove focus outline
//             >
//                 {textArray.map((char, i) => (
//                     <span key={i} style={{ color: getColorAtIndex(i) }}>
//                         {char}
//                     </span>
//                 ))}
//                 <span
//                     style={{
//                         position: 'absolute',
//                         left: 'var(--cursor-position)ch', // Set cursor position based on CSS variable
//                         top: 0,
//                         height: '100%',
//                         width: '1px',
//                         background: 'blue',
//                     }}
//                 ></span>
//             </div>
//         </div>
//     );
// };

// export default TypingTest;
