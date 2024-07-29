import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const DashboardScreen = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  const user = {
    name: localStorage.getItem("username"),
    status: 'Active',
    surveys: [
      { title: 'Survey 1', marks: 80 },
      { title: 'Survey 2', marks: 75 },
      { title: 'Survey 3', marks: 90 },
    ],
  };

  return (
    <div className="container">
      <nav className="top-nav">
        <div className="logo">
          <h2>SimOns</h2>
        </div>
        <div className="logout">
          <button onClick={handleLogout} className="logout-button">
            <FaSignOutAlt className="icon" />
            Log Out
          </button>
        </div>
      </nav>
      <div className="content">
        <h1 className="title">Dashboard</h1>
        <p className="subtitle">Welcome, {user.name}</p>
        <div className="status-container">
          <h2>Status: {user.status}</h2>
        </div>
        <div className="details-container">
          <h3>Previous Surveys</h3>
          <ul className="survey-list">
            {user.surveys.map((survey, index) => (
              <li key={index} className="survey-item">
                <span>{survey.title}</span>
                <span>{survey.marks} Marks</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="signup-prompt">
          Attempt Survey Again <Link to="/quest-begin" className="signup-link">Here</Link>
        </p>
      </div>
    </div>
  );
};

export default DashboardScreen;
