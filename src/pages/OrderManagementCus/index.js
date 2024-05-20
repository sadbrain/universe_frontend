import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react';
import { RightOutlined } from '@ant-design/icons';
function OrderManagementCus() {
   // const [productOrdering, setProductOrdering] = useState([]);
   // const [productOrdered, setProductOrdered] = useState([]);
   // const [productCancelled, setProductCancelled] = useState([]);

   // const CheckoutOrdering = async () => {
   //    try {
   //       localStorage.setItem ("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTU5MTg2OTQsImV4cCI6MTcxNTkyMjI5NCwibmJmIjoxNzE1OTE4Njk0LCJqdGkiOiIzellQdlNoYWltVDIyMUhZIiwic3ViIjoyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.7MjHgGKXC1T-CCWfG77McOzA465Oj9F101uPkPQHgto");
   //       const response = await fetch(`http://127.0.0.1:8000/api/v1/orders/customer/shipped`, {
   //          method: 'GET',
   //          headers: {
   //             'Content-Type': 'application/json',
   //             'Authorization': `Bearer ${localStorage.getItem('token')}`,
   //          },
   //          body: JSON.stringify({
   //          }),
   //       });
   //       const data = await response.json();
   //       setProductOrdering(data.data);
   //    } catch (error) {
   //       console.log('Error fetching product ordering: '.error);
   //    }
   // };

   // const CheckoutOrdered = async () => {
   //    try {
   //       const response = await fetch(``);
   //       const data = await response.json();
   //       setProductOrdered(data.data);
   //    } catch (error) {
   //       console.log('Error fetching product ordering: '.error);
   //    }
   // };

   // const CheckoutCancelled = async () => {
   //    try {
   //       const response = await fetch(``);
   //       const data = await response.json();
   //       setProductCancelled(data.data);
   //    } catch (error) {
   //       console.log('Error fetching product ordering: '.error);
   //    }
   // };
   // useEffect(() => {
   //    CheckoutOrdering();
   //    CheckoutOrdered();
   //    CheckoutCancelled();
   // }, []);

   // function hoverButton(button) {
   //    var allButton = document.getElementById('allButton');

   //    if (button === allButton) {
   //       allButton.classList.add('active');
   //    } else {
   //       allButton.classList.remove('active');
   //    }
   // }
   return (
      <div className="container">
         <h1 className="title-size text-center">
            <b>Order Summary</b>
         </h1>
         <div className="text-center flex-item ">
            <h1 className="font-weight-bold">Cart </h1>
            <RightOutlined className='color-custom'/>
            <h1 className="color-custom font-weight-bold"> Checkout</h1>
         </div>
         <div className="text-center flex-item m-5 align-items-center ">
            <button className="color-custom btn-hover h2 active font-weight-bold" id="allButton">
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
                           <p>Ultra-Light School Slippers for introverts</p>
                           <p>Size: 37</p>
                           <p>Color: White</p>
                           <p>Quality: 01</p>
                        </div>
                        <div className="col-2">
                           <b>Price: $400.00</b>
                        </div>
                        <div className="col-5">
                           <p className="color-custom font-weight-bold font-italic">Cancelled</p>
                           <p className="font-weight-bold">Discount: -20%</p>
                           <div className="row flex-item ">
                              <p className="col-6 font-weight-bold">Total Price: </p>
                              <p className="col-5 bg-custom text-white rounded-15 font-weight-bold text-center p-2">
                                 $200.00
                              </p>
                           </div>
                           <div className="row flex-item mt-2">
                              <p className="col-6"></p>
                              <p className="col-5 btn rounded-15 btn-success font-weight-bold maincontent-size">
                                 Buy again
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-1"></div>
            {/*  */}

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
                           <p>Ultra-Light School Slippers for introverts</p>
                           <p>Size: 37</p>
                           <p>Color: White</p>
                           <p>Quality: 01</p>
                        </div>
                        <div className="col-2">
                           <b>Price: $400.00</b>
                        </div>
                        <div className="col-5">
                           <p className="color-custom font-weight-bold font-italic">Delivered</p>
                           <p className="font-weight-bold">Discount: -20%</p>
                           <div className="row flex-item ">
                              <p className="col-6 font-weight-bold">Total Price: </p>
                              <p className="col-5 bg-custom text-white rounded-15 font-weight-bold text-center p-2">
                                 $200.00
                              </p>
                           </div>
                           <div className="row flex-item mt-2 ">
                              <p className="col-6"></p>
                              <p className="col-5 btn rounded-15 btn-success font-weight-bold maincontent-size">
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
                           <p>Ultra-Light School Slippers for introverts</p>
                           <p>Size: 37</p>
                           <p>Color: White</p>
                           <p>Quality: 01</p>
                        </div>
                        <div className="col-2">
                           <b>Price: $400.00</b>
                        </div>
                        <div className="col-5">
                           <p className="color-custom font-weight-bold font-italic">Shipped</p>
                           <p className="font-weight-bold">Discount: -20%</p>
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
