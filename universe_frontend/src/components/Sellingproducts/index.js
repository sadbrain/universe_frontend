import React, { useLayoutEffect } from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function SellingProducts() {
  return (
    <section className="product_main mb-5">
    <h3 className="px-4 py-2 bg-gray-200">SELLING PRODUCTS</h3>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <article className="product_info border border-gray-300 rounded-lg overflow-hidden">
            <a className="d-block" href="#">
              <div className="relative">
                <div className="product_image">
                  <img src="./images/Slider2.jpg" alt="Fashion Product Image" className="w-full" />
                </div>
                <div className="product_details p-3 bg-white">
                  <a href="#" className="text-gray-800">
                    <h5 className="font-bold">Product Name</h5>
                  </a>
                  <p className="price-container">
                    <span className="discounted-price text-red-600 font-bold">Discounted Price</span>
                    <span className="unit">VND</span>
                    <span className="original-price text-gray-600 line-through">Original Price</span>
                    <span className="unit">VND</span>
                  </p>
                  <div className="product_action">
                    <div className="star_rating flex items-center">
                      {/* <FaStar aria-label="Star rating" className="text-yellow-500" />
                      <FaStar aria-label="Star rating" className="text-yellow-500" />
                      <FaStar aria-label="Star rating" className="text-yellow-500" />
                      <FaStar aria-label="Star rating" className="text-yellow-500" />
                      <FaStar aria-label="Star rating" className="text-yellow-500" /> */}
                    </div>
                    <h6 className="quantity">Quantity sold</h6>
                  </div>
                </div>
              </div>
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
  );
}



export default SellingProducts;