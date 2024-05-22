import { Link, useParams, useLocation } from 'react-router-dom';
import './index.css';
import { useState } from 'react';

function OrderList() {
   const { id } = useParams();
   console.log(id);

   return (
      <form method="post" className="my-5" id="orderForm">
         <div className="col-12 text-center mb-5">
            <h2 className="py-2 table-heading">Order Detail</h2>
         </div>
         <input type="hidden" name="order[id]" value="{{$order->id}}" />
         <div className="container">
            <div className="card">
               <div className="card-header bg-dark text-light ml-0">
                  <div className="container row">
                     <div className="col-12 d-none d-md-block col-md-6 pb-1 fs-4">
                        <i className="fas fa-shopping-cart"></i>Order Summary
                     </div>
                     <div className="col-12 col-md-4 offset-md-2 text-right">
                        <a href="#" className="btn btn-outline-info form-control btn-sm fs-4">
                           Back to Orders
                        </a>
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
                                 <input value="Tran Trung Tinh" name="name" type="text" className="form-control fs-5" />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Phone</div>
                              <div className="col-8">
                                 <input value="0353537180" name="phone" type="text" className="form-control fs-5" />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Street Address</div>
                              <div className="col-8">
                                 <input
                                    value="101B Le Huu Trac"
                                    name="street_address"
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Distreet Address</div>
                              <div className="col-8">
                                 <input
                                    value="Phuoc My"
                                    name="district_address"
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">City</div>
                              <div className="col-8">
                                 <input value="Da Nang" name="city" type="text" className="form-control fs-5" />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Email</div>
                              <div className="col-8">
                                 <input
                                    readOnly
                                    value="riotgheptrannhulol@gmail.com"
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
                                    value="2024-04-23T09:30:15"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Carrier</div>
                              <div className="col-8">
                                 <input
                                    value="Phan Thuy Nhung"
                                    id="carrier"
                                    name="carrier"
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Tracking Number</div>
                              <div className="col-8">
                                 <input
                                    value="0353537890"
                                    id="trackingNumber"
                                    name="tracking_number"
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Shipping Date</div>
                              <div className="col-8">
                                 <input
                                    readOnly
                                    value="2024-04-26 T09:30:15"
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Session ID</div>
                              <div className="col-8">
                                 <input
                                    value="sadasljdaksdjasjdasjk;ldasjkldjaksldjasjdasjdajs;djak;sldja;sjdkajskl;djak;sldjkasjkdkasjd;as;kldja;sldjaskjl"
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
                                    value="asdjasdjhasjdfk;ajsdfk;jasfak;sldjflkasjdfk;lsadjflkjadsfjad;sjfklasd;jrfoweru"
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
                                    value="2024-04-26 T09:30:15"
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
                                    value="2024-04-26 T09:30:15"
                                    readOnly
                                    type="text"
                                    className="form-control fs-5"
                                 />
                              </div>
                           </div>
                           <div className="row my-3 form-control-container">
                              <div className="col-4 fs-4">Payment Status</div>
                              <div className="col-8">
                                 <input readOnly value="Approved" type="text" className="form-control fs-5" />
                              </div>
                           </div>
                           <button
                              type="submit"
                              onClick="updateOrderDetails()"
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
                              Order Status - Approved
                           </label>
                           <ul className="list-group mb-3">
                              <li className="list-group-item d-flex justify-content-between p-2">
                                 <div className="row container">
                                    <div className="col-8">
                                       <h6 className="my-0 text-primary fs-4">Beautiful clothes</h6>
                                       <small className="text-muted fs-5">Price : 20 000 vnd</small>
                                       <br />
                                       <small className="text-muted fs-5">Quantity : 2</small>
                                       <br />
                                       <small className="text-muted fs-5">Color : blue</small>
                                       <br />
                                       <small className="text-muted fs-5">Size : M</small>
                                    </div>
                                    <div className="col-4 text-end">
                                       <p className="text-success fs-5">40 000 vnd</p>
                                    </div>
                                 </div>
                              </li>
                              <li className="list-group-item bg-primary">
                                 <div className="row col-12">
                                    <div className="col-6 row">
                                       <h5 className="text-white fs-5">TOTAL</h5>
                                    </div>
                                    <div className="col-6 text-end">
                                       <h5 className="text-white fs-5">40 000 vnd</h5>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                           <button type="submit" onClick="payNow()" className="btn btn-success form-control my-1 fs-4">
                              Pay Now
                           </button>
                           <button
                              type="submit"
                              onClick="startProcessing()"
                              className="btn btn-primary form-control my-1 fs-4"
                           >
                              Start Processing
                           </button>
                           <button
                              type="submit"
                              onClick="validateAndShipOrder()"
                              className="btn btn-primary form-control my-1 fs-4"
                           >
                              Ship Order
                           </button>
                           <button
                              onClick="cancelOrder()"
                              type="submit"
                              className="btn btn-danger form-control my-1 fs-4"
                           >
                              Cancel Order
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>{' '}
         {/* This is the corrected closing div */}
      </form>
   );
}

export default OrderList;
