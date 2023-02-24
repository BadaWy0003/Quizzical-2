import React from 'react'

export default function Splash(props){
    return(<div className="Splash">
      
    <h1>Quizzical</h1>
    <p>A test of 5 questions that makes you practice your knowledge!</p>
    
    <button className="start-button" onClick={props.startQuizBtn}>Start quiz</button>
  </div>
  )
}