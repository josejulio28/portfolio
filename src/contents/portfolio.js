import React from "react";
import "../styles/portfolio.css";
import pets from "../images/pets_img2.png";
import survivors from "../images/survivors_img.png";
import nytimes from "../images/Nytimes.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Button } from "react-bootstrap";

function portfolio() {
  // const btnstyle = {
  //   backgroundColo,
  // };
  return (
    <div class="container-portfolio">
      <h2>Portfolio</h2>
      <Row>
        <Card
          style={{ width: "22rem" }}
          className=" m-4 shadow p-3 mb-5 bg-white "
        >
          <h5>Survivors</h5>
          <Card.Img
            variant="top"
            src={survivors}
            href=""
            style={{ height: "200px", width: "300px", alignSelf: "center" }}
          />
          <Card.Body>
            <Button
              href="https://github.com/PatriciaZB/SURVIVORS"
              style={{
                marginRight: "30px",
                backgroundColor: "#3c5870",
                borderColor: "#3c5870",
              }}
            >
              Live
            </Button>
            <Button
              style={{ backgroundColor: "#3c5870", borderColor: "#3c5870" }}
              href="https://main.d2djgxcmmqqh1o.amplifyapp.com/"
            >
              GitHub
            </Button>
            <Card.Subtitle
              className=" mt-3 "
              style={{ textAlign: "justify", lineHeight: "25px" }}
            >
              This was the final project of the bootcamp. Our group had to do a
              clone of the airbnb website using{" "}
              <b>
                <u>Ruby</u>
              </b>
              ,{" "}
              <b>
                <u>Ruby</u>
              </b>{" "}
              <b>
                <u>on</u>
              </b>{" "}
              <b>
                <u>Rails</u>
              </b>{" "}
              and some{" "}
              <b>
                <u>Javascript</u>
              </b>
              .
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "22rem" }}
          className=" m-4 shadow p-3 mb-5 bg-white "
        >
          <h5>Pets</h5>
          <Card.Img
            Stylevariant="top"
            src={pets}
            style={{ height: "200px", width: "300px", alignSelf: "center" }}
          />
          <Card.Body>
            <Button
              href="https://book-a-pet.herokuapp.com//"
              style={{
                marginRight: "30px",
                backgroundColor: "#3c5870",
                borderColor: "#3c5870",
              }}
            >
              Live
            </Button>
            <Button
              style={{ backgroundColor: "#3c5870", borderColor: "#3c5870" }}
              href="https://github.com/camimurg/book-a-pet"
            >
              GitHub
            </Button>
            <Card.Subtitle
              className="mt-3 "
              style={{ textAlign: "justify", lineHeight: "25px" }}
            >
              This was a group project that was part of the bootcamp. It was
              built with{" "}
              <b>
                <u>Ruby</u>
              </b>{" "}
              <b>
                <u>on</u>
              </b>{" "}
              <b>
                <u>Rails</u>
              </b>{" "}
              and we also used some{" "}
              <b>
                <u>Bootstraps</u>
              </b>{" "}
              as part of the styling.
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "22rem" }}
          className=" m-4 shadow p-3 mb-5 bg-white "
        >
          <h5>NY Times Searcher</h5>
          <Card.Img
            variant="top"
            src={nytimes}
            href=""
            style={{ height: "200px", width: "300px", alignSelf: "center" }}
          />
          <Card.Body>
            <Button
              variant="secondary"
              href="https://main.d2djgxcmmqqh1o.amplifyapp.com/"
              style={{
                marginRight: "30px",
                backgroundColor: "#3c5870",
                borderColor: "#3c5870",
              }}
            >
              Live
            </Button>
            <Button
              style={{ backgroundColor: "#3c5870", borderColor: "#3c5870" }}
              href="https://main.d2djgxcmmqqh1o.amplifyapp.com/"
            >
              GitHub
            </Button>
            <Card.Subtitle
              className=" mt-3 "
              style={{ textAlign: "justify", lineHeight: "25px" }}
            >
              This was a project I had done as part of a code challenge in a
              recrutiment process for a job. It's built using{" "}
              <b>
                <u>React</u>
              </b>{" "}
              and{" "}
              <b>
                <u>Redux</u>
              </b>
              . It is connected to the New York Times API to search for
              articles.
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default portfolio;
