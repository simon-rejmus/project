import React, { useContext } from "react";
import PageContext from "../../PageContext";
import logo from '../../logo.png';
import { TbSearch } from 'react-icons/tb';

const Navigation = ({ onPageChange }) => {
    const { currentPage, handlePageChange } = useContext(PageContext);

    const handleButtonClick = (page) => {
        handlePageChange(page);
        onPageChange(page);
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
                    <div className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}>
                        Home
                    </div>
                </button>
                <button onClick={() => handleButtonClick('contact')}>
                    <div className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </div>
                </button>
                <button onClick={() => handleButtonClick('about')}>
                    <div className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}>
                        About
                    </div>
                </button>
            </div>
        </nav>
    )
}

export default Navigation;
