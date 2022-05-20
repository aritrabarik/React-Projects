import React from "react";
import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img src={katie} alt="Katie-Zaferes" className="card--image"></img>
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"></img>
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
            </div>
    )
}