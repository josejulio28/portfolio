import './App.css';
import React, { Component } from "react"
import Navbar from "./contents/navbar"
import Footer from './contents/Footer';
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
        <Route exact path="/"> {/* Não te esqueças de usar o EXACT para conseguires fazer o link entre as outras paginas */}
          <About />
        </Route>
        <Route path="/about">
          <Portfolio />
        </Route>
        
        <Techskills />
        <Footer />
      </Switch>
      
    </div>
    </Router>
    
  )
}

export default App;
