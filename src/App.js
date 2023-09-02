import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { TypingArea } from './components/TypingArea';
import OverlappingSpans from './components/Typetest';
import { StartButton } from './components/StartButton';
import { Timer } from './components/Timer';
import { useState } from 'react';
import { Stack, Typography } from '@mui/material'
import { Footer } from './components/Footer';
import { TypingSpeed } from './components/TypingSpeed';




function App() {
  const [startbtn, setStartbtn] = useState(false)
  const [keyStrokes, setKeyStrokes] = useState(0)
  const [timeMinute, setTimeMinute] = useState(0)
  const [correctStrokes, setCorrectStrokes] = useState(0)


  const toggleStartBtn = () => {
    setStartbtn(prev => !prev)
  }

  const [isType, setIsType] = useState(false)
  return (
    <div className="App" style={{ marginBottom: '200px' }} >
      <NavBar></NavBar>
      <Timer isStart={isType && startbtn} setTimeMinute={setTimeMinute}></Timer>

      <TypingSpeed
        strokes={keyStrokes}
        timeMinute={timeMinute}
        correctStrokes={correctStrokes}

      ></TypingSpeed>
      <Stack
        spacing={10}
        justifyContent={'center'}
        alignContent={'center'}
        sx={{ py: 4 }}
        direction={'row'}
      >
        <TypingArea onFocus={startbtn} setIsTyping={setIsType} setKeyStrokes={setKeyStrokes}></TypingArea>
      </Stack>
      <StartButton toggle={toggleStartBtn} isStartBtn={startbtn}></StartButton>
      <Footer></Footer>
    </div >
  );
}

export default App;
