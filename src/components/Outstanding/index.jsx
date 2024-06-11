import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'antd';
// import 'antd/dist/antd.css'; // đảm bảo bạn đã import CSS của Ant Design
import './index.css'; // import CSS tùy chỉnh của bạn
import { BASE_URL, vAPI, BE_URL } from '~/enums/core';
import { Link, useNavigate } from 'react-router-dom';

const Outstanding = () => {
   const carouselRef = useRef(null);
   const navigate = useNavigate();
   const [products, setProducts] = useState([]);
   useEffect(() => {
      getProducts();
   }, []);
   const handleCardClick = (cateSlug, cateId, proSlug, proId) => {
      navigate(`/detail/${cateSlug}-${cateId}/${proSlug}-${proId}`);
   };
   const getProducts = async () => {
      const url = BASE_URL + vAPI + 'products/get-best-rating-products';
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         setProducts(responseObj.data);
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   return (
      <div className="custom-container">
         <div className="custom-text">
            <h3>Outstanding products</h3>
            <p>
               Welcome to our premier fashion store! Explore uniqueness and luxury in standout products from Gucci,
               Adidas, and Nike. Be the first to experience new styles and sophistication.
            </p>
            <button className="buy-now-button">Buy Now</button>
         </div>
         <div className="custom-carousel-container">
            <Carousel
               ref={carouselRef}
               autoplay
               autoplaySpeed={3000} // Chuyển đổi mỗi 3 giây
            >
               {products.map((p) => (
                  <div
                     className="custom-carousel-content"
                     onClick={() => {
                        handleCardClick(p.category?.slug, p.category?.id, p.slug, p.id);
                     }}
                     key={p.id}
                  >
                     <div className="custom-carousel-img-container">
                        <img
                           src={p.thumbnail.includes('https://placehold.co') ? p.thumbnail : BE_URL + p.thumbnail}
                           alt="Slide 1"
                           className="custom-carousel-img"
                        />
                     </div>
                  </div>
               ))}
            </Carousel>
         </div>
      </div>
   );
};

export default Outstanding;
