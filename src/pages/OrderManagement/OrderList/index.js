import { Link, useParams, useLocation } from 'react-router-dom';
import './index.css';
import { useState } from 'react';
function OrderList() {
   const location = useLocation();
   const getQueryParams = (query) => {
      return new URLSearchParams(query);
   };
   const queryParams = getQueryParams(location.search);
   const status = queryParams.get('status') || 'all';

   return (
      <div className="">
         <div className=" my-5">
            <div className="col-12 text-center">
               <h2 className="py-2 table-heading">Order List</h2>
            </div>

            <div className=" p-4">
               <div className="d-flex justify-content-between pb-5 pt-2 order-status-list">
                  <span></span>
                  <ul className="list-group list-group-horizontal-sm">
                     <Link
                        className={status === 'inprocess' ? 'active order-status-link' : 'order-status-link'}
                        to="/admin/order?status=inprocess"
                     >
                        <li className="list-group-item ">In Process</li>
                     </Link>
                     <Link
                        className={status === 'pending' ? 'active order-status-link' : 'order-status-link'}
                        to="/admin/order?status=pending"
                     >
                        <li className="list-group-item ">Payment Pending</li>
                     </Link>
                     <Link
                        className={status === 'completed' ? 'active order-status-link' : 'order-status-link'}
                        to="/admin/order?status=completed"
                     >
                        <li className="list-group-item ">Completed</li>
                     </Link>
                     <Link
                        className={status === 'approved' ? 'active order-status-link' : 'order-status-link'}
                        to="/admin/order?status=approved"
                     >
                        <li className="list-group-item ">Approved</li>
                     </Link>
                     <Link
                        className={status === 'all' ? 'active order-status-link' : 'order-status-link'}
                        to="/admin/order?status=all"
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
                        <tr>
                           <td>1</td>
                           <td>Tinh</td>
                           <td>035350000</td>
                           <td>company@gmai.com</td>
                           <td>Approved</td>
                           <td>8200</td>
                           <td>
                              <div className="btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link to="/admin/order/detail/1" className="order-detail-button mx-4">
                                    Detail
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>2</td>
                           <td>Nhung</td>
                           <td>035350000</td>
                           <td>customer@gmai.com</td>
                           <td>Shipped</td>
                           <td>8200</td>
                           <td>
                              <div className="btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link to="/admin/order/detail/1" className="order-detail-button mx-4">
                                    Detail
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td>Am</td>
                           <td>035350000</td>
                           <td>customer@gmai.com</td>
                           <td>Shipped</td>
                           <td>8200</td>
                           <td>
                              <div className="btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link to="/admin/order/detail/1" className="order-detail-button mx-4">
                                    Detail
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td>Am</td>
                           <td>035350000</td>
                           <td>customer@gmai.com</td>
                           <td>Shipped</td>
                           <td>8200</td>
                           <td>
                              <div
                                 className="  btn-group d-flex justify-content-center align-items-center"
                                 role="group"
                              >
                                 <Link to="/admin/order/detail/1" className="order-detail-button mx-4">
                                    Detail
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td>Am</td>
                           <td>035350000</td>
                           <td>customer@gmai.com</td>
                           <td>Shipped</td>
                           <td>8200</td>
                           <td>
                              <div className=" btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link to="/admin/order/detail/1" className="order-detail-button mx-4">
                                    Detail
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td>Am</td>
                           <td>035350000</td>
                           <td>customer@gmai.com</td>
                           <td>Shipped</td>
                           <td>8200</td>
                           <td>
                              <div className=" btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link to="/admin/order/detail/1" className="order-detail-button mx-4">
                                    Detail
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td>Am</td>
                           <td>035350000</td>
                           <td>customer@gmai.com</td>
                           <td>Shipped</td>
                           <td>8200</td>
                           <td>
                              <div className=" btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link to="/admin/order/detail/1" className="order-detail-button mx-4">
                                    Detail
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td>Am</td>
                           <td>035350000</td>
                           <td>customer@gmai.com</td>
                           <td>Shipped</td>
                           <td>8200</td>
                           <td>
                              <div className=" btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link to="/admin/order/detail/1" className="order-detail-button mx-4">
                                    Detail
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td>Am</td>
                           <td>035350000</td>
                           <td>customer@gmai.com</td>
                           <td>Shipped</td>
                           <td>8200</td>
                           <td>
                              <div className=" btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link to="/admin/order/detail/1" className="order-detail-button mx-4">
                                    Detail
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td>Am</td>
                           <td>035350000</td>
                           <td>customer@gmai.com</td>
                           <td>Shipped</td>
                           <td>8200</td>
                           <td>
                              <div className=" btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link to="/admin/order/detail/1" className="order-detail-button mx-4">
                                    Detail
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td>Am</td>
                           <td>035350000</td>
                           <td>customer@gmai.com</td>
                           <td>Shipped</td>
                           <td>8200</td>
                           <td>
                              <div className=" btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link to="/admin/order/detail/1" className="order-detail-button mx-4">
                                    Detail
                                 </Link>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
}

export default OrderList;
