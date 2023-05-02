import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';



function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    
    localStorage.setItem('user', JSON.stringify({
      userName,
      email,
      password
    }));


    setUserName('');
    setEmail('');
    setPassword('');

    navigate("/Login");
    
  };

  return (
    <div className="signup">
      

      <main>
        <h2>Not User! Create an account.</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">User Name </label>
          <input type="text" name="name " value={userName} onChange={(e) => setUserName(e.target.value)} required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        
          <button type="submit">Sign Up</button>
        </form>
        <p>If already an user! Go to login..... </p>
       
      </main>

      
    </div>
  );
}

export default Signup;
