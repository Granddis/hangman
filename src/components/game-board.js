import React,{useState} from 'react';
import ButtonGrid from './ButtonGrid';
import LetterGrid  from './LetterGrid';

export default function({secretWord, maxErrors, isShown}) {
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [errorCount, setErrorCount] = useState(0);
const letterGuessedHandler = function(letter){
    console.log("letter",letter);
    let val = letter.toLowerCase();
    console.log("secretWord",secretWord.toLowerCase());
    if(secretWord.toLowerCase().indexOf(val) === -1){
        console.log("errorCount", errorCount);
        setErrorCount(errorCount +1);
    }

    setGuessedLetters(prev => [...prev, val]);

}

  return (
    <div className={isShown?'':'hidden'}>
        <div>
            <div>
                Mistakes left: {maxErrors - errorCount}
            </div>
            <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters} />
        {errorCount < maxErrors && <ButtonGrid letterGuessed={letterGuessedHandler} />
        }
        </div>
    </div>
  )
}
