import React from 'react';
import './Dashboard.css';

function Dashboard() {
 
  const currentUser = JSON.parse(localStorage.getItem('user')).userName;
  
  return (
    <div className="dashboard">
      <h2>Welcome, {currentUser}!</h2>
      <p>welocme to our intuitive Tools</p>
    </div>
  );
}

export default Dashboard;
