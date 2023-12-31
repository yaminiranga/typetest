import './App.css';
import { NavBar } from './components/NavBar';
import { TypingArea } from './components/TypingArea';
import { StartButton } from './components/StartButton';
import { Timer } from './components/Timer';
import { useState } from 'react';
import { Stack } from '@mui/material'
import { Footer } from './components/Footer';
import { TypingSpeed } from './components/TypingSpeed';




function App() {
  const [startbtn, setStartbtn] = useState(false)
  const [keyStrokes, setKeyStrokes] = useState(0)
  const [timeMinute, setTimeMinute] = useState(0)
  const [correctStrokes, setCorrectStrokes] = useState(0)
  const [words, setWords] = useState(0)
  const [isType, setIsType] = useState(false)


  const toggleStartBtn = () => {
    setStartbtn(prev => !prev)
  }


  return (
    <div className="App" style={{ marginBottom: '200px' }} >
      <NavBar></NavBar>
      <Timer isStart={isType && startbtn} setTimeMinute={setTimeMinute}></Timer>

      <TypingSpeed
        strokes={keyStrokes}
        timeMinute={timeMinute}
        correctStrokes={correctStrokes}
        words={words}
      ></TypingSpeed>

      <Stack
        spacing={10}
        justifyContent={'center'}
        alignContent={'center'}
        sx={{ py: 4 }}
        direction={'row'}
      >
        <TypingArea setToggleStartBtn={toggleStartBtn} onFocus={startbtn} setIsTyping={setIsType} setKeyStrokes={setKeyStrokes} setCorrectStrokes={setCorrectStrokes} setWords={setWords}></TypingArea>
      </Stack>
      <StartButton toggle={toggleStartBtn} isStartBtn={startbtn}></StartButton>
      <Footer></Footer>
    </div >
  );
}

export default App;
