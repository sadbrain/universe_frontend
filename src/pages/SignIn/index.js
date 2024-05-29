import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', formData);
      localStorage.setItem('token', response.data.access_token);
      
      // Assuming your API returns user's role upon successful login
      const userRole = response.data.user.role.name;

      // Redirect based on user's role
      if (userRole === 'Customer' || userRole === 'Company') {
        navigate('/home');
      } else if (userRole === 'Admin') {
        navigate('/admin/dashboard');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="form-container">
      <div className="image-container">
        <img
          src="https://inkythuatso.com/uploads/thumbnails/800/2022/05/1-anh-gai-xinh-2k4-inkythuatso-07-15-20-27.jpg"
          alt="Your Image"
        />
      </div>
      <div className="form-wrapper">
        <div className="form-header">
          <h1>UNIVERSE</h1>
          <h2>Sign In To Universe</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="input-container">
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="underline"></div>
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="underline"></div>
          </div>
          <button type="submit" className="SignIn">
            Sign in
          </button>
        </form>
        <p className="register-link">
          <Link to="/signup">Register Now</Link>
        </p>
        <p className="fgpassword-link">
          <Link to="">Forget Password?</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
