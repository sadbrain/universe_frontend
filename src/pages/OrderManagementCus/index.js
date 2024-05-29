import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react';
import { RightOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import './index.css';
import Cancelled from './Cancelled';
import Ordered from './Ordered';
import Ordering from './Ordering';
function OrderManagementCus() {
   const [activeComponent, setActiveComponent] = useState([]);
   const [activeComponentElement, setActiveComponentElement] = useState();
   useEffect(() => {
      if (activeComponent) {
         setActiveComponentElement(<div className="row">{activeComponent}</div>);
      } else {
         setActiveComponentElement(null);
      }
   }, [activeComponent]);

   const handleButtonClick = (component) => {
      setActiveComponent(component);
   };
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
            <button
               className="color-custom btn-hover h2 active font-weight-bold "
               id="allButton"
               onClick={() => handleButtonClick([<Cancelled />, <Ordered />, <Ordering />])}
            >
               All
            </button>
            <button
               className="color-custom btn-hover h2 font-weight-bold"
               onClick={() => handleButtonClick([<Cancelled />])}
            >
               Cancelled
            </button>
            <button
               className="color-custom btn-hover h2 font-weight-bold"
               onClick={() => handleButtonClick([<Ordered />])}
            >
               Ordered
            </button>
            <button
               className="color-custom btn-hover h2 font-weight-bold"
               onClick={() => handleButtonClick([<Ordering />])}
            >
               Ordering
            </button>
         </div>
         {activeComponentElement}
      </div>
   );
}

export default OrderManagementCus;
