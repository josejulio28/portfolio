import React from "react"
import "./about.css"
import Image from "./Julio.jpg"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function about() {
    return (
<<<<<<< HEAD

=======
>>>>>>> 31482299c54baef155f943237f74ec77e41a1c0c
      <Container>
      <Row>
        <div className="main-about">
            <div>
                <img className="img-about" src={Image} alt="My Image" />
            </div>
            <div className="description">
                <h2> About me</h2>
                <p>My name is Júlio and I am 29 years old. I was born in a lovely country called Portugal.  Recently, I finished a bootcamp in Web Develepoment. My I would like to focus more on Front-end. </p>
            </div>
        </div>
        </Row>
        </Container>
    )
}

export default about
