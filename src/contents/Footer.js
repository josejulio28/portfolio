import React from 'react'
import "../styles/footer.scss"
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

function footer() {
    return (
        <div className="Footer">
          <row>
            <a href="https://www.linkedin.com/in/jose-julio-ferreira/">
            <AiFillLinkedin size = '30px' color="black" />
            </a>
            <a href="https://github.com/josejulio28">
            <AiOutlineGithub size = '30px'color="black"/></a>
            <a href="zejulio3@hotmail.com"><AiOutlineMail size = '30px' color="black"/></a>
          </row>
        </div>
    )
}

export default footer
