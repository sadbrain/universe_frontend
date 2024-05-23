import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react';
import { RightOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import './index.css';
function OrderManagementCus() {
   return (
      <div className="container">
         <h1 className="title-size text-center">
            <b>Order Summary</b>
         </h1>
         <div className="text-center flex-item ">
            <p className="maincontent-size non-text-decoration ">Cart</p>
            <RightOutlined className="color-custom m-2" />

            <p className="color-custom maincontent-size non-text-decoration ">Checkout</p>
         </div>
         <div className="text-center flex-item m-5 align-items-center ">
            <button className="color-custom btn-hover h2 active font-weight-bold " id="allButton">
               All
            </button>
            <button className="color-custom btn-hover h2 font-weight-bold" onmouseover="hoverButton(this)">
               Ordering
            </button>
            <button className="color-custom btn-hover h2 font-weight-bold" onmouseover="hoverButton(this)">
               Ordered
            </button>
            <button className="color-custom btn-hover h2 font-weight-bold" onmouseover="hoverButton(this)">
               Cancelled
            </button>
         </div>
         <div className="row">
            {/* Moi cart se co col-1 den col-10 den col-1 */}
            <div className="col-1"></div>
            <div className="col-10 custom-border mb-5">
               <div className="row align-items-center">
                  <div className="col-3">
                     <img
                        className="w-100 h-100"
                        src="https://hoaigiangshop.com/wp-content/uploads/2021/03/quat-co-trang-tq-2.jpg"
                        alt=""
                     />
                  </div>
                  <div className="col-9">
                     <div className="row maincontent-size">
                        <div className="col-5">
                           <p className="mb-2">Ultra-Light School Slippers for introverts</p>
                           <p className="mb-2">Size: 37</p>
                           <p className="mb-2">Color: White</p>
                           <p className="mb-2">Quality: 01</p>
                        </div>
                        <div className="col-2">
                           <p>Price: $400.00</p>
                        </div>
                        <div className="col-5">
                           <p className="mb-2 color-custom font-weight-bold">
                              <i>Cancelled</i>
                           </p>
                           <p className=" mb-2 font-weight-bold">Discount: -20%</p>
                           <div className="row flex-item ">
                              <p className="col-6 font-weight-bold">Total Price: </p>
                              <p className="col-5 bg-custom text-white rounded-15 font-weight-bold text-center p-2">
                                 $200.00
                              </p>
                           </div>
                           <div className="row flex-item mt-2">
                              <p className="col-6"></p>
                              <p className="  col-5 btn rounded-15 btn-success font-weight-bold maincontent-size">
                                 Buy again
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-1"></div>
            <div className="col-1"></div>
            <div className="col-10 custom-border mb-5">
               <div className="row align-items-center">
                  <div className="col-3">
                     <img
                        className="w-100 h-100"
                        src="https://hoaigiangshop.com/wp-content/uploads/2021/03/quat-co-trang-tq-2.jpg"
                        alt=""
                     />
                  </div>
                  <div className="col-9">
                     <div className="row maincontent-size">
                        <div className="col-5">
                           <p className="mb-2">Ultra-Light School Slippers for introverts</p>
                           <p className="mb-2">Size: 37</p>
                           <p className="mb-2">Color: White</p>
                           <p className="mb-2">Quality: 01</p>
                        </div>
                        <div className="col-2">
                           <p>Price: $400.00</p>
                        </div>
                        <div className="col-5">
                           <p className="mb-2 color-custom font-weight-bold ">
                              <i>Delivered</i>
                           </p>
                           <p className=" mb-2 font-weight-bold">Discount: -20%</p>
                           <div className="row flex-item ">
                              <p className="col-6 font-weight-bold">Total Price: </p>
                              <p className="col-5 bg-custom text-white rounded-15 font-weight-bold text-center p-2">
                                 $200.00
                              </p>
                           </div>
                           <div className="row flex-item mt-2">
                              <p className="col-6"></p>
                              <p className="  col-5 btn rounded-15 btn-success font-weight-bold maincontent-size">
                                 Buy again
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-1"></div>

            <div className="col-1"></div>
            <div className="col-10 custom-border mb-5">
               <div className="row align-items-center">
                  <div className="col-3">
                     <img
                        className="w-100 h-100"
                        src="https://hoaigiangshop.com/wp-content/uploads/2021/03/quat-co-trang-tq-2.jpg"
                        alt=""
                     />
                  </div>
                  <div className="col-9">
                     <div className="row maincontent-size">
                        <div className="col-5">
                           <p className="mb-2">Ultra-Light School Slippers for introverts</p>
                           <p className="mb-2">Size: 37</p>
                           <p className="mb-2">Color: White</p>
                           <p className="mb-2">Quality: 01</p>
                        </div>
                        <div className="col-2">
                           <p>Price: $400.00</p>
                        </div>
                        <div className="col-5">
                           <p className="mb-2 color-custom font-weight-bold ">
                              <i>Shipped</i>
                           </p>
                           <p className=" mb-2 font-weight-bold">Discount: -20%</p>
                           <div className="row flex-item ">
                              <p className="col-6 font-weight-bold">Total Price: </p>
                              <p className="col-5 bg-custom text-white rounded-15 font-weight-bold text-center p-2">
                                 $200.00
                              </p>
                           </div>
                           <div className="row flex-item mt-2">
                              <p className="col-5 btn rounded-15 btn-dark maincontent-size mr-4" id="cancelled">
                                 Cancelled
                              </p>
                              <p className="col-1"></p>

                              <p className="col-5 btn rounded-15 btn-success font-weight-bold maincontent-size ml-2">
                                 Buy again
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-1"></div>
         </div>
      </div>
   );
}

export default OrderManagementCus;
