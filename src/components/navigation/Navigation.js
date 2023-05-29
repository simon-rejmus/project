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
                <div className="nav-link active"><a href="/">Home</a></div>
                <div className="nav-link"><a href="/contact">Contact</a></div>
                <div className="nav-link"><a href="/about">About me</a></div>
            </div>
        </nav>
    )
}

export default Navigation;