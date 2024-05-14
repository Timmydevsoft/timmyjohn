import React from "react"
import awardImage from "../assets/images/image 25.png"
import "../assets/CSS/Achievement.css"

const award = [
    {
        id : '01',
        image: awardImage,
        name: "Certificate of completion in web development",
        awarder: "MASSTECHATHON"
    },

    {
        id : '02',
        image: awardImage,
        name: "Certificate of completetion in mobile app beginner's class (CORDOVA)",
        awarder: "BINCOM ACADEMY"
    },

    {
        id : '03',
        image: awardImage,
        name: "Award of committment to work",
        awarder: "ELIXIR GLOBAL MANUFACTURING FOOD LIMITED"
    },

    {
        id : '04',
        image: awardImage,
        name: "Certificate of comletion of mentor-me career mentorhip",
        awarder: "MENTORME "
    }
]


const Achievement = ()=>{

    const content = award.map(item=>{
        return(
            <div className="content-container" key = {item.id}>
                <img src= {item.image} alt= "award icon" />
                <div className="description">
                    <h5 className = "cert-name">{item.name}</h5>
                    <span className="organization">{item.awarder}</span>
                </div>
            </div>
        )
    });

    return(
        <div className="award-container" id= "award">
            <h4 className = "certification">Certification/Award</h4>
            <div className="achevement-list">
                {content}
            </div>
        </div>
    )
}

export default Achievement