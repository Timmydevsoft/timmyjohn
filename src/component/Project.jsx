import React from "react"

import data from "./projectData"
import '../assets/CSS/Project.css'

const Project = () => {

    const [screen, setScreen] = React.useState(window.innerWidth);

    React.useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setScreen(window.innerWidth)
        });
        return ()=>{
            window.removeEventListener("resize", ()=>{
                setScreen(window.innerWidth);
            })
        }
    },[]);
   

    return (
        <div className="projects-section" id= "project" /*ref={containerRef}*/>
            <h3 id="projects-heading">Projects</h3>
            <div className="project-container">
                {data.map((item, index) => (
                    <div
                        className="folio"
                        key={index}
                    >
                        <div className="top-container">
                            <h4 className="project-name">{item.name}</h4>
                            <img className="preview-image" src={screen > 375 ? item.image : item.png} alt={item.nane} />
                        </div>
                        <div className="project-details">
                            <div className="button-container">
                                <button className="live-page-button">
                                    <a href={item.livesite}>live site</a>
                                </button>
                                <button>
                                    <a href={item.code} target="_blank">view code</a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button id="view-more-project">
                <a href="https://github.com/Timmydevsoft?tab=repositories" target="_blank">View More</a>
            </button>
        </div>
    );
};

export default Project;
