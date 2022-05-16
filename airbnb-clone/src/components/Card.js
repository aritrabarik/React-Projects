import React from "react"
import "../style.css"
import KatieZ from "../images/katie-zaferes.png"
import Star from "../images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img src={KatieZ} alt="Katie-Zaferes" className="card--image"></img>
            <div className="card--stats">
                <img src={Star} alt="star" className="card--star"></img>
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}