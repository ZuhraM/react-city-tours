import React from 'react';
import "./Navbar.scss";
import logo from "../../logo.png"

export default function Navbar() {
    return <nav className="navbar">
        <img src={logo} alt="city tours logo" />
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link active">home</a>

            </li>
            <li>
                <a href="/about" className="nav-link">about</a>

            </li>
            <li>
                <a href="/tours" className="nav-link">
                    tours
                </a>
            </li>
        </ul>
    </nav>;
}