import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './index.css';

function SignIn() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required')
      .min(6, 'Email must be at least 6 characters')
      .max(100, 'Email must be at most 100 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(255, 'Password must be at most 255 characters')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)(?!.*\s).*$/,
        'Password must contain an uppercase letter, a lowercase letter, a number, a special character, and no spaces'
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', values);
        localStorage.setItem('token', response.data.access_token);

        const userData = {
          role: response.data.user.role.name,
          name: response.data.user.name,
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        const userRole = response.data.user.role.name;
        if (userRole === 'Customer' || userRole === 'Company') {
          navigate('/home');
        } else if (userRole === 'Admin') {
          navigate('/admin/dashboard');
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          setErrors({ apiError: error.response.data.error });
        } else {
          setErrors({ apiError: 'An error occurred. Please try again.' });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          {formik.errors.apiError && <p className="error-message">{formik.errors.apiError}</p>}
          <div className="input-container">
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="underline"></div>
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="underline"></div>
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="SignIn" disabled={formik.isSubmitting}>
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
