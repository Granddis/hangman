import React from 'react'
import Letter from './Letter';

export default function LetterGrid({secretWord, guessedLetters}) {
    let secretWordArray = secretWord.split('');
    console.log("secretWord",secretWordArray);
    let letters = secretWordArray.map((letter, index)=> (
        <Letter
        letter={letter}
        guessedLetters={guessedLetters}
        />
    ));
    console.log("latter",letters);

  return (
    <div className='flex-container'>
      {letters}
    </div>
  )
}
