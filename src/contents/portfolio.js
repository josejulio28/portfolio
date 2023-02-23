import React from "react";
import "../styles/portfolio.css";
import pets from "../images/pets_img2.png";
import survivors from "../images/survivors_img.png";
import nytimes from "../images/Nytimes.png";
import todo from "../images/TODOimg.png";

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

            <a href="https://github.com/PatriciaZB/SURVIVORS">GitHub</a>
          </div>
        </div>
        <div className="card-portfolio">
          <img className="img-portfolio" src="../images/TODOimg.png" />
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
            <a href="https://main.d2djgxcmmqqh1o.amplifyapp.com">Live</a>
            <a
              href="
            https://github.com/josejulio28/NYtimes.git"
            >
              GitHub
            </a>
          </div>
        </div>{" "}
        <div className="card-portfolio">
          <img className="img-portfolio" src={todo} alt="todo app" />
          <div className="card-text grid-col-span-3" id="reverse-image">
            <h2>TODO App</h2>
            <p>
              This was my first project where I decided to use{" "}
              <b>
                <u>Typescript</u>.
              </b>{" "}
              I also used a{" "}
              <b>
                <u>React library, react-toastify</u>
              </b>
              .
            </p>
            <a href="https://main.dc87fnzs31s9x.amplifyapp.com/">Live</a>
            <a href="https://github.com/josejulio28/TodoApp.git">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
