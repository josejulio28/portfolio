import React from "react"
import "../styles/techskills.css"

function techskills() {
    return (
        <div class="container">
        <h2>Technicall Skills </h2>
        <div className="skills">
        <div>
        <h2>Frontend</h2>
        <div className="card-skills" col-12 col-sm-6 col-md-3 techskills>
            <h3>React</h3>
            <h3>JavaScript</h3>
            <h3>CSS</h3>
            <h3>HTML</h3>
            <h3>Figma</h3>
            <h3>SQL</h3>
            <h3>Bootstrap</h3>
          </div>
        </div>
        <div>
          <h2>Backend</h2>
          <div className="col-12 col-sm-6 col-md-4 card-skills">
            <h3>Ruby</h3>
            <h3>Ruby on Rails</h3>
            <h3>SQL</h3>
          </div>
        </div>
        <div>
                    <h2>Others</h2>
        <div className="card-skills">            
            <h3>Git</h3>
        </div>
        </div>

        </div>
        
        </div>
    )
}

export default techskills
