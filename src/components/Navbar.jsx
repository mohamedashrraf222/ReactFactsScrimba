import React from "react";
import '../index.css'
export default function Navbar() {
    return(
        <nav className="myNav">
            <div className="myLogo">
            <img src="/react.svg"  alt="reactImage" className="myImg" />
            <h1 className="reactFacts">ReactFacts</h1>
            </div>
            <h1 className="ReactCourse">React Cours - project 1</h1>
        </nav>
    )
}