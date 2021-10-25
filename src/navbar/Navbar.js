import React from "react";
import "./navbar.css";

export default function Navbar(){
    return (
        <div className="navbar">
            <h2>ReactBlog</h2>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
        </div>
    )
}
