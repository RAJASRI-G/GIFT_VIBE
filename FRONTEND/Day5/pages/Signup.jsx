import React, { useState } from 'react';
import '../assets/css/Signup.css';
import {Link} from "react-router-dom"; // Import the CSS file for styling
const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <div className="full">
    <form className="register-form" onSubmit={handleSubmit}>
    <h2 className="head">REGISTER</h2>
      <label  id="lab" htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Name..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
        <br />
        
        <label htmlFor="email">Email</label>
        <input
        type="email"
        id="email"
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <label htmlFor="role">Role</label>
      <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="">Select a role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br />
      <br />
      <Link to="/signin" className="regi" type="submit">Register</Link><br></br>
      <p className="login-link">
      Already registered? <Link to="/signin">Login</Link>
    </p>
      </form>
      </div>
  );
}

export default RegisterForm;
