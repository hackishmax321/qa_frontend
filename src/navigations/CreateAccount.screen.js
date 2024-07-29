import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import axios from 'axios';
import env from '../configs/env';


const CreateAccount = () => {
  const [email, setEmail] = useState(localStorage.getItem('username')||'');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [universityId, setUniversityId] = useState('');
  const [input01, setInput01] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [agreement, setAgreement] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const submitAction = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      Notiflix.Notify.failure('Invalid email address');
      return;
    }

    if (!firstName || !email || !password) {
      Notiflix.Notify.failure('Email, First Name, and Password fields cannot be empty');
      return;
    }

    if (password !== retypePassword) {
      Notiflix.Notify.failure('Passwords do not match');
      return;
    }

    if (!validatePassword(password)) {
      Notiflix.Notify.failure('Password must be at least 6 characters');
      return;
    }

    if (!agreement) {
      Notiflix.Notify.failure('You must accept the agreement');
      return;
    }

    // If all validations pass
    axios.post(env.SERVER_URL+'/auth/register', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      universityId: universityId,
      placeholder: input01
    })
    .then(response => {
      console.log(response.satus)
      localStorage.setItem('username', email)
      Notiflix.Notify.success('Account created successfully!');
      navigate('/confirmation');
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
  };

  return (
    <div className="container">
      <h1 className="title">Create Account</h1>
      <p className="subtitle">Join with Us</p>
      <form className="form" onSubmit={submitAction}>
        <input
          type="email"
          placeholder="EMAIL"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="name-container">
          <input
            type="text"
            placeholder="FIRST NAME"
            className="input-field half-width"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="LAST NAME"
            className="input-field half-width"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="UNIVERSITY ID"
          className="input-field"
          value={universityId}
          onChange={(e) => setUniversityId(e.target.value)}
        />
        <input
          type="text"
          placeholder="INPUT 01"
          className="input-field"
          value={input01}
          onChange={(e) => setInput01(e.target.value)}
        />
        <div className="password-container">
          <input
            type="password"
            placeholder="PASSWORD"
            className="input-field half-width"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="RETYPE"
            className="input-field half-width"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="agreement"
            className="checkbox-input"
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
          />
          <label htmlFor="agreement" className="checkbox-label">I accept the agreement</label>
        </div>
        <button type="submit" className="submit-button">Sign up</button>
      </form>
      <p className="login-prompt">Already have an account. <Link to={'/login'} className="signup-link">Access Here.</Link></p>
    </div>
  );
};

export default CreateAccount;
