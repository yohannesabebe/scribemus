import React from "react";


export default function Textfield(props){
    const [values, setvalues] = React.useState(props.sentences)
    // const sentences = props.sentences
    const [inputList, setInputList] = React.useState([])

    const inputRef = React.createRef(null);
    
    let [timeArr, setTimeArr] = React.useState([]);

    
    
    let [wpm, setWpm] = React.useState(0)


    React.useEffect(() => {
      // Focus on the input field when the component mounts
      inputRef.current.focus();
      
    }, []);

         
 
    
function handleKeyPress(event){   
// check if the pressed key is a character  
if (!event.key[1]){

    let time = new Date();
    setTimeArr((prevTime) => [...prevTime, (time.getTime()/1000)/60])

    let calculateWpm = (timeArr.length/5.0)/(timeArr[timeArr.length - 1] - timeArr[0])
    setWpm(calculateWpm)


    // updates the list of the user input
    setInputList((prevList) => [...prevList, event.key]);  

    setvalues(prevValues => prevValues.map((obj, index) => {
    if(inputList.length === index){
            
            if ((event.key === obj.val)){ 
                return{...obj, attempt: true, correct:true}}
            else {
                return{...obj, attempt:true}}}
    else{return obj}
    
            })
        )
    }
// else if(event.key == "Backspace"){
//     setInputList(prevList => prevList.slice(0, prevList.length - 1))
// }
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
        <div  ref ={inputRef} onKeyDown={handleKeyPress} tabIndex={0} className="text-field">
           {charVar}
            <div>{Math.round(wpm)}</div>
        </div>
    )



}