import './App.css';
import React, { Component } from "react"
import Navbar from "./contents/navbar"
import Footer from './contents/Footer';
import About from "./contents/about";
import Portfolio from "./contents/portfolio";
import Techskills from "./contents/techskills";
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//       </div>
//     )
//   }
// }

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Portfolio />
      <Techskills />
      <Footer />
    </div>
  )
}

export default App;
