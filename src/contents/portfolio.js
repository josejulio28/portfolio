import React from "react";
import "../styles/portfolio.css";
import pets from "../images/pets_img2.png";
import survivors from "../images/survivors_img.png";
import nytimes from "../images/Nytimes.png";

function portfolio() {
  return (
    <div class="container-portfolio">
      <h1>Portfolio</h1>
      <div className="container-cards">
        <div className="card-portfolio">
          <img className="img-portfolio" src={survivors} />

          <div className="card-text grid-col-span-3">
            <h2>Survivors</h2>
            <p>
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
            </p>
            <a href="https://github.com/PatriciaZB/SURVIVORS">Live</a>
            <a href="https://main.d2djgxcmmqqh1o.amplifyapp.com/">GitHub</a>
          </div>
        </div>
        <div className="card-portfolio">
          <img className="img-portfolio" src={pets} />
          <div className="card-text grid-col-span-3" id="reverse-image">
            <h2>Pets</h2>
            <p>
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
            </p>
            <a href="https://book-a-pet.herokuapp.com//">Live</a>
            <a href="https://github.com/camimurg/book-a-pet">GitHub</a>
          </div>
        </div>
        <div className="card-portfolio">
          <img className="img-portfolio" src={nytimes} />

          <div className="card-text grid-col-span-3">
            <h2>NY Times Searcher</h2>
            <p>
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
            </p>
            <a href="https://main.d2djgxcmmqqh1o.amplifyapp.com/">Live</a>
            <a href="https://main.d2djgxcmmqqh1o.amplifyapp.com/">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
