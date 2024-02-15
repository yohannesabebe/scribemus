import React from "react";
import scribemusLogo from '../images/temple.png'
import userPng from '../images/user.png'
import keyboardPng from '../images/keyboard.png'
import aboutPng from '../images/about.png'
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
        <div id="navBar">
            <nav id="scribemus-text-logo">
            <h3 id="website-name">Scribemus</h3>
            <img src={scribemusLogo} id = "scribemus-logo"alt="scribemus logo"></img>
            </nav>
            <nav id="navButtonContainer">
            {/* <button onClick={startClick } className="startTest button">Start Test</button> */}
            <img src={keyboardPng} onClick={startClick}  alt="keyboard" className="start button"></img>
            <img src={aboutPng}  onClick={aboutClick}  alt='about' className='about button'></img>
            {/* <button onClick={aboutClick} className="about button">About</button> */}
            {/* <button onClick={profileClick} className="button" id="account"> */}
                <img src={userPng} onClick={profileClick} alt="person" className="profile button"></img>
            {/* </button> */}
            </nav>

        </div>
    )
    
}