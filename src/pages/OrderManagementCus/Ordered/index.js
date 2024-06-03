import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import '../index.css';
import axios from 'axios';
function Ordered() {
   const [orderOrdered, setOrdered] = useState([]);
   useEffect(() => {
      try {
         localStorage.setItem(
            'token',
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTczODc4ODMsImV4cCI6MTcxNzM5MTQ4MywibmJmIjoxNzE3Mzg3ODgzLCJqdGkiOiJaOFNzSmY4WVJ3OFR5TWRoIiwic3ViIjoyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.aOpElxZaXyAmZQYvib5X0OhXFhlStidChrlamRTlark',
         );
         const token = localStorage.getItem('token');
         const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/v1',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const Ordered = async () => {
            const res = await axiosInstance.get('/orders/customer/ordered');
            const data = res.data.data;
            setOrdered(data);
            console.log('orderOrdered', orderOrdered);
         };
         Ordered();
      } catch (error) {
         console.error(error);
      }
   }, []);
   return Object.values(orderOrdered).map((orderCancelled) => (
      <div className="row" key={orderCancelled.id}>
         <div className="col-1"></div>
         <div className="col-10 custom-border mb-5">
            {orderCancelled.order_details.map((orderDetail, index) => (
               <div className="row align-items-center" key={index}>
                  <div className="col-3">
                     <img
                        className="w-100 h-100"
                        src="https://hoaigiangshop.com/wp-content/uploads/2021/03/quat-co-trang-tq-2.jpg"
                        alt=""
                     />
                  </div>
                  <div className="col-9">
                     <div className="row maincontent-size">
                        <div className="col-7">
                           <p className="mb-2 font-weight-bold">{orderCancelled.name}</p>
                           <p className="mb-2">Size: {orderDetail.size}</p>
                           <p className="mb-2">Color: {orderDetail.color}</p>
                           <p className="mb-2">Quantity: {orderDetail.quantity}</p>
                        </div>
                        <div className="col-2">
                           <p>Price: ${orderDetail.price}</p>
                        </div>
                        <div className="col-2"></div>
                     </div>
                  </div>
               </div>
            ))}
            <hr style={{ border: '3px solid red' }} />
            <div className="row maincontent-size">
               <div className="col-7"></div>
               <div className="col-5">
                  <p className="mb-2 color-custom font-weight-bold">
                     <i>{orderCancelled.order_status}</i>
                  </p>
                  <div className="row flex-item">
                     <p className="col-6 font-weight-bold">Total Price: </p>
                     <p className="col-5 bg-custom text-white rounded-15 font-weight-bold text-center p-2">
                        ${orderCancelled.order_total}
                     </p>
                  </div>
                  <div className="row flex-item mt-2">
                     <p className="col-5"></p>
                     <p className="col-1"></p>
                     <p className="col-5 btn rounded-15 btn-success font-weight-bold maincontent-size ml-2">
                        Buy again
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-1"></div>
      </div>
   ));
}

export default Ordered;
