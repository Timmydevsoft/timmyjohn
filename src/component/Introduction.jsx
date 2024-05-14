import React from "react"
import github from "../assets/images/Frame 1171277186.png"
import facebook from "../assets/images/Frame 1171277187.png"
import X from "../assets/images/Frame 1171277185.png"
import linkedin from "../assets/images/Frame 1171277188.png"
import Timmy from "../assets/images/Timmy.png"
import "../assets/CSS/Introduction.css"



const Introduction = (props)=>{
    return(
        <div className="intro-container">
            <div className="intro-text-container">
                <span id="myname">/my name is</span>
                <h1 className="name">(Olasunkanmi/) <span className="colored-name">Oluwatimileyin</span></h1>
                <div className="social-icon-container">

                    <img src={github} alt="github icon" />
                    <img src={facebook} alt="facebook icon" />
                    <img src={X} alt="X-Icon" />
                    <img src={linkedin} alt="LinkedIn" />

                </div>
            </div>

            <div className="profile-pics-intro">
                <img className = "my-picture" src={Timmy} alt="My Picture" />
            </div>
        </div>
    )
}

export default Introduction