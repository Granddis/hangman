import React,{useState} from 'react';

export default function Button({value, onClick}) {
    const [isClicked, setIsClicked] =useState(false);
    let className = 'button btn btn-primary';

    if(isClicked){
        className += ' guessed';
    }

    function clickHandler(e){
        setIsClicked(true);
        onClick(value);
    }
  return (
    <button 
    className={className} 
    onClick={clickHandler}
    >
        {value}
    </button>
  )
}
