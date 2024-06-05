import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import '../index.css';
import axios from 'axios';
import { PAYMENT_STATUS, ORDER_STATUS } from '../../../enums/core';
import { BASE_URL, vAPI } from '~/enums/core';
import { toast } from 'react-toastify';

function Ordering() {
   const [orderings, setOrdering] = useState([]);
   useEffect(() => {
      try {
         const token = localStorage.getItem('token');
         const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/v1',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const Ordering = async () => {
            const res = await axiosInstance.get('/orders/customer/ordering');
            const data = res.data.data;
            setOrdering(data);
         };
         Ordering();
      } catch (error) {
         console.error(error);
      }
   }, []);
   const cancelOrder = async (e, i) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `orders/cancel-order`;
      const options = {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         mode: 'cors',
         body: JSON.stringify({
            order: { id: orderings[i].id },
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
            setOrdering((prev) => {
               let newArr = [...prev];
               newArr[i].order_status = ORDER_STATUS.CANCELLED;
               newArr[i].payment.payment_status = ORDER_STATUS.REFUNDED;
               return newArr;
            });
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   const payNow = async (e, i) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `orders/paynow`;
      const options = {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         mode: 'cors',
         body: JSON.stringify({ order: { id: orderings[i].id } }),
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
   return Object.values(orderings).map((ordering, index) => (
      <div className="row" key={ordering.id}>
         <div className="col-1"></div>
         <div className="col-10 custom-border mb-5">
            <div style={{ position: 'relative' }} className="row align-items-center">
               <div className="col-8">
                  {ordering.order_details.map((orderDetail, i) => (
                     <div className="row align-items-center" key={i}>
                        <div className="col-4">
                           <img
                              className="w-100 h-100"
                              src="https://hoaigiangshop.com/wp-content/uploads/2021/03/quat-co-trang-tq-2.jpg"
                              alt=""
                           />
                        </div>
                        <div className="col-8">
                           <div className="row maincontent-size">
                              <div className="col-9">
                                 <p className="mb-2 font-weight-bold">{ordering.name}</p>
                                 <p className="mb-2">Size: {orderDetail.size}</p>
                                 <p className="mb-2">Color: {orderDetail.color}</p>
                                 <p className="mb-2">Quantity: {orderDetail.quantity}</p>
                              </div>
                              <div className="col-2">
                                 <p>Price: ${orderDetail.price}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <p className="vertical-line" />
               <div className="col-4">
                  <p className="mb-2 color-custom font-weight-bold">
                     <i>{ordering.order_status}</i>
                  </p>
                  <div className="row flex-item m-2">
                     <p className="col-6 font-weight-bold">Total Price: </p>
                     <p className="col-5 bg-custom text-white rounded-15 font-weight-bold text-center p-2">
                        ${ordering.order_total}
                     </p>
                  </div>
                  <div className="row flex-item m-2">
                     {ordering.payment.payment_status === PAYMENT_STATUS.APPRROVED_FOR_DELAYED_PAYMENT ? (
                        <p
                           className="col-5 btn rounded-15 btn-success font-weight-bold maincontent-size ml-2"
                           onClick={(e) => payNow(e, index)}
                        >
                           Pay now
                        </p>
                     ) : (
                        <p className="col-5"></p>
                     )}
                     <p className="col-1"></p>
                     <p
                        className="col-5 btn rounded-15 btn-dark maincontent-size mr-3 ml-2"
                        id="cancelled"
                        onClick={(e) => cancelOrder(e, index)}
                     >
                        Cancelled
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-1"></div>
      </div>
   ));
}

export default Ordering;
