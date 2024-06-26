import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import '../index.css';
import axios from 'axios';
function Cancelled() {
   const [orderCancelleds, setOrderCancelled] = useState([]);
   useEffect(() => {
      try {
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
            console.log('Cancelled: ', data);
         };
         orderCancelled();
      } catch (error) {
         console.error(error);
      }
   }, []);
   return Object.values(orderCancelleds).map((orderCancelled) => (
      <div className="row" key={orderCancelled.id}>
         <div className="col-1"></div>
         <div className="col-10 custom-border mb-5">
         <div style={{position: "relative"} } className="row align-items-center">
               <div className="col-8">
                  {orderCancelled.order_details.map((orderDetail, index) => (
                     <div className="row align-items-center" key={index}>
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
                                 <p className="mb-2 font-weight-bold">{orderCancelled.name}</p>
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
               <p className='vertical-line' />
               <div className="col-4">
                  <p className="mb-2 color-custom font-weight-bold">
                     <i>{orderCancelled.order_status}</i>
                  </p>
                  <div className="row flex-item m-2">
                     <p className="col-6 font-weight-bold">Total Price: </p>
                     <p className="col-5 bg-custom text-white rounded-15 font-weight-bold text-center p-2">
                        ${orderCancelled.order_total}
                     </p>
                  </div>
                  <div className="row flex-item m-2">
                     <p className="col-5 ">
                     </p>
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

export default Cancelled;
