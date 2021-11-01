import React from "react";
import "../styles/about.css";
import Image from "../images/Julio.jpg";
import { Card, Row } from "react-bootstrap";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
function about() {
  return (
    <div className="container-about">
      <div className="main-about">
        <div className="description">
          <h2> Júlio Ferreira</h2>
          <p>
            Born in a lovely country called Portugal and lived in Poland and in
            Ireland. At the moment, Berlin is home. Recently, finished a
            bootcamp as a Full Stack Web Developer.
          </p>
        </div>
        <div ClassName="card-photo">
          <img className="img-about" src={Image} alt="My Image" />
          <br />
          <div>
            <a href="https://www.linkedin.com/in/jose-julio-ferreira/">
              <AiFillLinkedin size="30px" color="black" />
            </a>
            <a href="https://github.com/josejulio28">
              <AiOutlineGithub size="30px" color="black" />
            </a>
            <a href="mailto:zejulio3@hotmail.com">
              <AiOutlineMail size="30px" color="black" />
            </a>
          </div>
        </div>
      </div>
      <Row>
        <Card
          style={{ width: "18rem" }}
          className=" m-4 shadow p-3 mb-5 bg-white rounded"
        >
          <Card.Body>
            <Card.Title>Quick Learner</Card.Title>
            <Card.Text>
              Having the ability to learn rapidly, applying and processing the
              information provided. Searching for new challenges and eager to
              learn more.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          className=" m-4 shadow p-3 mb-5 bg-white rounded"
        >
          <Card.Body>
            <Card.Title>Communication</Card.Title>
            <Card.Text>
              Expressing clearly and receptive to new ideas. Always looking for
              feedback and constructive criticism.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          className=" m-4 shadow p-3 mb-5 bg-white rounded"
        >
          <Card.Body>
            <Card.Title>Team Player</Card.Title>
            <Card.Text>
              Respecting other opinions and committed to help others to find
              better solutions.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default about;
