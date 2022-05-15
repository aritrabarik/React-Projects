import React from "react"
import ReactDOM from "react-dom"
import logo from "./react-logo.png"

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src={logo} alt="React-Logo" width="40px"/>
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
            <footer>
                <small>© 2022 iGN1T0R development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))