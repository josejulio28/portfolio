import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { Navbar, Nav } from "react-bootstrap";

class navbar extends Component {
  render() {
    return (
      <div className="Navbar_container">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/projects" className="link">
          Projects
        </Link>
        <Link to="/tech" className="link">
          Skills
        </Link>
        <Link to="/julioferreira.pdf" target="_blank" className="link">
          Curriculum
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
    );
  }
}

export default navbar;
