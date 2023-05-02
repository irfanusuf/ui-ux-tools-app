import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';


function DelStorage() {
  const navigate = useNavigate();
  const delLocalStorage = () => {
    localStorage.clear();
    window.alert ("local storage cleared");
    navigate("/");
  };

  return (
    <button onClick={delLocalStorage}>Clear Local Storage</button>

  );
}

function Dashboard() {
 
  const currentUser = JSON.parse(localStorage.getItem('user')).userName;

  const allUsers = Object.keys(localStorage).filter(key => key !== 'user').map(key => JSON.parse(localStorage.getItem(key)).userName);

  return (
    <div className="dashboard">
      <h2>Welcome, {currentUser}!</h2>
      <p>Here is a list of all users who have logged in:</p>
      <ul>
        {allUsers.map(user => <li key={user}>{user}</li>)}
      </ul>
      <DelStorage />
    </div>
  );
}

export default Dashboard;
