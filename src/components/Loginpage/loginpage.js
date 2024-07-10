import React, { useState } from 'react';
import './style.css';
import Link from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='nam batana jara'/>
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='dusro se chipakee dalna bhai'/>
        <br />
        <button type="submit" >Login</button>
        <p>
          Don't have an account? <a href="https://github.com/Sandeshnits27" title="gussa mat hona pls 😂" target='blank'>Aja Madat Kartahun</a>
        </p>
      </form>
    </div>
  );
}

export default Login;