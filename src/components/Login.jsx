import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Get user's credentials from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      // If credentials match, redirect to home page
      navigate('/Dashboard');
    } else {
      // If credentials do not match, display error message
      alert('Invalid email or password');
    }

    // Clear input fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login">
      
      <main>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit">Login</button>
        </form>
      </main>

      
    </div>
  );
}

export default Login;
