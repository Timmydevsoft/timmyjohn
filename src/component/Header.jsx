import React from "react"
import hamburger from "../assets/images/icon-hamburger.svg"
import close from "../assets/images/icon-close.svg"
import "../assets/CSS/Header.css"
import { HashLink as Link } from "react-router-hash-link"
 const Header = (props)=>{

    const [menu, setMenu] = React.useState(false);

    const handleClick = ()=>{
        setMenu(prev => !prev)
    }
    
    return(
        <header className="header">
            <div className="logo-container">
                <span>O.O</span>
            </div>

            <div className={`nav-am-contact-container ${menu? "open" : ""}`}>
                <nav>
                    <Link onClick = {handleClick} className ="hash-link" to ="#">{props.home}</Link>
                    <Link onClick = {handleClick} className ="hash-link"  to = "#about">{props.about}</Link>
                    <Link onClick = {handleClick} className ="hash-link"  to = "#project">{props.project}</Link>
                    <Link onClick = {handleClick} className ="hash-link"  to ="#interest">{props.interest}</Link>
                    <Link onClick = {handleClick} className ="hash-link"  to = "#award">{props.award}</Link>
                </nav>

                <button className="contact-button">{props.contact}</button>

            </div>

            <button className="hamburger-container" onClick = {handleClick}>
                <img src={menu ? close : hamburger} alt= {menu? "hamburger icon" : "close icon"} />
            </button>

        </header>
    )
 }

 export default Header