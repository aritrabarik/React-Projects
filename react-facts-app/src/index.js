import React from "react"
import ReactDOM from "react-dom"
import logo from "./react-logo.png"

const page = (
    <div>
        <img src={logo} alt="React-Logo" width={"60px"}></img>
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Meta aka Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))