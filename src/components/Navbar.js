import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../App.css"; // Make sure this contains updated styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-title">ARK Investments</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Properties">Properties</Link></li>
                <li><Link to="/BookTour">Book Tour</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/SignUp">Sign Up</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
            </ul>
            <div className="navbar-social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
