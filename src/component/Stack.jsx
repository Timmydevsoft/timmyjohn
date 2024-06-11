import React from "react"
import html from '../assets/images/html.png'
import css from "../assets/images/css.png"
import javascript from "../assets/images/javascript.png"
import reactIcon from "../assets/images/React.jpeg"
import cordova from "../assets/images/cordova.jpeg"
import tailwind from "../assets/images/tailwind.png"
import typescript from "../assets/images/typescript.png"
import "../assets/CSS/Stack.css"


const Stack = ()=>{

    const stack = [
        {
            name: "HTML",
            icon:  html
        },
        {
            name: "CSS",
            icon:  css
        },
        {
            name: "javascript",
            icon:  javascript
        },
        {
            name: "REACT",
            icon: reactIcon
        },
        {
            name: "Typescript",
            icon: typescript
        },
        {
            name: "Tailwind CSS",
            icon: tailwind
        },
        {
            name: "CORDOVA",
            icon: cordova
        }
        
    ]
    return(
        <div className="stack-container">
            <h2 className="stack-title">/Core stack</h2>

            <div className="skill-list-container">

                {
                    stack.map((items, index)=>(
                        <div key={index} className="Skill-container">
                            <span>{items.name}</span>
                            <img  src={items.icon} alt={items.name} />

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Stack