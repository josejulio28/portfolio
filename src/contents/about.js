import React from "react";
import "../styles/about.css";
import Image from "../images/Julio.jpg";

function about() {
  return (
    <div className="container">
      <div>
        <h1>José Júlio Gonçalves Ferreira</h1>
      </div>
      <div className="main-about">
        <div className="description">
          <h2> About me</h2>
          <p>
            Born in a lovely country called Portugal and moved to Poland and
            Ireland. At the moment, Berlin is home. Recently, finished a
            bootcamp in Web Develepoment and the main focus is now Front-end.
          </p>
        </div>
        <div>
          <img className="img-about" src={Image} alt="My Image" />
        </div>
      </div>
      <div className="card-about-skills">
        <div className="card-about">
          <h3>Team Player </h3>
          <p>Finding solutions and </p>
        </div>
        <div className="card-about">
          <h3>Quick Learner </h3>
          <p>
            Having the ability to learn rapidly, applying and processing the
            information provided
          </p>
        </div>
        <div className="card-about">
          <h3>Communication</h3>
          <p>Expressing myself clearly, </p>
        </div>
      </div>
    </div>
  );
}

export default about;
