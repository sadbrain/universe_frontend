import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BASE_URL, v1API } from '~/enums/core';
import { toast } from 'react-toastify';

function OrderConfirmation() {
   const location = useLocation();
   const getQueryParams = (query) => {
      return new URLSearchParams(query);
   };
   const queryParams = getQueryParams(location.search);
   const order_id = queryParams.get('order_id');

   useEffect(() => {
      confirmOrder();
   }, []);
   const confirmOrder = async () => {
      const token = localStorage.getItem('token');
      const url = BASE_URL + v1API + `carts/order-confirmation/${order_id}`;
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
         if (response.status === 200) {
            toast.success(responseObj.success_message);
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   return (
      <div className="container row pt-4">
         <div className="col-12 text-center">
            <h1 className="text-primary text-center">Payment Successful!</h1>
            Order Number : {order_id} <br />
            <br />
            <img src="https://tecwood.com.vn/upload/images/Post/anh-cay-xanh-dep.jpg" width="65%" />
         </div>
         <div className="col-12 text-center" style={{ color: 'maroon' }}>
            <br />
            Payment has been applied successfully! <br />
            <Link to="/">Back to Home</Link>
         </div>
      </div>
   );
}
export default OrderConfirmation;
