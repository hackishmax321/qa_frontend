import React from 'react';
import { AiFillFileMarkdown, AiFillCloseCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const ProgressTracker = ({ results }) => {
  const categories = [
    'Information & Data Literacy',
    'Com. & Collaboration',
    'Digital Content Creation',
    'Safety',
    'Problem Solving',
  ];

  const navigate = useNavigate();

  const handleNavigation = (index, level, category) => {
    navigate('/study', { state: { index, level, category } });
  };
  // console.log(results)
  const isMatch = JSON.stringify(results) === JSON.stringify(['I', 'A', 'A', 'A', 'A']);

  return (
    <div className="progress-tracker">
      <h1 className="title">Progress Tracker</h1>
      <table className="progress-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Intermediate</th>
            <th>Advanced</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td className="category-name">{category}</td>
              <td className="indicator-cell">
                <div
                  className={`indicator ${
                    results[index] === 'I' || results[index] === 'A' ? 'green' : 'red'
                  }`}
                  onClick={() => handleNavigation(index + 1, 'intermediate', category)}
                >
                  {results[index] !== 'A' ? <AiFillFileMarkdown /> : <AiFillCloseCircle />}
                </div>
              </td>
              <td className="indicator-cell">
                {category !== 'Information & Data Literacy' && (
                  <div
                    className={`indicator ${
                      results[index] === 'A' ? 'green' : 'red'
                    }`}
                    onClick={() => handleNavigation(index + 1, 'advanced', category)}
                  >
                    {results[index] === 'F' && <AiFillCloseCircle />}
                    {results[index] === 'I' && <AiFillCloseCircle />}
                    {results[index] === 'A' && <AiFillFileMarkdown />}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isMatch && (
        <div className="match-image">
          <br/>
          <h4>You Achieved</h4>
          <img src={`${process.env.PUBLIC_URL}/images/badge.png`} alt="Match Found" width={200}/>
          <p className="signup-link">BADGE</p>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;
