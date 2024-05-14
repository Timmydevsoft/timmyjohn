import React from 'react'
import Timmy from "../assets/images/Timmy.png"
import "../assets/CSS/More.css"


// const name = ()=>{
//   return (<span id ="name">I'm Olasunkanmi Oluwatimileyin</span>)
// }



const More = ()=>{
  const [textIndex, setTextIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');

const aboutMe = [
    `Hi there! I'm Olasunkanmi Oluwatimileyin, a passionate front-end developer with aspirations of becoming a full-stack software engineer. My journey into the world of technology began with a solid foundation in Electrical and Electronics Engineering, where I graduated with first-class honors. However, my fascination with engineering and technology led me to delve deeper into the realm of software engineering, starting with front-end development.`,
    "Driven by a relentless pursuit of knowledge and a desire to master the art of problem-solving, I approach challenges with a keen analytical mind. Leveraging my background in engineering, I aim to craft innovative solutions using the latest technologies and methodologies. I thrive on feedback, eagerly welcoming constructive criticism to continually improve and refine my skills. ",
    "Currently, I am actively seeking opportunities to intern as a front-end developer, eager to gain real-world industry exposure and contribute to meaningful projects. With a commitment to learning and growth, I am confident that I can bring value to any organization that provides me with the opportunity to learn, collaborate, and innovate."

  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (currentText.length < aboutMe[textIndex].length) {
        setCurrentText(prevText => prevText + aboutMe[textIndex].charAt(prevText.length));
      } else {
        clearInterval(timer);
        // Move to the next text after a delay (e.g., 2 seconds)
        setTimeout(() => {
          setTextIndex(prevIndex => (prevIndex + 1) % aboutMe.length);
          setCurrentText('');
        }, 5000);
      }
    }, 10); // Typing speed (milliseconds per character)

    return () => clearInterval(timer);
  }, [currentText, textIndex, aboutMe]);

  return(
      <div className='container' id = "about">

        <h3 id = "abooutme">/ Who am I</h3>

        <div className="detail-aboutme-container">

          <div className="mypics-container">
             <img src={Timmy} alt="my picture"/>
          </div>

          <div className="full-para-container">
             <p className='more'>{currentText}</p>
          </div>

        </div>
    

         
     </div>
  )
}

export default More