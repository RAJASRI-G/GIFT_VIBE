import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/css/Sidebar.css'; // You can define your styles in Sidebar.css

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-btn" onClick={handleToggle}>
       ADMIN
      </div>
      <br/><br/>
      <ul className="side">
        <li>
          <Link to="/my-account" >
            <i className="fas fa-user"></i> My Account
          </Link>
        </li>
        <li>
          <Link to="/gift">
            <i className="fas fa-gift"></i> Gift
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <i className="fas fa-shopping-bag"></i> Orders
          </Link>
        </li>
        <li>
          <Link to="/payment">
            <i className="fas fa-credit-card"></i> Payment
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fas fa-credit-card"></i> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
