import React from 'react';
import './index.css';

function CompanyListPage () {
   return (
      <div>
      <h1>Company List</h1>
      <button className="create-btn">Create +</button>
      <table>
        <thead>
          <tr>
            <th>Company name</th>
            <th>Address</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HanoiCompany</td>
            <td>duyen@gmail.com</td>
            <td>0123456</td>
            <td>
              <button className="delete-btn">Delete</button>
              <button className="edit-btn">Edit</button>
            </td>
          </tr>
          <tr>
            <td>HCMCompany</td>
            <td>duyen@gmail.com</td>
            <td>0123456</td>
            <td>
              <button className="delete-btn">Delete</button>
              <button className="edit-btn">Edit</button>
            </td>
          </tr>
          <tr>
            <td>DanagCompany</td>
            <td>duyen@gmail.com</td>
            <td>0123456</td>
            <td>
              <button className="delete-btn">Delete</button>
              <button className="edit-btn">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
   );
}

export default CompanyListPage;