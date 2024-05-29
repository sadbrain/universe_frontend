import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './index.css';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirm_password: '',
    phone: '',
    street_address: '',
    district_address: '',
    city: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (formData.password !== formData.confirm_password) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/register', formData);
      setSuccessMessage(response.data.success_messages);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error_messages) {
        setErrorMessage(error.response.data.error_messages);
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
          <h2>Register To Universe</h2>
        </div>
        <div className="signup-options">
          <button className="google-signup">
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google Logo"
            />
            Sign up with Google
          </button>
          <button className="facebook-signup">
            <img
              src="https://i0.wp.com/ladolcevitasarasota.com/wp-content/uploads/2023/03/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png?fit=1000%2C1000&ssl=1&w=640"
              alt="Facebook Logo"
            />
            Sign up with Facebook
          </button>
        </div>
        <p className="or">— OR —</p>
        <form onSubmit={handleSubmit}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <div className="contact-fields">
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
                type="text"
                placeholder="Fullname"
                className="input-field"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <div className="underline"></div>
            </div>
          </div>
          <div className="password-fields">
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
            <div className="input-container">
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-field"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
              />
              <div className="underline"></div>
            </div>
          </div>
          <div className="address-fields">
            <div className="input-container">
              <input
                type="tel"
                placeholder="Phone Number"
                className="input-field"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Street"
                className="input-field"
                name="street_address"
                value={formData.street_address}
                onChange={handleChange}
              />
              <div className="underline"></div>
            </div>
          </div>
          <div className="address-fields">
            <div className="input-container">
              <input
                type="text"
                placeholder="District"
                className="input-field"
                name="district_address"
                value={formData.district_address}
                onChange={handleChange}
              />
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="City/Province"
                className="input-field"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              <div className="underline"></div>
            </div>
          </div>
          <button type="submit" className="create-account">
            Create Account
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
