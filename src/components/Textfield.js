import React from "react";


export default function Textfield(props){
    const [values, setvalues] = React.useState(props.sentences)
    // const sentences = props.sentences
    const [inputList, setInputList] = React.useState([])

    const inputRef = React.createRef(null);

    React.useEffect(() => {
      // Focus on the input field when the component mounts
      inputRef.current.focus();
    }, []);
  
 
    const start = new Date();
    console.log(start/1000)
function handleKeyPress(event){   
// check if the pressed key is a character  
if (!event.key[1]){
    // updates the list of the user input
    setInputList((prevList) => [...prevList, event.key]);  
    
    setvalues(prevValues => prevValues.map((obj, index) => {
    if(inputList.length === index){
            
            if ((event.key === obj.val)){ 
                return{...obj, attempt: true, correct:true}}
            else {
                return{...obj, attempt:true}}}
    else{return obj}
    
}))
}
}

 
let charVar = values.map( (char, index) => {
    let handleClassName = char.attempt? char.correct? 'attempted correct':'attempted incorrect':'no_attempt'
    handleClassName += inputList.length === index ? " nextUp":""
 
            return <span
                    className={handleClassName}
                    >
                        {char.val} 
                   </span>

})
// List of inputs
let inpVar=  inputList.map(  inp => { 
    return <span>{inp}</span>

})
    return(
        <div  ref ={inputRef} onKeyDown={handleKeyPress} tabIndex={0}>
           {charVar} <div>{inpVar}</div>
        </div>
    )



}