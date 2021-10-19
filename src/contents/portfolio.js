import React from "react"
import "../styles/portfolio.scss"
import pets from "./pets_img.png"
import survivors from "./survivors_img.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import { FaChrome} from 'react-icons/fa';
import {AiOutlineGithub} from 'react-icons/ai';


function portfolio() {
    return (
        <div class="container">
          <Row>
            <div className="col-12 col-sm-6 col-md-4 card-portfolio" >
              <h2>Survivors</h2>

                <img className="img-portfolio" src={survivors} alt="image_survivors"/>
                <a href="https://www.womensurvivors.net/" target="_blank">
                  <FaChrome size = '30px' color="black" />
                </a>
                <a href="https://github.com/josejulio28">
            <AiOutlineGithub size = '30px'color="black"/></a>
                <p></p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 card-portfolio">
                <h2>
                Pets
                </h2>
                <img className="img-portfolio" src={pets} alt="image_of_pet"/>
                <a href="https://book-a-pet.herokuapp.com/" target="_blank">
                  <FaChrome size = '30px' color="black" /> 
                  </a>
                  <a href="https://github.com/josejulio28">
                <AiOutlineGithub size = '30px'color="black"/></a>
                
                
                <p></p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 card-portfolio ">

              <h2> <a href="https">Mr Cocktail</a></h2>
              <FaChrome size = '30px' color="black" />
              <p></p></div>
          </Row>
        </div>
    )
}

export default portfolio
