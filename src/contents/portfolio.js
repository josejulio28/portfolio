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
        <Card
          style={{ width: "22rem" }}
          className=" m-4 shadow p-3 mb-5 bg-white rounded"
        >
          <Card.Img variant="top" src={survivors} href="" />
          <Card.Body>
            <Button variant="secondary" href="https://www.womensurvivors.net/">
              Survivors
            </Button>
            <Card.Subtitle className=" mt-3 text-muted">
              Ruby on Rails | JavaScript | Ruby
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "22rem" }}
          className=" m-4 shadow p-3 mb-5 bg-white rounded"
        >
          <Card.Img variant="top" src={pets} />
          <Card.Body>
            <Button
              variant="secondary"
              href="https://book-a-pet.herokuapp.com//"
            >
              Pets
            </Button>
            <Card.Subtitle className="mt-3 text-muted">
              Ruby on Rails | JavaScript | Ruby
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default portfolio;
