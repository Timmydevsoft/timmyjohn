import React from "react"
import "../assets/CSS/Text.css"

const text = [
    {
        id: "1",
        name: "Node Js"
    },

    {
        id: "2",
        name: "JavaScript"
    },

    {
        id: "3",
        name: "React"
    },

    {
        id: "4",
        name: "Engineering"
    },

    {
        id: "5",
        name: "Cordova"
    },
    {
        id: "6",
        name: "Technology"
    },

    {
        id: "7",
        name: "MERN stack"
    }
]


const texts  = text.map(items =>{
    return (<span key = {items.id}>{items.name}</span>)
})


const Text = ({x,y})=>{

    const[position, setPosition] = React.useState({x, y});

    React.useEffect(()=>{

        const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(() => {
        const newX = position.x + getRandomNumber(-10, 10); // Adjust the range as needed
        const newY = position.y + getRandomNumber(-10, 10); // Adjust the range as needed
        setPosition({ x: newX, y: newY });
        console.log("working");
        }, 1000);

        return () => clearInterval(interval);

    }, [position])
    
    return(
        <div  className="moving-text-container" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
          {texts}
        </div>
    )
}

export default Text