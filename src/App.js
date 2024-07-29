import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomeScreen from './navigations/Welcome.screen';
import CreateAccount from './navigations/CreateAccount.screen';
import BeginScreen from './navigations/Begin.screen';
import QuestionnaireScreen from './navigations/Questionaire.screen';
import LoginScreen from './navigations/Login.screen';
import ConfirmationScreen from './navigations/Confirmation.screen';
import DashboardScreen from './navigations/Dashboard.screen';
import ForgotPasswordScreen from './navigations/ForgotPassword.screen';
import EndScreen from './navigations/End.screen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<WelcomeScreen/>} />
          <Route path="/landing" element={<WelcomeScreen/>} />
          <Route path="/create-account" element={<CreateAccount/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/forgot-password" element={<ForgotPasswordScreen/>} />
          <Route path="/confirmation" element={<ConfirmationScreen/>} />
          <Route path="/quest-begin" element={<BeginScreen/>} /> 
          <Route path="/end-screen" element={<EndScreen/>} /> 
          <Route path="/questionnaire" element={<QuestionnaireScreen/>} />
          <Route path="/dashboard" element={<DashboardScreen/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
