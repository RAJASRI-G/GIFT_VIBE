import React, { useState } from 'react';
import '../assets/css/Signin.css'; // Import the CSS file for styling
import {Link} from "react-router-dom";
const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <h2 classname="head">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="usernameOrEmail">Username / Email</label>
        <input
          type="text"
          id="usernameOrEmail"
          value={usernameOrEmail}
          placeholder="Name..."
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          required
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <p >
        <Link className="login-lin" to ="/gift">Login</Link>
        </p>
        <p className="login-link">
      Don't have an account? <Link to="/signup">Register</Link>
    </p>
      </form>
    </div>
  );
};

export default Login;
