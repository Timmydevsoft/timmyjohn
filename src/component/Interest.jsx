import "../assets/CSS/Interest.css"
const Interest = ()=>{

    const interest = [
        {
            interest: "Engineering",
            identifier: "en"
        },
        {
            interest: "Cloud",
            identifier: "cl"
        },
        {
            interest: "Technology",
            identifier: "tech"
        },
        {
            interest:  "AI, Data and Machine Learning",
            identifier: "ai"
        } 
        
        
       
    ]
    return(

        

        <div className="interest-conatiner" id = "interest">
            <h6 className="interest">/Interest</h6>

            <div className="interest-list" >
                {
                    interest.map(item=> (
                    <div key={item.identifier} className="interest-map-container">
                        <span className= {`aesthetic ${item.identifier}`}></span>
                        <p className = "spec-interest">{item.interest}</p>
                    </div>
                   )
                  )
                }
            </div>

        </div>
    )
}

export default Interest