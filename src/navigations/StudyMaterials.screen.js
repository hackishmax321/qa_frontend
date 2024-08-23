import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const StudyMaterialsScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { index, level, category } = location.state || {};

  const handleReattempt = () => {
    navigate('/sub-quest', { state: { index, level, category } });
  };

  

  return (
    <div className="container">
        <span className='simple-heading'>{category}</span>
      <h1 className="title">Competence {level}</h1>
      {/* <h2 className="competence-category">{category}</h2>
      <h3 className="competence-level">[{level}]</h3> */}

      <div className="study-content">
        <p>Here is some dummy text for study content.</p>
        <p>This content is specific to the {category} competency at the {level} level.</p>
        <p>Review the material and click the button below to re-attempt the quiz.</p>
      </div>
        <br/>
      <button onClick={handleReattempt} className="reattempt-button">
        Re-attempt Quiz
      </button>

      <p className="signup-prompt">
        <Link to={'/dashboard'} className="signup-link">
          Go to Dashboard
        </Link>
      </p>
    </div>
  );
};

export default StudyMaterialsScreen;
