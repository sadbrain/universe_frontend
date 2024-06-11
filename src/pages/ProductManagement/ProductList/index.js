import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { BASE_URL, vAPI } from '~/enums/core';

import './index.css';
function ProductList() {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      logProducts();
   }, []);
   async function logProducts() {
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `products`;
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      };

      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         setProducts(responseObj.data);
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   }

   async function removeProduct(id) {
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `products/${id}`;
      const options = {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }
         // const responseObj = await response.json();
         setProducts((prev) => {
            let newArray = [...prev];
            newArray = newArray.filter((p) => p.id !== id);
            return newArray;
         });
         Swal.fire('Deleted!', 'Product deleted successfully', 'success');
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   }

   const handleRemoveProduct = (e, id) => {
      e.preventDefault();
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Yes, delete it!',
         cancelButtonText: 'No, cancel!',
      }).then((result) => {
         if (result.isConfirmed) {
            removeProduct(id);
         } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'Your product is safe :)', 'error');
         }
      });
   };

   return (
      <div className="">
         <div className=" my-5">
            <div className="col-12 text-center">
               <h2 className="py-2 table-heading">Product List</h2>
            </div>
            <div className="row my-4">
               <div className="col-12 text-end">
                  <Link
                     to={'/admin/product/create'}
                     style={{
                        fontSize: '30px',
                        color: '#fff',
                        backgroundColor: '#FF6699',
                        padding: '30px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                     }}
                  >
                     Create +
                  </Link>
               </div>
            </div>
            <div className="p-4">
               <div className="row col-12 d-flex justify-content-center align-items-center">
                  <table
                     id="tblData"
                     className="order-management-table table table-bordered table-striped"
                     style={{ width: 100 }}
                  >
                     <thead>
                        <tr>
                           <th>ID</th>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Rating</th>
                           <th>Qty</th>
                           <th>Discount</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        {products.map((p, i) => {
                           let discount = 0;
                           if (p?.discount?.end_date) {
                              const discountEndDate = new Date(p.discount.end_date);
                              const now = new Date();
                              if (discountEndDate.getTime() >= now.getTime()) {
                                 discount = p.discount.price;
                              }
                           }
                           return (
                              <tr key={p.id}>
                                 <td>{p.id}</td>
                                 <td>{p.name}</td>
                                 <td>${p.price.toFixed(2)}</td>
                                 <td>{p.rating}</td>
                                 <td>{p.inventory.quantity}</td>
                                 <td>{discount}%</td>
                                 <td>
                                    <div
                                       className=" btn-group d-flex justify-content-center align-items-center"
                                       role="group"
                                    >
                                       <Link
                                          style={{ backgroundColor: '#0F881B' }}
                                          className="order-detail-button mx-4"
                                          onClick={(e) => handleRemoveProduct(e, p.id)}
                                       >
                                          Delete
                                       </Link>
                                       <Link to={`/admin/product/update/${p.id}`} className="order-detail-button mx-4">
                                          Edit
                                       </Link>
                                    </div>
                                 </td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductList;
