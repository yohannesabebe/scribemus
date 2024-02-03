import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Textfield from './components/Textfield.js';
import dict from './dict.js'


function App() {
  const [sentences_state] = React.useState(dict)
  return (
    <div className="App">
      <nav className='Navbar'><Navbar /></nav>
      <Textfield 
      sentences = {sentences_state}
      />
      
    </div>
  );
}

export default App;
