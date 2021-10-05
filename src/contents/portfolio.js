import React from "react"
import "./portfolio.css"
import pets from "./pets_img.png"
import survivors from "./survivors_img.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function portfolio() {
    return (
        <div class="container">
          <Row>
            <div className="col-12 col-sm-6 col-md-4 card-portfolio" >
              <h2><a href="https://www.womensurvivors.net/" target="_blank">Survivors</a></h2>
                <img className="img-portfolio" src={survivors} alt="image_survivors"/>
                <p></p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 card-portfolio">
                <h2><a href="https://book-a-pet.herokuapp.com/" target="_blank">Pets</a></h2>
                <img className="img-portfolio" src={pets} alt="image_of_pet"/>
                <p></p></div>
            <div className="col-12 col-sm-6 col-md-4 card-portfolio ">

              <h2> <a href="https">Mr Cocktail</a></h2>
              <p></p></div>
          </Row>
        </div>
    )
}

export default portfolio
