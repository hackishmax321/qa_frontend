import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import env from '../configs/env';
import axios from 'axios';

const SubEndScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers = [], questionnaire = [], category, level } = location.state || {};
  const [grades, setGrades ] = useState(['F', 'F', 'F', 'F', 'F']);
  const [gradesType, setGradesType ] = useState([
    'Information & Data Literacy',
    'Com. & Collaboration',
    'Digital Content Creation',
    'Safety',
    'Problem Solving'
  ]);
  const completedCount = answers.filter(answer => answer !== null).length;

  const startQuestionnaire = () => {
    localStorage.removeItem('sub_answers');
    navigate('/dashboard');
  };

  const retrievePrevious = async (qs, answers) => {
    try {
        const response = await fetch(`${env.SERVER_URL}/auth/student/${localStorage.getItem('username')}/tests`);
        const data = await response.json();

        if (data) {
          const originalResults = data.firstTest?.grades || [];
          const progressResults = data.lastTest?.grades || originalResults;

          console.log("DATA",progressResults);

          calculateMarks(qs, answers, progressResults);
        }
      } catch (error) {
        console.error('Error fetching test data:', error);
      }
  }

  const calculateMarks = async (qs, answers, prev) => {
    console.log(qs);
    console.log(answers);
    // if (qs.length !== answers.length) {
    //   console.error("Questionnaire and answers must have the same length!");
    //   return;
    // }
  
    let pointsArray = [0, 0, 0, 0, 0];
    let marks = 4*qs.length;
    let updatedGrades = prev || ['F', 'F', 'F', 'F', 'F'];
    console.log('CURRENT', category)
    let current = gradesType.indexOf(category)
    let pointValue = 0;
    console.log('CURRENT', current)
    if(current||current==0) {
      pointValue = pointsArray[current];
    } if(current==-1) {
      current = 1;
      pointValue = pointsArray[current];
    } else {
      current = 1;
      pointValue = pointsArray[current];
    }
    console.log('CURRENT', current)
  
    for (let i = 0; i < answers.length; i++) {
      // Add 1 to each non-null answer, or replace null with 0
      let answerValue = answers[i] !== null ? answers[i] + 1 : 0;
      
      pointValue = pointValue + answerValue;
    }

    pointsArray[current] = pointValue;
    // Calculate the grade for each category
    console.log(marks)
    let score = pointsArray[current] / marks;
    console.log(level)
    console.log("Score",score)

    if(level==="intermediate"){
      console.log("F1")
      if (score > 0.8) {
        console.log("F2", updatedGrades[current])
        updatedGrades[current] = 'I';  
        if(current==0) updatedGrades[current] = 'I';
      } else if (score > 0.47) {
        updatedGrades[current] = 'I';  
      }
    } else if(level==="advanced"){
      if (score > 0.8) {
        updatedGrades[current] = 'A';  
        if(current==0) updatedGrades[current] = 'I';
      } else if (score > 0.47) {
        updatedGrades[current] = 'I';  
      }
    }
    console.log("F2", updatedGrades[current])
    console.log("F2", current)
      
  
    // Update the grades state
    setGrades(updatedGrades);
  
    console.log("Points Array:", pointsArray);
    console.log("Updated Grades:", updatedGrades);



    // Update DB
    await axios.post(`${env.SERVER_URL}/auth/student/${localStorage.getItem('username')}/tests`, { 
      date: new Date().toISOString().split('T')[0],
      questions: qs,
      answers,
      grades: updatedGrades,
      points: pointsArray
    });
  
    return updatedGrades; 
  };

  useEffect(() => {
    retrievePrevious(questionnaire, answers);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Survey Completion</h1>
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
      <br/>
      <div className="results-container">
          <h3>Results</h3>
          <div className="result-row">
            {grades.map((result, index) => (
              <div key={index} className="result-box">
                <span className="result-letter">{result}</span>
              </div>
            ))}
          </div>
          <div className="caption-row">
            {gradesType.map((category, index) => (
              <div key={index} className="category-caption">
                <span>{category}</span>
              </div>
            ))}
          </div>
      </div>
      <div className="button-container">
        <button onClick={startQuestionnaire} className="button button-long login-button no-underline">
          Proceed to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SubEndScreen;
