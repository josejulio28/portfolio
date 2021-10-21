import React from "react";
import "../styles/techskills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa-database } from 'react-icons/fas';
import { Card, Row, Col, Button } from "react-bootstrap";

function techskills() {
  return (
    <div class="container">
      <h3>Technicall Skills </h3>
      <Row>
        <Card
          style={{ width: "16rem" }}
          className=" m-4 shadow-sm p-3 mb-5 bg-white rounded"
        >
          <Card.Body>
            <Card.Title>Frontend</Card.Title>
            <Card.Text className="mb-2 text-muted">
              <p>React</p>
              <p>JavaScript</p>
              <p>CSS</p>
              <p>HTML</p>
              <p>Figma</p>
              <p>SQL</p>
              <p>Bootstrap</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "16rem" }}
          className="m-4 shadow-sm p-3 mb-5 bg-white rounded"
        >
          <Card.Body>
            <Card.Title>Backend</Card.Title>
            <Card.Text className="mb-2 text-muted">
              <p>Node</p>
              <p>Ruby</p>
              <p>Ruby on Rails</p>
              <p>SQL</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default techskills;
