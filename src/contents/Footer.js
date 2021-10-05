import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
function footer() {
    return (
        <container>
          <row>
            <a href="https://www.linkedin.com/in/jose-julio-ferreira/">
            <AiFillLinkedin size = '30px' color="black" />
            </a>
            <a href="https://github.com/josejulio28">
            <AiOutlineGithub size = '30px'color="black"/></a>
            <a href="zejulio3@hotmail.com"><AiOutlineMail size = '30px' color="black"/></a>
          </row>
        </container>
    )
}

export default footer
