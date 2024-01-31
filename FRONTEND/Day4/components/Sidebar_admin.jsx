import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/css/SidebarAd.css'; // You can define your styles in Sidebar.css

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar1 ${isOpen ? 'open' : ''}`}>
      <div className="toggle-btn1" onClick={handleToggle}>
      <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} 
      style={{ color: isOpen ? 'black' : 'black' }}></i>
      </div>
      <br/><br/>
      <ul className="side1">
        <li>
          <Link to="/profileAd" > Profile
            <i className="fas fa-user"></i>
          </Link>
        </li>
        <li>
          <Link to="/display">Add Gift
            <i className="fas fa-gift"></i> 
          </Link>
        </li>
        <li>
          <Link to="/theme"> Themes
            <i className="fas fa-shopping-bag"></i>
          </Link>
        </li>
        <li>
          <Link to="/order">Order Details
            <i className="fas fa-shopping-bag"></i>
          </Link>
        </li>
        <li>
          <Link to="/payment">Payment History
            <i className="fas fa-credit-card"></i> 
          </Link>
        </li>
        <li>
          <Link to="/"> Logout
          <i className="fas fa-sign-out-alt"></i>
          </Link>
        </li>
        <div className={` ${isOpen ? 'remain1' : ''}`}>
        <br></br>
        </div>
        </ul>
    </div>
  );
};

export default Sidebar;
