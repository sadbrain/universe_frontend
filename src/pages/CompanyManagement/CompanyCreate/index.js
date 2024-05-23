import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function CompanyCreate() {
    return (
        <div className="container">
            <h1 className="title">Create Company</h1>
            <div className="form-group">
                <label className="label" htmlFor="companyName">Company name:</label>
                <input type="text" id="companyName" className="input" />
            </div>
            <div className="button-group">
                <Link to="/companyList">
                    <button className="btn create">+ Create</button>
                </Link>
                <Link to="/companyList">
                    <button className="btn back">Back to list</button>
                </Link>
            </div>
        </div>
    );
}

export default CompanyCreate;
