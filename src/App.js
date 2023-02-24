import './App.css';
import React from 'react'
import Splash from "./Components/Splash"
import Test from "./Components/Test"



export default function App(){
  const [startQuiz , setStartQuiz] = React.useState(false)
  function startQuizBtn(){
    setStartQuiz(prevStartQuiz => !prevStartQuiz)
  }
 return(
  <div>
    {startQuiz===false?
     <Splash startQuizBtn = {startQuizBtn}/>
    :<Test />
    }
  </div>
 )
}



      


        