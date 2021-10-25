import "./App.css";
import React, { Component } from "react";
import Navbar from "./contents/navbar";
import Footer from "./contents/Footer";
import About from "./contents/about";
import Portfolio from "./contents/portfolio";
import Techskills from "./contents/techskills";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// don't forget to put the navbar

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <About />
      <Portfolio />
      <Techskills />
      <Footer />
    </div>
  );
}

export default App;
