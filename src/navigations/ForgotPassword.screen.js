import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';
import env from '../configs/env';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const submitAction = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      Notiflix.Notify.failure('Invalid email address');
      return;
    }

    try {
      const response = await fetch(env.SERVER_URL + '/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Notiflix.Notify.success('Password reset link sent');
      } else {
        const error = await response.json();
        Notiflix.Notify.failure(error.message || 'Failed to send reset link');
      }
    } catch (error) {
      console.error(error);
      Notiflix.Notify.failure('Server error');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Forgot Password</h1>
      <p className="subtitle">Enter your email to reset your password</p>
      <form className="form" onSubmit={submitAction}>
        <input
          type="email"
          placeholder="EMAIL"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="submit-button">Send Reset Link</button>
      </form>
      <p className="signup-prompt">
        Remember your password? <Link to="/login" className="signup-link">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPasswordScreen;
