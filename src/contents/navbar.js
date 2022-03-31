import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { Navbar, Nav } from "react-bootstrap";

class navbar extends Component {
  render() {
    return (
      <div className="Navbar_container">
        <a href="/julioferreira.pdf" target="_blank" className="link">
          About
        </a>
        <a href="/julioferreira.pdf" target="_blank" className="link">
          Portfolio
        </a>
        <a href="/julioferreira.pdf" target="_blank" className="link">
          Skills
        </a>
        <a href="/julioferreira.pdf" target="_blank" className="link">
          Contact
        </a>
        <a href="/julioferreira.pdf" target="_blank" className="link">
          Curriculum
        </a>
      </div>
    );
  }
}

export default navbar;
