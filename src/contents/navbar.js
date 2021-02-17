
import React, { Component } from "react"
import "./navbar.css"

class navbar extends Component {
    render() {
        return (
            <div className="div-main">
                <a href="#" className="link">Portfolio</a>
                <a href="#" className="link">About me</a>
                <a href="#" className="link">Contacts</a>
            </div>
        )
    }
}

export default navbar;