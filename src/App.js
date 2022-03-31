import "./App.css";
import React from "react";
import Navbar from "./contents/navbar";
import Footer from "./contents/Footer";
import About from "./contents/about";
import Portfolio from "./contents/portfolio";
import Contact from "./contents/contact";
import Techskills from "./contents/techskills";
import "bootstrap/dist/css/bootstrap.min.css";

// don't forget to put the navbar

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <About />
      <Portfolio />
      <Techskills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
