import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { TypingArea } from './components/TypingArea';
import TypingTest from './components/Typetest';
import { StartButton } from './components/StartButton';
import { Timer } from './components/Timer';
import { useState } from 'react';
import { Stack, Typography } from '@mui/material'
import { Footer } from './components/Footer';




function App() {
  const [startbtn, setStartbtn] = useState(false)
  const toggleStartBtn = () => {
    setStartbtn(prev => !prev)
  }

  const [isType, setIsType] = useState(false)
  return (
    <div className="App" style={{ marginBottom: '200px' }} >
      <NavBar></NavBar>
      <Timer isStart={isType && startbtn} ></Timer>
      <Stack
        spacing={10}
        justifyContent={'center'}
        alignContent={'center'}
        sx={{ py: 4 }}
        direction={'row'}
      >
        <TypingArea onFocus={startbtn} setIsTyping={setIsType}></TypingArea>
      </Stack>
      <StartButton toggle={toggleStartBtn} isStartBtn={startbtn}></StartButton>
      <Footer></Footer>
    </div >
  );
}

export default App;
