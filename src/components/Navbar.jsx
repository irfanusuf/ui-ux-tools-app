import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/login">Login </a></li>
          <li><a href="/Signup ">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
