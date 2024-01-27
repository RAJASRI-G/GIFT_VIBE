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
      <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} 
      style={{ color: isOpen ? 'black' : 'white' }}></i>
      </div>
      <br/><br/>
      <ul className="side">
        <li>
          <Link to="/profile" > Profile
            <i className="fas fa-user"></i>
          </Link>
        </li>
        <li>
          <Link to="/gift">Gift
            <i className="fas fa-gift"></i> 
          </Link>
        </li>
        <li>
          <Link to="/orders"> Orders
            <i className="fas fa-shopping-bag"></i>
          </Link>
        </li>
        <li>
          <Link to="/payment">Pay
            <i className="fas fa-credit-card"></i> 
          </Link>
        </li>
        <li>
          <Link to="/"> Logout
          <i className="fas fa-sign-out-alt"></i>
          </Link>
        </li>
        <div className={` ${isOpen ? 'remain' : ''}`}>
        <br></br>
        </div>
        </ul>
    </div>
  );
};

export default Sidebar;
