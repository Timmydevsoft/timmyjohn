import React from "react"
import html from '../assets/images/html.png'
import css from "../assets/images/css.png"
import javascript from "../assets/images/javascript.png"
import reactIcon from "../assets/images/React.jpeg"
import cordova from "../assets/images/cordova.jpeg"
import "../assets/CSS/Stack.css"


const Stack = ()=>{
    return(
        <div className="stack-container">
            <h2 className="stack-title">/Core stack</h2>

            <div className="skill-list-container">

                <div className="Skill-container">
                    <span>HTML</span>
                    <img  src={html} alt="HTML ICON" />

                </div>

                <div className="Skill-container">
                    <span>CSS</span>
                    <img src={css} alt="CSS ICON" />
                </div>

                <div className="Skill-container">
                    <span>javaScript</span>
                    <img src={javascript} alt="javaScript ICON" />
                </div>

                <div className="Skill-container">
                    <span>REACT</span>
                    <img src={reactIcon} alt="REACT ICON" />
                </div>

                <div className="Skill-container">
                    <span>CORDOVA</span>
                    <img src={cordova} alt="Cordova ICON" />
                </div>

            </div>

        </div>
    )
}

export default Stack