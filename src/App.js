import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Textfield from './components/Textfield.js';
import dict from './dict.js'
import Timer from './components/Timer.js'

function App() {
  const [sentences_state] = React.useState(dict)
  let [testOn, setTestOn] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    let interValid;
    if (testOn) {
      interValid = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1)
      }, 1000);
      setTimeout(() => {
        clearInterval(interValid);
        setTestOn(prevStart => !prevStart)
        setSeconds(0)
      }, 10000)
    }
   
     
    return () => {
      clearInterval(interValid); 
    };

  },[testOn])
  function startTyping() {
    setTestOn(true)
  }
  return (
    <div className="App">

      <nav className='Navbar'><Navbar 
      start = {startTyping}

      /></nav>
      <div id='seconds'>{seconds}</div>
         <Textfield 
         sentences = {sentences_state}
         start = {startTyping}

         />

     
      {/* <Timer /> */}
      
    </div>
  );
}

export default App;
