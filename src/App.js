import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { TypingArea } from './components/TypingArea';
import TypingTest from './components/Typetest';
import { StartButton } from './components/StartButton';
import { Timer } from './components/Timer';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Timer></Timer>
      <TypingArea></TypingArea>
    </div>
  );
}

export default App;
