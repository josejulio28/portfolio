
import React, { Component } from "react"
import { Link, Route, withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./navbar.css"
 
class navbar extends Component {
    render() {
        return (
            <div className="Navbar_container">
                <div>
                    <h1>José Júlio Gonçalves Ferreira</h1>
                </div>
                <div className="div-main">
                    <Link to="/"  className="link">Home</Link>
                    <Link to="/about"  className="link">About me</Link>
                    <a href="https://www.linkedin.com/in/jose-julio-ferreira/" className="link">LinkedIN</a>
                    <a href="https://github.com/josejulio28" className="link">GitHub</a>
                    <a href="zejulio3@hotmail.com" className="link">Email</a>
                </div>    
            </div>
            
        )
    }
}

export default navbar;