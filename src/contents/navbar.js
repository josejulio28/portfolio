
import React, { Component } from "react"
import { Link, Route, withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../styles/navbar.css"
import { AiOutlineGithub } from 'react-icons/fa';
 
class navbar extends Component {
    render() {
        return (
            <div className="Navbar_container">
                <div>
                    <h1>José Júlio Gonçalves Ferreira</h1>
                </div>
                <div className="div-main">
                    <Link to="/"  className="link">Home</Link>
                    <Link to="/projects"  className="link">
                    Projects
                    </Link>
                    <Link to="/tech"  className="link"> Skills</Link>
                    <Link to="/contact"  className="link"> Contact</Link>
                    <Link to="/julioferreira.pdf" target="_blank" className="link" >Curriculum</Link>
                </div>    
            </div>
            
        )
    }
}

export default navbar;