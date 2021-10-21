import React from "react";
import "../styles/portfolio.css";
import pets from "../images/pets_img.png";
import survivors from "../images/survivors_img.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChrome } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { Card, Row, Col, Button } from "react-bootstrap";

function portfolio() {
  return (
    <div class="container-portfolio">
      <h3>Portfolio</h3>
      <Row>
        <Card style={{ width: "22rem" }} className=" m-4">
          <Card.Img variant="top" src={survivors} href="" />
          <Card.Body>
            <Card.Title>Survivors</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Ruby on Rails | JavaScript | Ruby
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }} className=" m-4">
          <Card.Img
            variant="top"
            src={pets}
            href="https://book-a-pet.herokuapp.com/"
          />
          <Card.Body>
            <Card.Title>Pets</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Ruby on Rails | JavaScript | Ruby
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default portfolio;
