import './App.scss';
import React, { Component } from "react"
import Navbar from "./contents/navbar"
import Contact from "./contents/contact"
import Footer from "./contents/Footer";
import About from "./contents/about";
import Portfolio from "./contents/portfolio";
import Techskills from "./contents/techskills";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

// don't forget to put the navbar
 
function App() {
  return (
      <Router>
      <div className="App">
      <Navbar /> 
      <Switch>
        <Route exact path="/"> {/* Não te esqueças de usar o EXACT 
         para conseguires fazer o link entre as outras paginas */}
          <About />
        </Route>
        <Route path="/projects"> 
          <Portfolio />
        </Route>
        <Route path="/tech">
          <Techskills />
        </Route>
        <Route path="/contact"> 
          <Contact />
        </Route>
      </Switch>
      <Footer />
      </div>
    </Router>
    
  )
}

export default App;
