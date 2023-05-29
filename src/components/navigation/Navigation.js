import React, { useState } from "react";
import logo from '../../logo.png';
import { TbSearch } from 'react-icons/tb';

const Navigation = ({ onPageChange }) => {
    const [active, setActive] = useState('home');

    const handleButtonClick = (page) => {
        setActive(page);
        onPageChange(page)
    }

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
                <button onClick={() => handleButtonClick('home')}>
                    <div className={active === 'home' ? 'nav-link active' : 'nav-link'}>
                        Home
                    </div>
                </button>
                <button onClick={() => handleButtonClick('contact')}>
                    <div className={active === 'contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </div>
                </button>
                <button onClick={() => handleButtonClick('about')}>
                    <div className={active === 'about' ? 'nav-link active' : 'nav-link'}>
                        About
                    </div>
                </button>
            </div>
        </nav>
    )
}

export default Navigation;