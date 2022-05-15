import React from "react"
import ReactDOM from "react-dom"
import logo from "./react-logo.png"
import "./style.css"

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="React-Logo" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
                <small>© 2022 iGN1T0R development. All rights reserved.</small>
        </footer>
    )
}


function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))