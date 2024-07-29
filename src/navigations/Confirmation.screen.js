import React from 'react';
import { FaNetworkWired } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ConfirmationScreen = () => {
  // const navigate = useNavigate();

  

  return (
    <div className="container">
      
      <h1 className="title">Confirmation</h1>
      <p className="subtitle">
        Thank you for Joining. Take following actions.
      </p>
      <div className="card-container">
        <div className='google-button'>
          <FaNetworkWired className="icon" />
        </div>
        <div className='card-content'>
          Haven't Attempted Survey yet!
        </div>
      </div>
      <br></br>
      <div className="checkbox-container">
          <input type="checkbox" id="agreement" className="checkbox-input" />
          <label htmlFor="agreement" className="checkbox-label">I Confirm following xxx</label>
      </div>
      <div className="checkbox-container">
          <input type="checkbox" id="agreement" className="checkbox-input" />
          <label htmlFor="agreement" className="checkbox-label">I accept following xxx</label>
      </div>
      <div className="button-container">
        <Link to="/quest-begin" className="button button-long login-button no-underline">Attempt Survey</Link>
      </div>
      <p className="signup-prompt">To <Link to="/dashboard" className="signup-link">Dashboard</Link></p>
    </div>
  );
};

export default ConfirmationScreen;
