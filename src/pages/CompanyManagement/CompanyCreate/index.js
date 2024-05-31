import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function CompanyCreate() {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    street_address: '',
    district_address: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
        localStorage.setItem(
            'token',
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTcxNTM2MTIsImV4cCI6MTcxNzE1NzIxMiwibmJmIjoxNzE3MTUzNjEyLCJqdGkiOiJBeVhQM2xpTWZXejQ0Qlo1Iiwic3ViIjo1MiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.G931P6pSfFalzCqSRImgm54t1uQTsA5Cp4NFs20RnbQ',
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
      </div>
      <div className="button-group">
      <Link to="/admin/company">
        <button className="btn create" onClick={handleCreate}>
          + Create
        </button>
        </Link>
        <Link to="/admin/company">
          <button className="btn back">Back to list</button>
        </Link>
      </div>
    </div>
  );
}

export default CompanyCreate;