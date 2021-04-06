import React from "react"
import "./about.css"
import Image from "./Julio.jpg"

function about() {
    return (
        <div className="main-about">
            <div>
                <img className="img-about" src={Image} alt="My Image" />
            </div>
            <div className="description">
                <h2> About me</h2>
                <p>My name is Júlio and I am 29 years old. I was born in a lovely country called Portugal.  Recently, I finished a bootcamp in Web Develepoment. My I would like to focus more on front-end </p>
            </div>
        </div>
    )
}

export default about
