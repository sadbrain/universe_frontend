import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import './index.css';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      localStorage.setItem(
        'token',
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTc1MTc0OTIsImV4cCI6MTcxNzUyMTA5MiwibmJmIjoxNzE3NTE3NDkyLCJqdGkiOiJBd0FGSW1QdmJhWDhrcmlOIiwic3ViIjo2MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.6Od1G5WKGNDItWSkCWuKp5Qn9Z0kRml7XOpdHlMvPOQ',
     );
      const token = localStorage.getItem('token');
      const url = 'http://127.0.0.1:8000/api/v1/companies';
      const options = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseObj = await response.json();
        setCompanies(responseObj.data);
      } catch (error) {
        console.error('Error fetching companies:', error.message);
      }
    };

    fetchCompanies();
  }, []);

  const handleDelete = async (id) => {
    try {
      localStorage.setItem(
        'token',
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTc1MTc0OTIsImV4cCI6MTcxNzUyMTA5MiwibmJmIjoxNzE3NTE3NDkyLCJqdGkiOiJBd0FGSW1QdmJhWDhrcmlOIiwic3ViIjo2MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.6Od1G5WKGNDItWSkCWuKp5Qn9Z0kRml7XOpdHlMvPOQ',
     );
  const token = localStorage.getItem('token');
  const url = `http://127.0.0.1:8000/api/v1/companies/${id}`;
      const options = {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);
      if (response.ok) {
        setCompanies(companies.filter(company => company.id !== id));
      } else {
        console.error('Error deleting company');
      }
    } catch (error) {
      console.error('Error deleting company:', error.message);
    }
  };

  return (
    <div className="container-cn">
      <h1 className="title">Company List</h1>
      <div className="button-contai">
        <Link to="/admin/company/create">
          <button className="create-btn">Create +</button>
        </Link>
      </div>
      <table className="company-list">
        <thead>
          <tr>
            <th>Company name</th>
            <th>Address</th>
            <th>Phone number</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="lists">
          {companies.map(company => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{`${company.street_address}, ${company.district_address}, ${company.city}`}</td>
              <td>{company.phone_number}</td>
              <td className="button-cell">
                <div className="button-wrapper">
                <Link
                  className="maincontent-size text-white text-decoration-none"
                  onClick={() => {
                  const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                    confirmButton: 'btn btn-success ',
                    cancelButton: 'btn btn-danger m-2',
                    },
                    buttonsStyling: false,
                  });

                  swalWithBootstrapButtons
                  .fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true,
                  })
                  .then((result) => {
                    if (result.isConfirmed) {
                    handleDelete(company.id);
                    swalWithBootstrapButtons.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                    });
                    } else if (
                  /* Read more about handling dismissals below */
                      result.dismiss === Swal.DismissReason.cancel
                      ) {
                    swalWithBootstrapButtons.fire({
                    title: 'Cancelled',
                    text: 'Your imaginary file is safe :)',
                    icon: 'error',
                  });
                }
              });
              }}
              >
                <button className="delete-btn">
                <FaTrashAlt /> Delete
                </button>
                  </Link>
                  <Link to={`/admin/company/update/${company.id}`} className="no-underline">
                    <button className="edit-btn">
                      <FaEdit /> Edit
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyList;