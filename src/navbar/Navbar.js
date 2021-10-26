import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar(){
    return (
        <div className="navbar">
            <h2>ReactBlog</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </div>
    )
}
