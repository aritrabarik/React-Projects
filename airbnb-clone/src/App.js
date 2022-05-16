import React from "react";
import Card from "./components/Card";
//import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./style.css"

export default function App() {
    return (
        <div>
            <Navbar />
            <Card
                img = "katie-zaferes.png"
                rating = "5.0"
                reviewCount = {6}
                country = "USA"
                title = "Life Lessons with Katie Zaferes"
                price = {136}
            />
        </div>
    )
}