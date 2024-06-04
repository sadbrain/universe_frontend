import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

function CompanyCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    street_address: '',
    district_address: '',
    city: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleCreate = async () => {
    try {
      // Validate form data
      const validationErrors = {};
      if (formData.name.length < 6 || formData.name.length > 255) {
        validationErrors.name = 'Company name must be between 6 and 255 characters';
      }
      if (formData.phone_number.length < 10 || formData.phone_number.length > 20) {
        validationErrors.phone_number = 'Phone number must be between 10 and 20 characters';
      }
      if (formData.street_address.length < 6 || formData.street_address.length > 255) {
        validationErrors.street_address = 'Street address must be between 6 and 255 characters';
      }
      if (formData.district_address.length < 6 || formData.district_address.length > 255) {
        validationErrors.district_address = 'District address must be from 6 to 255 characters';
      }
      if (formData.city.length < 6 || formData.city.length > 255) {
        validationErrors.city = 'The city name must be between 6 and 255 characters';
      }

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      localStorage.setItem(
        'token',
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTc1MTc0OTIsImV4cCI6MTcxNzUyMTA5MiwibmJmIjoxNzE3NTE3NDkyLCJqdGkiOiJBd0FGSW1QdmJhWDhrcmlOIiwic3ViIjo2MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.6Od1G5WKGNDItWSkCWuKp5Qn9Z0kRml7XOpdHlMvPOQ'
      );
      const token = localStorage.getItem('token');
      const url = 'http://127.0.0.1:8000/api/v1/companies';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(url, options);
      if (response.ok) {
        console.log('Company created successfully');
        setFormData({
          name: '',
          phone_number: '',
          street_address: '',
          district_address: '',
          city: '',
        });
        navigate('/admin/company');
      } else {
        console.error('Error creating company');
      }
    } catch (error) {
      console.error('Error creating company:', error.message);
    }
  };

  return (
    <div className="container-cn">
      <h1 className="title">Create Company</h1>
      <div className="form-group">
        <label className="label" htmlFor="name">
          Company name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input-cp"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
      <div className="form-group">
        <label className="label" htmlFor="phone_number">
          Phone number:
        </label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          className="input-cp"
          value={formData.phone_number}
          onChange={handleChange}
        />
        {errors.phone_number && <div className="error">{errors.phone_number}</div>}
      </div>
      <div className="form-group">
        <label className="label" htmlFor="street_address">
          Street address:
        </label>
        <input
          type="text"
          id="street_address"
          name="street_address"
          className="input-cp"
          value={formData.street_address}
          onChange={handleChange}
        />
        {errors.street_address && <div className="error">{errors.street_address}</div>}
      </div>
      <div className="form-group">
        <label className="label" htmlFor="district_address">
          District address:
        </label>
        <input
          type="text"
          id="district_address"
          name="district_address"
          className="input-cp"
          value={formData.district_address}
          onChange={handleChange}
        />
        {errors.district_address && <div className="error">{errors.district_address}</div>}
      </div>
      <div className="form-group">
        <label className="label" htmlFor="city">
          City:
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="input-cp"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <div className="error">{errors.city}</div>}
      </div>
      <div className="button-group">
        <button className="btn create" onClick={handleCreate}>
          + Create
        </button>
        <Link to="/admin/company">
          <button className="btn back">Back to list</button>
        </Link>
      </div>
    </div>
  );
}

export default CompanyCreate;