import React from "react"
import "./techskills.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function techskills() {
    return (
        <Container>
        <h2>Technicall Skills </h2>
        <Row col-12 col-sm-6 col-md-3 techskills>
        <h2>Technical Skills </h2>
          <Row col-12 col-sm-6 col-md-3 >
            <h3>React</h3>
            <h3>JavaScript</h3>
            <h3>CSS</h3>
            <h3>HTML</h3>
            <h3>Ruby</h3>
            <h3>Ruby on Rails</h3>
            <h3>Figma</h3>
            <h3>Git</h3>
            <h3>SQL</h3>
            <h3>Bootstrap</h3>
          </Row>

          </Row>
        </Container>
      )
}

export default techskills
