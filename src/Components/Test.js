import React from "react"
import Question from "./Question"


export default function Test(){
    const [testData , setTestData] = React.useState([])
    const [loading , setLoading] = React.useState(false)

//_______________________________________GET TEST DATA FROM API
    function GetTestData() {
      
        React.useEffect(() => {
          setLoading(true);
          async function fetchMyAPI() {
            let response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            response = await response.json()
            setTestData(response.results)
            setLoading(false);
            
            }
          fetchMyAPI()
          
          }, [])
        return <div>{JSON.stringify(testData)}</div>
        }
    
      GetTestData()
      console.log(testData)
//_______________________________________
      const questionsComponent = testData.map((q)=>(
        
            <Question
            key = {q.question}
            question = {q.question}
            correctAnswer = {q.correct_answer}
            incorrectAnswers = {q.incorrect_answers}
            />
        
      ))
      //console.log(questionsComponent)

    return(
        <div>
            {loading === true? 
            <h1>Loading questions</h1>
            :questionsComponent}
        </div>
        
    )
}