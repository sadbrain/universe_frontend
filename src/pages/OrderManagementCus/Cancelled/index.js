import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react';
import { RightOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import '../index.css';
import axios from 'axios';
function Cancelled() {
   const [orderCancelleds, setOrderCancelled] = useState([]);
   useEffect(() => {
      try {
         localStorage.setItem(
            'token',
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTY5NzQxNDYsImV4cCI6MTcxNjk3Nzc0NiwibmJmIjoxNzE2OTc0MTQ2LCJqdGkiOiI5b1NBTVBQUHM2UVdkaFBxIiwic3ViIjo1NSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9._rh1zodoSsZuDQqfT4dDkKu3eBH01MB0-80XmjEdngY',
         );
         const token = localStorage.getItem('token');
         const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/v1',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const orderCancelled = async () => {
            const res = await axiosInstance.get('/orders/customer/cancelled');
            const data = res.data.data;
            setOrderCancelled(data);
            console.log('Data', orderCancelleds);
         };
         orderCancelled();
      } catch (error) {
         console.error(error);
      }
   }, []);
   return Object.values(orderCancelleds).map((orderCancelled) => (
      <div className="row">
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
                        <p className="mb-2 font-weight-bold">{orderCancelled.name}</p>
                        <p className="mb-2">Size: 37</p>
                        <p className="mb-2">Color: White</p>
                        <p className="mb-2">Quality: {orderCancelled.order_total}</p>
                     </div>
                     <div className="col-2">
                        <p>Price: ${orderCancelled.order_total}</p>
                     </div>
                     <div className="col-5">
                        <p className="mb-2 color-custom font-weight-bold ">
                           <i>{orderCancelled.order_status}</i>
                        </p>
                        <p className=" mb-2 font-weight-bold">Discount: -20%</p>
                        <div className="row flex-item ">
                           <p className="col-6 font-weight-bold">Total Price: </p>
                           <p className="col-5 bg-custom text-white rounded-15 font-weight-bold text-center p-2">
                              ${orderCancelled.order_total}
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
   ));
}

export default Cancelled;
