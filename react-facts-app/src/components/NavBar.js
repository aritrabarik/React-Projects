import React from "react"
import ReactIconSmall from "../images/react-icon-small.png"

export default function NavBar() {
    return (
        <div>
            <nav>
                <img src={ReactIconSmall} alt="React-Logo"></img>
                <h3>ReactFacts</h3>
                <h4>React Course - Project1</h4>
            </nav>
        </div>
    )
}