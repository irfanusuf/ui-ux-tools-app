import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <h1>Welcome to UI/UX designs and Tools App  (In development) </h1>
        <p>Welcome to our extraordinary website, the epitome of a harmonious fusion between user interface (UI) and user experience (UX). Brace yourself for an immersive journey through a captivating digital realm where design meets innovation. </p> 
        <div className="welcome-buttons">
          <Link to="/signup" className="button">Sign Up</Link>
          <Link to="/login" className="button">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
