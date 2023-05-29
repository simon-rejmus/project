import React from "react";
import ig_logo from '../../ig_logo.png';

const Footer = () => {
    return (
        <footer>
            <a href="https://www.instagram.com/sevan.reeve/" target="_blank" className="ig-link" rel="noreferrer"><img src={ig_logo} className="ig-logo" alt="Instagram logo"/>sevan.reeve</a>
        </footer>
    )
}

export default Footer;