import React from "react";
import templeLogo from '../images/temple.png'
export default function Navbar(){
    function startClick() {
        return("Start")
    }
    function aboutClick() {
    return("about")
    }
    function profileClick() {
    return("Profile")
    }
    return(
        <div>
            <img src={templeLogo} width="40px" alt="temple logo"></img>
            <button onClick={startClick}>Start Test</button>
            <button onClick={aboutClick}>About</button>
            <button onClick={profileClick}>Account</button>
        </div>
    )
    
}