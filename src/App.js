import logo from './logo.svg';
import './App.css';
import GameBoard from './components/game-board';
import WordSelect from './components/WordSelect';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {
  const [secretWord, setSecretWord] = useState('');
  return (
    <div className='app-container'>
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play a game?</p>
      <div>
        <WordSelect 
          isShown={!secretWord}
          wordSelected={val => setSecretWord(val)} />
        <GameBoard 
          secretWord={secretWord}
          maxErrors={6}
          isShown={secretWord}
        ></GameBoard>
      </div>
    </div>
  );
}

export default App;
