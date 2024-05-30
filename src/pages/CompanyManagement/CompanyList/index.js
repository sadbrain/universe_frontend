import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import './index.css';

function CompanyList() {
   return (
      <div className="container-cn">
         <h1 className="title">Company List</h1>
         <div className="button-container">
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
               <tr>
                  <td>HanoiCompany</td>
                  <td>duyen@gmail.com</td>
                  <td>0123456</td>
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
                        <Link to="/admin/company/update">
                           <button className="edit-btn">
                              <FaEdit /> Edit
                           </button>
                        </Link>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>HCMCompany</td>
                  <td>duyen@gmail.com</td>
                  <td>0123456</td>
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
                        <Link to="/admin/company/update">
                           <button className="edit-btn">
                              <FaEdit /> Edit
                           </button>
                        </Link>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>DanagCompany</td>
                  <td>duyen@gmail.com</td>
                  <td>0123456</td>
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
                        <Link to="/admin/company/update">
                           <button className="edit-btn">
                              <FaEdit /> Edit
                           </button>
                        </Link>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default CompanyList;