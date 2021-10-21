import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { Navbar, Nav } from "react-bootstrap";

class navbar extends Component {
  render() {
    return (
      <div className="Navbar_container">
        <Link to="/julioferreira.pdf" target="_blank" className="link">
          Curriculum
        </Link>
      </div>
    );
  }
}

export default navbar;
