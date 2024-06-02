import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RightOutlined } from '@ant-design/icons';
import './index.css';
import Cancelled from './Cancelled';
import Ordered from './Ordered';
import Ordering from './Ordering';

function OrderManagementCus() {
  const [activeComponents, setActiveComponents] = useState([]);
  const [activeComponentsElement, setActiveComponentsElement] = useState(null);
  const [activeButton, setActiveButton] = useState('allButton');

  const handleButtonClick = (components, buttonId) => {
    setActiveComponents(components);
    setActiveButton(buttonId);
  };

  useEffect(() => {
    handleButtonClick([<Cancelled />, <Ordered />, <Ordering />], 'allButton');
  }, []);

  useEffect(() => {
    if (activeComponents.length > 0) {
      setActiveComponentsElement(
        <div className="row">
          {activeComponents.map((Component, index) => (
            <div key={index}>{Component}</div>
          ))}
        </div>
      );
    } else {
      setActiveComponentsElement(null);
    }
  }, [activeComponents]);

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
          className={`color-custom btn-hover h2 font-weight-bold ${
            activeButton === 'allButton' ? 'active' : ''
          }`}
          id="allButton"
          onClick={() => handleButtonClick([<Cancelled />, <Ordered />, <Ordering />], 'allButton')}
        >
          All
        </button>
        <button
          className={`color-custom btn-hover h2 font-weight-bold ${
            activeButton === 'cancelledButton' ? 'active' : ''
          }`}
          id="cancelledButton"
          onClick={() => handleButtonClick([<Cancelled />], 'cancelledButton')}
        >
          Cancelled
        </button>
        <button
          className={`color-custom btn-hover h2 font-weight-bold ${
            activeButton === 'orderedButton' ? 'active' : ''
          }`}
          id="orderedButton"
          onClick={() => handleButtonClick([<Ordered />], 'orderedButton')}
        >
          Ordered
        </button>
        <button
          className={`color-custom btn-hover h2 font-weight-bold ${
            activeButton === 'orderingButton' ? 'active' : ''
          }`}
          id="orderingButton"
          onClick={() => handleButtonClick([<Ordering />], 'orderingButton')}
        >
          Ordering
        </button>
      </div>
      {activeComponentsElement}
    </div>
  );
}

export default OrderManagementCus;