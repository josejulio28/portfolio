import React from "react"
import "../styles/portfolio.css"
import pets from "./pets_img.png"
import survivors from "./survivors_img.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaChrome} from 'react-icons/fa';
import {AiOutlineGithub} from 'react-icons/ai';


function portfolio() {
    return (
        <div class="container-portfolio">
            <div className="card-portfolio" >
              <h2>Survivors</h2>
              <div class="flip-card">
              <div class="flip-card-inner">
              <div class="flip-card-front">
                <img className="img-portfolio" src={survivors} alt="image_survivors"/>
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
              </div>
              </div>
              </div>
              <div className="card-symbols">
                  <a href="https://www.womensurvivors.net/" target="_blank">
                  <FaChrome size = '30px' color="black" />
                  </a>
                  <a href="https://github.com/josejulio28">
                  <AiOutlineGithub size = '30px'color="black"/></a>
              </div>
              </div>
              <div className="card-portfolio">
                <h2> Pets</h2>
                <img className="img-portfolio" src={pets} alt="image_of_pet"/>
                <div div className="card-symbols">
                  <a href="https://book-a-pet.herokuapp.com/" target="_blank">
                  <FaChrome size = '30px' color="black" /> 
                  </a>
                  <a href="https://github.com/josejulio28">
                  <AiOutlineGithub size = '30px'color="black"/></a>
                </div>
              </div>
            {/* <div className="col-12 col-sm-6 col-md-4 card-portfolio ">

              <h2> <a href="https">Mr Cocktail</a></h2>
              <FaChrome size = '30px' color="black" />
              <p></p></div> */}
        </div>
    )
}

export default portfolio
