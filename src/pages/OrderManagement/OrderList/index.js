import { Link, useParams, useLocation } from 'react-router-dom';
import './index.css';
import { useState, useEffect } from 'react';
import { BASE_URL, v1API } from '~/enums/core';
function OrderList() {
   const location = useLocation();
   const getQueryParams = (query) => {
      return new URLSearchParams(query);
   };
   const queryParams = getQueryParams(location.search);
   const [status, setStatus] = useState('all');
   const [orders, setOrders] = useState([]);
   const statusParams = queryParams.get('status');
   useEffect(() => {
      logOrders();
   }, [status]);
   async function logOrders() {
      localStorage.setItem(
         'token',
         // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTY0NjA3ODMsImV4cCI6MTcxNjQ2NDM4MywibmJmIjoxNzE2NDYwNzgzLCJqdGkiOiJRaHppQkg3RTd3bm44TkhtIiwic3ViIjozLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.anyfw4AG4-eu5mgArrI5kUc8n4WsggcCFmhQowJ5vmA',
         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTY0NTgwNTAsImV4cCI6MTcxNjQ2MTY1MCwibmJmIjoxNzE2NDU4MDUwLCJqdGkiOiJBT2hXT0xSbWV6QTNUSHMxIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.UoY9Gx2zTz95ALts4h4Ge8nQlnuoakMrnTGab0H7oBg   ',
      );
      const token = localStorage.getItem('token');
      const url = BASE_URL + v1API + `orders/admin/${status}`;
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
         setOrders(responseObj.data);
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   }
   return (
      <div className="">
         <div className="">
            <div className="col-12 text-center">
               <h2 className="py-2 table-heading">Order List</h2>
            </div>

            <div className="">
               <div className="my-5 order-status-list">
                  <span></span>
                  <ul className="list-group list-group-horizontal-sm">
                     <Link
                        className={status === 'inprocess' ? 'active order-status-link' : 'order-status-link'}
                        to="/admin/order?status=inprocess"
                        onClick={() => setStatus('inprocess')}
                     >
                        <li className="list-group-item">In Process</li>
                     </Link>
                     <Link
                        className={status === 'pending' ? 'active order-status-link' : 'order-status-link'}
                        to="/admin/order?status=pending"
                        onClick={() => setStatus('pending')}
                     >
                        <li className="list-group-item ">Payment Pending</li>
                     </Link>
                     <Link
                        className={status === 'completed' ? 'active order-status-link' : 'order-status-link'}
                        to="/admin/order?status=completed"
                        onClick={() => setStatus('completed')}
                     >
                        <li className="list-group-item ">Completed</li>
                     </Link>
                     <Link
                        className={status === 'approved' ? 'active order-status-link' : 'order-status-link'}
                        to="/admin/order?status=approved"
                        onClick={() => setStatus('approved')}
                     >
                        <li className="list-group-item ">Approved</li>
                     </Link>
                     <Link
                        className={status === 'all' ? 'active order-status-link' : 'order-status-link'}
                        to="/admin/order?status=all"
                        onClick={() => setStatus('all')}
                     >
                        <li className="list-group-item {{$all}}">All</li>
                     </Link>
                  </ul>
               </div>
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
                           <th>Phone</th>
                           <th>Email</th>
                           <th>Status</th>
                           <th>Total</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        {orders.map((o) => (
                           <tr key={o.id}>
                              <td style={{ padding: '4px' }}>{o.id}</td>
                              <td style={{ padding: '4px' }}>{o.name}</td>
                              <td style={{ padding: '4px' }}>{o.phone}</td>
                              <td style={{ padding: '4px' }}>{o.user.email}</td>
                              <td style={{ padding: '4px' }}>{o.order_status}</td>
                              <td style={{ padding: '4px' }}>{o.order_total}</td>
                              <td style={{ padding: '4px' }}>
                                 <div
                                    className=" btn-group d-flex justify-content-center align-items-center"
                                    role="group"
                                 >
                                    <Link to={'/admin/order/detail/' + o.id} className="order-detail-button mx-4">
                                       Detail
                                    </Link>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
}

export default OrderList;
