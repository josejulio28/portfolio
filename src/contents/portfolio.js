import React from "react"
import "./portfolio.css"
import pets from "./pets_img.png"
import survivors from "./survivors_img.png"

function portfolio() {
    return (
        <div className="div-portfolio">
          <a href="https://www.womensurvivors.net/"> </a>
          <div className="card-portfolio" >
            <h2>Survivors</h2>
                <img className="img-portfolio" src={survivors} alt="image_survivors"/>
                <p></p>
            </div>
            <div className="card-portfolio">
                <h2><a href="https://book-a-pet.herokuapp.com/">Pets</a></h2>
                <img className="img-portfolio" src={pets} alt="image_of_pet"/>
                <p></p></div>
            <div className="card-portfolio">
                <h2> <a href="https">Mr Cocktail</a></h2>
                <p></p></div>
        </div>
    )
}

export default portfolio
