import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import env from '../configs/env';

const EndScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers = [], questionnaire = [] } = location.state || {};

  const completedCount = answers.filter(answer => answer !== null).length;

  const startQuestionnaire = () => {
    navigate('/questionnaire', { state: { questionnaire } });
  };

  return (
    <div className="container">
      <h1 className="title">Survey Completion</h1>
      <p className="subtitle">Survey includes the following important details.</p>
      <div className="card-container">
        <div className="google-button">
          <div className="number">
            {completedCount}
          </div>
        </div>
        <div className="card-content">
          You have completed {completedCount} out of {questionnaire.length} questions!
        </div>
      </div>
      <br />
      <div className="button-container">
        <button onClick={startQuestionnaire} className="button button-long login-button no-underline">
          Continue Survey
        </button>
      </div>
      <p className="signup-prompt">See <Link to="/dashboard" className="signup-link">Instructions</Link></p>
    </div>
  );
};

export default EndScreen;
