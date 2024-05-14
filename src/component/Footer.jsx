import github from "../assets/images/Frame 1171277186.png"
import facebook from "../assets/images/Frame 1171277187.png"
import X from "../assets/images/Frame 1171277185.png"
import linkedin from "../assets/images/Frame 1171277188.png"
import Timmy from "../assets/images/Timmy.png"
import "../assets/CSS/Footer.css"
const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="profile-container">
                <div id="footer-image-container">
                    <img src= {Timmy} alt = "My piccture"/>
                </div>

                <span id = "footer-name">{`<Olasunkanmi  Oluwatimileyin/>`}</span>
                <span id = "role">{`||Front-End Engineer`}</span>
                
            </div>

            <ul className="contacts">
                <li>timiolasunkanmi@gmail.com</li>
                <li>+2349131528192</li>

            </ul>

            


           <div className="right-and-soccial">
                <div className="socials-footer">
                        <a href="https://github.com/Timmydevsoft">
                            <img src={github} alt="github icon" />
                        </a>

                        <a href="https://www.facebook.com/olluwatimileyin.olasunkanmi">
                            <img src={facebook} alt="facebook icon"/>
                        </a>

                        <a href="https://x.comOluwati43810502?s=09">
                            <img src= {X} alt="X icon" />
                        </a>

                        <a href="https://www.linkedin.com/in/oluwatimileyin-olasunkanmi-9b16681b5?">
                            <img src={linkedin} alt="Linkedin icon" />
                        </a>
                    </div>

                    
                       <p id= 'right'> copy right Timmy &#169; 2024</p>
                    

           </div>

           


        </footer>
    )
}

export default Footer