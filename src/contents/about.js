import React from "react";
import "../styles/about.css";
import Image from "../images/Julio.jpg";
import team_player from "../images/undraw_pair_programming_re_or4x.svg";
import learner from "../images/undraw_researching_re_fuod.svg";
import communication from "../images/undraw_version_control_re_mg66.svg";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
function about() {
  return (
    <div className="container-about">
      <div className="main-about">
        <div ClassName="card-photo">
          <img className="img-about" src={Image} alt="Myself" />
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
        <div className="description">
          <h1> Júlio Ferreira</h1>
          <p>
            Born in a lovely country called Portugal. i have worked and lived in
            Poland and in Ireland. Currently I live in Germany, I work as a Site
            Reliability Engineer.
          </p>
        </div>
      </div>
      <div className="container-skills">
        <div className="card-skills">
          <img alt="" className="img-about" src={learner} />
          <h3>Quick Learner</h3>
          <p>
            Having the ability to learn rapidly, applying and processing the
            information provided. Searching for new challenges and eager to
            learn more.
          </p>
        </div>
        <div className="card-skills">
          <img alt="" className="img-about" src={communication} />
          <h3>Communication</h3>
          <p>
            Expressing clearly and receptive to new ideas. Always looking for
            feedback and constructive criticism.
          </p>
        </div>
        <div className="card-skills">
          <img alt="temaplayer" className="img-about" src={team_player} />
          <h3>Team Player</h3>
          <p>
            Respecting other opinions and committed to help others to find
            better solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;
