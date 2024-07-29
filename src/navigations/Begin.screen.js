import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import env from '../configs/env';

const BeginScreen = () => {
  const navigate = useNavigate();
  const [questionnaire, setQuestionaire] = useState(env.QS_MAIN)

  const startQuestionnaire = () => {
    navigate('/questionnaire', { state: { questionnaire } });
  };

  return (
    <div className="container">
      <h1 className="title">Survey</h1>
      <p className="subtitle">Survey includes the following important details.</p>
      <div className="card-container">
        <div className="google-button">
          <div className="number">
            {questionnaire.length}
          </div>
        </div>
        <div className="card-content">
          Haven't Attempted Survey yet!
        </div>
      </div>
      <br />
      <div className="button-container">
        <button onClick={startQuestionnaire} className="button button-long login-button no-underline">
          Start Now
        </button>
      </div>
      <p className="signup-prompt">See <Link to="/dashboard" className="signup-link">Instructions</Link></p>
    </div>
  );
};

export default BeginScreen;
