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
        <Container>
<<<<<<< HEAD

        <Row>
          <div className="col-12 col-sm-6 col-md-3 card-portfolio" >
            <h2><a href="https://www.womensurvivors.net/" target="_blank">Survivors</a></h2>
=======
          <Row>
            <div className="col-12 col-sm-6 col-md-3 card-portfolio" >
              <h2><a href="https://www.womensurvivors.net/" target="_blank">Survivors</a></h2>
>>>>>>> 31482299c54baef155f943237f74ec77e41a1c0c
                <img className="img-portfolio" src={survivors} alt="image_survivors"/>
                <p></p>
            </div>
            <div className="col-12 col-sm-6 col-md-3 card-portfolio">
                <h2><a href="https://book-a-pet.herokuapp.com/" target="_blank">Pets</a></h2>
                <img className="img-portfolio" src={pets} alt="image_of_pet"/>
                <p></p></div>
            <div className="col-12 col-sm-6 col-md-3 card-portfolio ">
<<<<<<< HEAD
                <h2> <a href="https">Mr Cocktail</a></h2>
                <p></p></div>
        </Row>
=======
              <h2> <a href="https">Mr Cocktail</a></h2>
              <p></p></div>
          </Row>
>>>>>>> 31482299c54baef155f943237f74ec77e41a1c0c
        </Container>
    )
}

export default portfolio
