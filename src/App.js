import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { TypingArea } from './components/TypingArea';
import TypingTest from './components/Typetest';
import { StartButton } from './components/StartButton';
import { Timer } from './components/Timer';
import { useState } from 'react';
import { Stack } from '@mui/material'




function App() {
  const [startbtn, setStartbtn] = useState(false)
  const toggleStartBtn = () => {
    setStartbtn(prev => !prev)
  }

  const [isType, setIsType] = useState(false)
  return (
    <div className="App">
      <NavBar></NavBar>
      <Timer isStart={isType && startbtn} ></Timer>
      <Stack spacing={2} direction={'row'} justifyContent={'center'}>
        <TypingArea onFocus={startbtn} setIsTyping={setIsType}></TypingArea>
        <StartButton toggle={toggleStartBtn} isStartBtn={startbtn}></StartButton>
      </Stack>
    </div >
  );
}

export default App;
