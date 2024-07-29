import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div className="container" style={{ backgroundImage: `${process.env.PUBLIC_URL}/imges/Background.png`, backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center' }}>
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/images/start.png`} alt="Welcome" className="welcome-image" />
      </div>
      <h1 className="title">SIMOnS Mobile</h1>
      <p className="subtitle">
        A Self-reflection Tool for the European Digital Competence Framework for Citizens
      </p>
      <div className="button-container">
        <Link to={'/login'} className="login-button no-link">Login</Link>
        <Link to={'/create-account'} className="register-button no-link">Register</Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;
