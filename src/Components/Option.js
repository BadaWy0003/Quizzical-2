import React from "react"

export default function Option(props){
    //let styles = {}
    React.useEffect(()=>{
        if(props.isChecked===true){
            console.log(props.isChecked)
        }
        else{console.log(props.isChecked)}
        
    },[])

   
    
    //const style1={background: "#F8BCBC", border: "none", color: "#9ca1b9", cursor: "not-allowed"}
    //const style2 = {color: "#9ca1b9", border: "none", cursor: "pointer"}

    //let styles = props.isChecked?{background: "#F8BCBC", border: "none", color: "red", cursor: "not-allowed"}:{color: "white", border: "none", cursor: "pointer"}
    
    //const classVariable = props.isChecked ? "checked-option":"option"
   
    return(
        <button 
        className="btn-choice"
        //style={styles}
        onClick={props.handleClick}
        >
            {props.value}
            
        </button>
    )
}