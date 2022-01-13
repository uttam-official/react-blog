import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar(){
    return (
        <div className="navbar">
            <h2><NavLink to="/">ReactBlog</NavLink></h2>
            <ul>
                <li><NavLink exact activeClassName="active_nav" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active_nav" to="/contact">Contact</NavLink></li>
                <li><NavLink exact activeClassName="active_nav" to="/about">About Us</NavLink></li>
                <li><NavLink to="/login">Admin Login</NavLink></li>
            </ul>
        </div>
    )
}
