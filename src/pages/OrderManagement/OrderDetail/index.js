import { Link, useParams, useLocation } from 'react-router-dom';
import './index.css';
import { useState, useEffect } from 'react';
import { BASE_URL, v1API } from '~/enums/core';
import { ToastContainer, toast } from 'react-toastify';
import { ORDER_STATUS, PAYMENT_STATUS } from '../../../enums/core';
import Swal from 'sweetalert2';
function OrderList() {
   const { id } = useParams();
   const prefix = 'orders/';
   const [orderContainer, setOrderContainer] = useState({});
   const [orderStatus, setOrderStatus] = useState('');
   const [paymentStatus, setPaymentStatus] = useState('');
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      street_address: '',
      district_address: '',
      city: '',
      carrier: '',
      tracking_number: '',
   });
   useEffect(() => {
      logOrder();
   }, []);

   useEffect(() => {
      if (orderContainer) {
         setFormData({
            name: orderContainer?.order?.name || '',
            phone: orderContainer?.order?.phone || '',
            street_address: orderContainer?.order?.street_address || '',
            district_address: orderContainer?.order?.district_address || '',
            city: orderContainer?.order?.city || '',
            carrier: orderContainer?.order?.carrier || '',
            tracking_number: orderContainer?.order?.tracking_number || '',
         });
      }
      setOrderStatus(orderContainer?.order?.order_status);
      setPaymentStatus(orderContainer?.payment?.payment_status);
   }, [orderContainer]);
   useEffect(() => {}, []);

   const logOrder = async () => {
      const token = localStorage.getItem('token');
      const url = BASE_URL + v1API + prefix + `detail/${id}`;
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
         setOrderContainer(responseObj.data[0]);
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   const updateOrderDetails = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const url = BASE_URL + v1API + prefix + `detail/${orderContainer.order.id}`;
      const options = {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         mode: 'cors',
         body: JSON.stringify({ ...formData, order: { id: orderContainer.order.id } }),
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         if (response.status === 200) {
            toast.success(responseObj.success_messages);
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   const payNow = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const url = BASE_URL + v1API + prefix + `paynow`;
      const options = {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         mode: 'cors',
         body: JSON.stringify({ order: { id: orderContainer.order.id } }),
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         if (response.status === 200) {
            window.location.href = responseObj.success_url;
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   const startProcessing = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const url = BASE_URL + v1API + prefix + `start-processing`;
      const options = {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         mode: 'cors',
         body: JSON.stringify({ order: { id: orderContainer.order.id } }),
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         if (response.status === 200) {
            toast.success(responseObj.success_messages);
            setOrderStatus(ORDER_STATUS.PROCESSING);
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   const validateAndShipOrder = (e) => {
      if (formData.tracking_number == '') {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter tracking number!',
         });
         return false;
      }
      if (formData.carrier == '') {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter carrier!',
         });
         return false;
      }
      return true;
   };
   const cancelOrder = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const url = BASE_URL + v1API + prefix + `cancel-order`;
      const options = {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         mode: 'cors',
         body: JSON.stringify({
            order: { id: orderContainer.order.id },
         }),
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         if (response.status === 200) {
            toast.success(responseObj.success_messages);
            setOrderStatus(ORDER_STATUS.CANCELLED);
            setPaymentStatus(ORDER_STATUS.REFUNDED);
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   const startShipping = async (e) => {
      e.preventDefault();
      if (validateAndShipOrder()) {
         const token = localStorage.getItem('token');
         const url = BASE_URL + v1API + prefix + `ship-order`;
         const options = {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
            mode: 'cors',
            body: JSON.stringify({
               tracking_number: formData.tracking_number,
               carrier: formData.carrier,
               order: { id: orderContainer.order.id },
            }),
         };
         try {
            const response = await fetch(url, options);
            if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseObj = await response.json();
            if (response.status === 200) {
               toast.success(responseObj.success_messages);
               setOrderStatus(ORDER_STATUS.SHIPPED);
            }
         } catch (error) {
            console.error('Fetch error:', error.message);
            return null;
         }
      }
   };
   if (!orderContainer) {
      return <div>Loading...</div>;
   }

   let totalCost = 0;

   return (
      <form method="post" className="my-5" id="orderForm">
         <div className="col-12 text-center mb-5">
            <h2 className="py-2 table-heading">Order Detail</h2>
         </div>
         <input type="hidden" name="order.id" value={orderContainer?.order?.id || ''} />
         <div className="container">
            <div className="card">
               <div className="card-header bg-dark text-light ml-0">
                  <div className="container row">
                     <div className="col-12 d-none d-md-block col-md-6 pb-1 fs-4">
                        <i className="fas fa-shopping-cart"></i>Order Summary
                     </div>
                     <div className="col-12 col-md-4 offset-md-2 text-right">
                        <Link to="/admin/order?status=all" className="btn btn-outline-info form-control btn-sm fs-4">
                           Back to Orders
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="card-body">
                  <div className="container rounded p-2">
                     <div className="row">
                        <div className="col-12 col-lg-6 pb-4">
                           <div className="row mb-4">
                              <h4 className="d-flex justify-content-between align-items-center mb-3">
                                 <span className="text-primary fs-3">PickUp Details:</span>
                              </h4>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4 fs-4">Name</div>
                              <div className="col-8 ">
                                 <input
                                    value={formData?.name}
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Phone</div>
                              <div className="col-8">
                                 <input
                                    value={formData?.phone}
                                    name="phone"
                                    type="text"
                                    onChange={handleChange}
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Street Address</div>
                              <div className="col-8">
                                 <input
                                    value={formData?.street_address}
                                    name="street_address"
                                    type="text"
                                    onChange={handleChange}
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">District Address</div>
                              <div className="col-8">
                                 <input
                                    value={formData?.district_address}
                                    name="district_address"
                                    type="text"
                                    onChange={handleChange}
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">City</div>
                              <div className="col-8">
                                 <input
                                    value={formData?.city}
                                    name="city"
                                    type="text"
                                    onChange={handleChange}
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Email</div>
                              <div className="col-8">
                                 <input
                                    readOnly
                                    value={orderContainer?.order?.user?.email}
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Order Date</div>
                              <div className="col-8">
                                 <input
                                    className="form-control fs-5"
                                    readOnly
                                    type="text"
                                    value={orderContainer?.order?.order_date}
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Carrier</div>
                              <div className="col-8">
                                 <input
                                    value={formData?.carrier}
                                    id="carrier"
                                    name="carrier"
                                    type="text"
                                    onChange={handleChange}
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Tracking Number</div>
                              <div className="col-8">
                                 <input
                                    value={formData?.tracking_number}
                                    id="trackingNumber"
                                    name="tracking_number"
                                    type="text"
                                    onChange={handleChange}
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Shipping Date</div>
                              <div className="col-8">
                                 <input
                                    readOnly
                                    value={orderContainer?.order?.shipping_date}
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Session ID</div>
                              <div className="col-8">
                                 <input
                                    value={orderContainer?.payment?.session_id}
                                    readOnly
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Payment Intent ID</div>
                              <div className="col-8">
                                 <input
                                    value={orderContainer?.payment?.payment_intent_id}
                                    readOnly
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Payment Due Date</div>
                              <div className="col-8">
                                 <input
                                    value={orderContainer?.payment?.payment_due_date}
                                    readOnly
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Payment Date</div>
                              <div className="col-8">
                                 <input
                                    value={orderContainer?.payment?.payment_date}
                                    readOnly
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Payment Status</div>
                              <div className="col-8">
                                 <input readOnly value={paymentStatus} type="text" className="form-control fs-5" />
                              </div>
                           </div>
                           <button
                              type="submit"
                              onClick={updateOrderDetails}
                              className="btn btn-warning form-control mt-4 fs-4 text-white"
                           >
                              Update Order Details
                           </button>
                        </div>
                        <div className="col-12 col-lg-5 mb-5">
                           <h4 className="d-flex justify-content-between align-items-center mb-3">
                              <span className="text-primary fs-3">Order Summary:</span>
                           </h4>
                           <label className="btn btn-outline-primary form-control my-2 fs-4">
                              Order Status - {orderStatus}
                           </label>
                           <ul className="list-group mb-3">
                              {orderContainer?.order_details?.map((od) => {
                                 totalCost += od.quantity * od.price;
                                 return (
                                    <div key={od.id}>
                                       <li className="list-group-item d-flex justify-content-between p-2">
                                          <div className="row container">
                                             <div className="col-8">
                                                <h6 className="my-0 text-primary fs-4">{od.product.name}</h6>
                                                <small className="text-muted fs-5">Price : {od.price.toFixed(2)}</small>
                                                <br />
                                                <small className="text-muted fs-5">Quantity : {od.quantity}</small>
                                                <br />
                                                <small className="text-muted fs-5">Color : {od.color}</small>
                                                <br />
                                                <small className="text-muted fs-5">Size : {od.size}</small>
                                             </div>
                                             <div className="col-4 text-end">
                                                <p className="text-success fs-5">
                                                   $ {(od.quantity * od.price).toFixed(2)}
                                                </p>
                                             </div>
                                          </div>
                                       </li>
                                    </div>
                                 );
                              })}
                              <li className="list-group-item bg-primary">
                                 <div className="row col-12">
                                    <div className="col-6 row">
                                       <h5 className="text-white fs-5">TOTAL</h5>
                                    </div>
                                    <div className="col-6 text-end">
                                       <h5 className="text-white fs-5">$ {totalCost.toFixed(2)}</h5>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                           {(paymentStatus === PAYMENT_STATUS.APPRROVED_FOR_DELAYED_PAYMENT) &
                           (orderStatus === ORDER_STATUS.SHIPPED) ? (
                              <button type="submit" onClick={payNow} className="btn btn-success form-control my-1 fs-4">
                                 Pay Now
                              </button>
                           ) : (
                              ''
                           )}
                           {orderStatus === ORDER_STATUS.APPROVED ? (
                              <button
                                 type="submit"
                                 onClick={startProcessing}
                                 className="btn btn-primary form-control my-1 fs-4"
                              >
                                 Start Processing
                              </button>
                           ) : (
                              ''
                           )}
                           {orderStatus === ORDER_STATUS.PROCESSING ? (
                              <button
                                 type="submit"
                                 onClick={startShipping}
                                 className="btn btn-primary form-control my-1 fs-4"
                              >
                                 Ship Order
                              </button>
                           ) : (
                              ''
                           )}

                           {(orderStatus !== ORDER_STATUS.SHIPPED) &
                           (orderStatus !== ORDER_STATUS.REFUNDED) &
                           (orderStatus !== ORDER_STATUS.CANCELLED) ? (
                              <button
                                 onClick={cancelOrder}
                                 type="submit"
                                 className="btn btn-danger form-control my-1 fs-4"
                              >
                                 Cancel Order
                              </button>
                           ) : (
                              ''
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </form>
   );
}

export default OrderList;
