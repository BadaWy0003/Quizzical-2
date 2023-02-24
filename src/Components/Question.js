import React from "react"
import {nanoid} from "nanoid"
import Option from "./Option"

export default function Question(props){
    const optionsArray = []
    const [optionState , setOptionState] = React.useState(false)
    const [optionsState, setOptionsState] = React.useState(optionsArray)

    props.incorrectAnswers.map(answer => optionsArray.push({isCorrect: false, isChecked: false, value: answer, id: nanoid()}))
    optionsArray.push({isCorrect: true, isChecked: false, value: props.correctAnswer, id: nanoid()})

    for (let i = 0; i < optionsArray.length; i++) {
        optionsArray[i].value = optionsArray[i].value.replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'").replace(/&amp;/g, "&")
                .replace(/&eacute;/g, "é").replace(/&Eacute;/g, "É")
    }
    optionsArray.sort((a,b) => a.value.localeCompare(b.value))
    //console.log(optionsArray)
    const optionsComponent = optionsArray.map(o=>(
        <Option
        id={o.id}
        key={o.id}
        value={o.value}
        isCorrect={o.isCorrect}
        isChecked={o.isChecked}
        //optionColor={optionColor}
        handleClick={()=>handleClick(o.id)}
        />
    ))

    function handleClick(id){
        
    }

    return(
        <div className="question">
            <h3 className="question-title">{props.question.replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'").replace(/&amp;/g, "&")
                .replace(/&eacute;/g, "é").replace(/&Eacute;/g, "É")}</h3>
                <div className="choices-container">
                    {optionsComponent}
                </div>
                </div>
    )
}