import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <h1>Welcome to My Front-end Task App!</h1>
        <p>This task was given by nyur tech Hr.for recruitment of front-end react Dev</p> 
        <div className="welcome-buttons">
          <Link to="/signup" className="button">Sign Up</Link>
          <Link to="/login" className="button">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
