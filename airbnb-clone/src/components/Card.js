import React from "react";
import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={katie} alt="Katie-Zaferes" className="card--image"></img>
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"></img>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
    )
}