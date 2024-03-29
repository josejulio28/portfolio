import React from "react";
import "../styles/footer.css";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function footer() {
  return (
    <div className="Footer">
      <div>
        <p>Copyright © 2021. Built by Julio using React</p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/jose-julio-ferreira/">
          <AiFillLinkedin size="30px" color="black" />
        </a>
        <a href="https://github.com/josejulio28">
          <AiOutlineGithub size="30px" color="black" />
        </a>
        <a href="zejulio3@hotmail.com">
          <AiOutlineMail size="30px" color="black" />
        </a>
      </div>
    </div>
  );
}

export default footer;
