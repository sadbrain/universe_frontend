import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './index.css';

const SignUp = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required')
      .min(6, 'Must be at least 6 characters')
      .max(100, 'Must be 100 characters or less'),
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Must be at least 2 characters')
      .max(255, 'Must be 255 characters or less'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Must be at least 6 characters')
      .max(255, 'Must be 255 characters or less')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)(?!.*\s).*$/,
        'Password must contain an uppercase letter, a lowercase letter, a number, and a special character'
      ),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password is required'),
    phone: Yup.string()
      .nullable()
      .min(10, 'Must be at least 10 characters')
      .max(20, 'Must be 20 characters or less'),
    street_address: Yup.string()
      .nullable()
      .min(6, 'Must be at least 6 characters')
      .max(255, 'Must be 255 characters or less'),
    district_address: Yup.string()
      .nullable()
      .min(6, 'Must be at least 6 characters')
      .max(255, 'Must be 255 characters or less'),
    city: Yup.string()
      .nullable()
      .min(6, 'Must be at least 6 characters')
      .max(255, 'Must be 255 characters or less'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirm_password: '',
      phone: '',
      street_address: '',
      district_address: '',
      city: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors, setStatus }) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/register', values);
        setStatus({ success: response.data.success_messages });
        navigate('/signin');
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else {
         //  setStatus({ error: 'An error occurred. Please try again.' });
        }
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
        <form onSubmit={formik.handleSubmit}>
          {formik.status && formik.status.error && <p className="error-message">{formik.status.error}</p>}
          {formik.status && formik.status.success && <p className="success-message">{formik.status.success}</p>}
          <div className="contact-fields">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="input-field"
                name="email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="error-message">{formik.errors.email}</p>
              ) : null}
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Fullname"
                className="input-field"
                name="name"
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="error-message">{formik.errors.name}</p>
              ) : null}
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
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="error-message">{formik.errors.password}</p>
              ) : null}
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-field"
                name="confirm_password"
                {...formik.getFieldProps('confirm_password')}
              />
              {formik.touched.confirm_password && formik.errors.confirm_password ? (
                <p className="error-message">{formik.errors.confirm_password}</p>
              ) : null}
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
                {...formik.getFieldProps('phone')}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <p className="error-message">{formik.errors.phone}</p>
              ) : null}
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Street"
                className="input-field"
                name="street_address"
                {...formik.getFieldProps('street_address')}
              />
              {formik.touched.street_address && formik.errors.street_address ? (
                <p className="error-message">{formik.errors.street_address}</p>
              ) : null}
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
                {...formik.getFieldProps('district_address')}
              />
              {formik.touched.district_address && formik.errors.district_address ? (
                <p className="error-message">{formik.errors.district_address}</p>
              ) : null}
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="City/Province"
                className="input-field"
                name="city"
                {...formik.getFieldProps('city')}
              />
              {formik.touched.city && formik.errors.city ? (
                <p className="error-message">{formik.errors.city}</p>
              ) : null}
              <div className="underline"></div>
            </div>
          </div>
          <button type="submit" className="create-account" disabled={formik.isSubmitting}>
            Create Account
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/signin">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
