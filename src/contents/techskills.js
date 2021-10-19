import React from "react";
import "../styles/techskills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa-database } from 'react-icons/fas';

function techskills() {
  return (
    <div class="container">
      <h2>Technicall Skills </h2>
      <div className="skills">
        <div className="card-skills" s>
          <h2>Frontend</h2>
          <div>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Figma</li>
              <li>SQL</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="card-skills">
          <h2>Backend</h2>
          <div>
            <ul>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
        <div className="card-skills">
          <h2>Others</h2>
          <div>
            <ul>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default techskills;
