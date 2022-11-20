import React from 'react'

export default function Letter({letter,guessedLetters}) {
    console.log("val",letter)
    return (
        <div 
        className= "letter"
        >
          { guessedLetters.includes(letter.toLowerCase())? letter:' '}
        </div>
      )
}
