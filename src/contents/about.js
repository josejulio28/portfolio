import React from "react"
import "../styles/about.scss"
import Image from "./Julio.jpg"

function about() {
    return (

      <div>
      <div>
        <div className="main-about">
             <div className="description">
                <h2> About me</h2>
                <p>Born in a lovely country called Portugal. Had a short stay in Poland and in Ireland. Currently living in Berlin. Recently, finished a bootcamp in Web Develepomentand the main focus has been on Front-end.  </p>
            </div>
            <div>
                <img className="img-about" src={Image} alt="My Image" />
            </div>
           
        </div>
        </div>
        </div>
    )
}

export default about
