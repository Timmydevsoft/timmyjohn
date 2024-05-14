import React from "react"
import Text from "./Text.jsx"
import { nanoid } from "nanoid";
import "../assets/CSS/MovingText.css"

const MovingText = ()=>{

    
        const randomNumber = (min,max)=> Math.random() * (max-min) + min;
    
        const textPosition = Array.from({length: 20}, (_, index) =>(
            {
                index: nanoid(),
                x: randomNumber(0, window.innerWidth),
                y: randomNumber (0, window.innerHeight)
            }
        ))
    

    return(
        <div className="bg-text-container">
            {textPosition.map(txt =>(
                <Text
                   key = {txt.index}
                   x = {txt.x}
                   y = {txt.y}
                />
            ))}
        </div>
    )
}

export default MovingText