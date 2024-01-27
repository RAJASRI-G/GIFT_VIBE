import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Navbar.css";
import Pro from "../assets/images/logo.webp"
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="profile-image1">
    <img src={Pro} alt="Profile" />
    </div>
      <ul className="nav-list">
        <li className="nav-item">
        </li>
        <li className="nav-item"><Link to="/gift" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
        <li className="nav-item"><Link to="/signin" className="nav-link">Login</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
