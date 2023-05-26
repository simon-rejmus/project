import React from "react";
import logo from '../../logo.png';
import { TbSearch } from 'react-icons/tb';

const Navigation = () => {
    return (
        <nav>
            <div className="search-bar">
                <button className="search-icon-btn">
                    <TbSearch className="search-icon"/>
                </button>
                <input type="text" className="search-input"/>
            </div>
            <div className="logo">
                <a href="/" ><img src={logo} className="App-logo" alt="logo" /></a>
            </div>
            <div className="navigation-links">
                <a href="/" className="nav-link active">Home</a>
                <a href="/contact" className="nav-link">Contact</a>
                <a href="/about" className="nav-link">About me</a>
            </div>
        </nav>
    )
}

export default Navigation;