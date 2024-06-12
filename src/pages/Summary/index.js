import './index.css';
import { useEffect, useState } from 'react';
import { BASE_URL, vAPI, BE_URL } from '~/enums/core';
import { useLocation, useNavigate } from 'react-router-dom';
function Summary() {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      order: {
         name: '',
         phone: '',
         street_address: '',
         district_address: '',
         city: '',
      },
      cart_id: [],
   });
   const today = new Date();
   const date30DaysFromToday = new Date();
   date30DaysFromToday.setDate(today.getDate() + 30);

   const [carts, setCarts] = useState([]);
   const location = useLocation();
   const getQueryParams = (query) => {
      return new URLSearchParams(query);
   };
   const queryParams = getQueryParams(location.search);
   const cart_id = queryParams.getAll('cart_id');
   useEffect(() => {
      logInForUser();
      logInForCart();
   }, []);
   const logInForUser = async () => {
      const token = localStorage.getItem('token');

      if (token) {
         const url = BASE_URL + vAPI + `auth/user-profile`;
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
            if (response.status === 200) {
               const responseObj = await response.json();
               if (responseObj) {
                  setFormData({
                     ...formData,
                     order: {
                        name: responseObj.name,
                        phone: responseObj.phone,
                        street_address: responseObj.street_address,
                        district_address: responseObj.district_address,
                        city: responseObj.city,
                     },
                     cart_id: cart_id,
                  });
               }
            }
         } catch (error) {
            console.error('Fetch error:', error.message);
            return null;
         }
      }
   };
   const logInForCart = async () => {
      const token = localStorage.getItem('token');
      if (token) {
         const url = BASE_URL + vAPI + 'carts/show-cart-for-sumary';
         const options = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ cart_id: cart_id }),
         };
         try {
            const response = await fetch(url, options);
            if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if (response.status === 200) {
               const responseObj = await response.json();
               setCarts(responseObj.data);
            }
         } catch (error) {
            console.error('Fetch error:', error.message);
            return null;
         }
      }
   };
   const handleChange = (e) => {
      const { value, name } = e.target;
      const keys = name.split('.');
      setFormData((prev) => {
         const updatedFormData = { ...prev };
         let currentLevel = updatedFormData;

         for (let i = 0; i < keys.length - 1; i++) {
            if (Array.isArray(currentLevel[keys[i]])) {
               const index = parseInt(keys[i + 1], 10);
               currentLevel = currentLevel[keys[i]][index];
               i++;
            } else {
               currentLevel = currentLevel[keys[i]];
            }
         }
         currentLevel[keys[keys.length - 1]] = value;

         return updatedFormData;
      });
   };
   let totalCost = 0;
   const handleSumbit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `carts/summary`;
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         mode: 'cors',
         body: JSON.stringify(formData),
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();

         if (response.status === 200) {
            if (responseObj.success_url.includes('orderConfirmation')) {
               navigate(responseObj.success_url);
            } else {
               window.location.href = responseObj.success_url;
            }
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   return (
      <form action="http://localhost:8000/api/v1/carts/summary" id="summary" method="post">
         <br />
         <div className="container-summary">
            <div className="card shadow border-0">
               <div className="card-body card-summary">
                  <div className="rounded p-2">
                     <div className="row">
                        <div className="col-12 col-lg-5 pb-4">
                           <div className="row">
                              <h4 className="d-flex justify-content-between align-items-center mb-3">
                                 <span className="user-info-title">Contact User</span>
                              </h4>
                           </div>
                           <div className="row my-3">
                              <div className="col-4">
                                 <label className="mt-3">Name</label>
                              </div>
                              <div className="col-8">
                                 <input
                                    placeholder="Enter your name ..."
                                    onChange={handleChange}
                                    value={formData.order.name}
                                    name="order.name"
                                    className="form-control"
                                 />
                                 <span className="text-danger"></span>
                              </div>
                           </div>
                           <div className="row my-3">
                              <div className="col-4">
                                 <label className="mt-3">Phone Number</label>
                              </div>
                              <div className="col-8">
                                 <input
                                    placeholder="Enter your phone ..."
                                    name="order.phone"
                                    className="form-control"
                                    value={formData.order.phone}
                                    onChange={handleChange}
                                 />
                                 <span className="text-danger"></span>
                              </div>
                           </div>
                           <div className="row my-3">
                              <div className="col-4">
                                 <label className="mt-3">Street Address</label>
                              </div>
                              <div className="col-8">
                                 <input
                                    placeholder="Enter your street address ..."
                                    name="order.street_address"
                                    onChange={handleChange}
                                    value={formData.order.street_address}
                                    className="form-control"
                                 />
                                 <span className="text-danger"></span>
                              </div>
                           </div>
                           <div className="row my-3">
                              <div className="col-4">
                                 <label className="mt-3">State</label>
                              </div>
                              <div className="col-8">
                                 <input
                                    placeholder="Enter your district address ..."
                                    name="order.district_address"
                                    onChange={handleChange}
                                    value={formData.order.district_address}
                                    className="form-control"
                                 />
                                 <span className="text-danger"></span>
                              </div>
                           </div>
                           <div className="row my-3">
                              <div className="col-4">
                                 <label className="mt-3">City</label>
                              </div>
                              <div className="col-8">
                                 <input
                                    placeholder="Enter your city ..."
                                    onChange={handleChange}
                                    name="order.city"
                                    value={formData.order.city}
                                    className="form-control"
                                 />
                                 <span className="text-danger"></span>
                              </div>
                           </div>

                           <p className="estimate-date ms-5">
                              Estimate Arrival Date: {today.toISOString().split('T')[0]}
                              {' - '}
                              {date30DaysFromToday.toISOString().split('T')[0]}
                           </p>
                        </div>
                        <div className="col-12 col-lg-6 offset-lg-1">
                           <h4 className="d-flex justify-content-between align-items-center mb-3">
                              <span className="order-summary-title">Order Summary</span>
                           </h4>
                           <ul className="list-group mb-3">
                              {carts.map((c) => {
                                 let price = c.product?.price;

                                 if (c.product?.discount?.end_date) {
                                    const discountEndDate = new Date(c.product.discount.end_date);
                                    const now = new Date();
                                    if (discountEndDate.getTime() >= now.getTime()) {
                                       price = price - (price * c.product.discount.price) / 100;
                                    }
                                 }
                                 totalCost += price * c.quantity;
                                 return (
                                    <li
                                       key={c.id}
                                       className="list-group-item d-flex  product-summary-container box-shadow"
                                    >
                                       <div className="product-summary_image col-2">
                                          <img
                                             src={
                                                c.product.thumbnail.includes('https://via.placeholder.com')
                                                   ? c.product.thumbnail
                                                   : BE_URL + c.product.thumbnail
                                             }
                                             alt=""
                                          />
                                       </div>
                                       <div className="product-summary_info px-1 col-3">
                                          <h6 className="product-summary_info-name my-1">{c.product.name}</h6>
                                          <p className="">Size: {c.size}</p>
                                          <p className="">Color: {c.color}</p>
                                       </div>
                                       <div className="product-summary_price col-7">
                                          <h3 className="col-4">Quantity : {c.quantity}</h3>
                                          <h3 className="col-4">Price: ${price.toFixed(2)}</h3>
                                          <h3 className="col-4 product-summary_total_price">
                                             ${(price * c.quantity).toFixed(2)}
                                          </h3>
                                       </div>
                                    </li>
                                 );
                              })}
                              <li className="list-group-item d-flex justify-content-between bg-light">
                                 <small className="f" style={{}}>
                                    Total (USD)
                                 </small>
                                 <strong className="product-summary_total_price px-2">${totalCost.toFixed(2)}</strong>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className=" card-summary_footer px-4 pb-4">
                  <div className="row">
                     <div className="col-12 col-md-8 pt-2"></div>
                     <div className="col-12 col-md-4">
                        <button
                           type="submit"
                           onClick={handleSumbit}
                           value="Place Order"
                           className="card-summary_place-order form-control"
                        >
                           Place Order
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </form>
   );
}
export default Summary;
