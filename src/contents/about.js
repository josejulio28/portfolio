import React from "react"
import "../styles/about.css"
import Image from "./Julio.jpg"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function about() {
    return (
      <Container>
        <div>
            <h1>José Júlio Gonçalves Ferreira</h1>
        </div>
        <div className="main-about">
            <div className="description">
                <h2> About me</h2>
                <p>My name is Júlio and I am 29 years old. I was born in a lovely country called Portugal.  Recently, I finished a bootcamp in Web Develepoment. My I would like to focus more on Front-end. </p>
            </div>
            <div>
                <img className="img-about" src={Image} alt="My Image"/>
            </div>
        </div>
        <div className="card-about-skills">
            <div className="card-about">
                <h3>Team Player </h3>
                <p>Finding solutions and </p>
            </div>
            <div className="card-about">
                <h3>Quick Learner </h3>
                <p>Having the ability to learn rapidly, applying and processing the information provided</p>
            </div>
            <div className="card-about">
                <h3>Communication</h3>
                <p>Expressing myself clearly, </p>
            </div>
        </div>
        </Container>
    )
}

export default about
