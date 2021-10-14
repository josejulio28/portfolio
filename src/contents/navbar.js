
import React, { Component } from "react"
import { NavLink,  } from "react-router-dom";
import "../styles/navbar.css"
import {Navbar,  Nav} from 'react-bootstrap'
 
class navbar extends Component {
    render() {
        return (
            <div className="Navbar_container">
            <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink to="/"  className="link">Home</NavLink>
            <NavLink to="/projects"  className="link">Projects</NavLink>
            <NavLink to="/tech"  className="link"> Skills</NavLink>
            <NavLink to="/julioferreira.pdf" target="_blank" className="link" >Curriculum</NavLink>
            <NavLink to="/contact"  className="link"> Contact</NavLink>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
            
        )
    }
}

export default navbar;