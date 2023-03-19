import React from 'react'
import './PlayButton.css'
import { useState } from 'react';

const PlayButton = ({children,onPlay,onPause,}) => {

  const [playing, setPlaying] = useState(false)

    const handler = (e) => {
      e.stopPropagation();
     
       if(playing){
        onPause();
       }  else{
        onPlay();
       } 
     setPlaying(!playing);
      
    }

  return (
    <div className='btn'>
      <button onClick={handler}>{children} : {playing ? "⏸️" : "▶️"}</button>
    </div>
  )
}

export default PlayButton
