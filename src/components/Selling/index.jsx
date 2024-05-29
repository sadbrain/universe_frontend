import React, { useState, useEffect } from 'react';
import { Rate, Card } from 'antd';
import './index.css'; // Import CSS tùy chỉnh của bạn
import { BASE_URL, vAPI, BE_URL } from '~/enums/core';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const { Meta } = Card;

const Selling = () => {
   const navigate = useNavigate();
   const [products, setProducts] = useState([]);
   useEffect(() => {
      getProducts();
   }, []);
   const handleCardClick = (cateSlug, cateId, proSlug, proId) => {
      navigate(`/detail/${cateSlug}-${cateId}/${proSlug}-${proId}`);
   };
   const getProducts = async () => {
      const url = BASE_URL + vAPI + 'products/get-best-seller-products';
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
   // Hàm này sẽ rút gọn hoặc xuống dòng tên sản phẩm nếu nó quá dài
   const truncateProductName = (name, maxLength) => {
      if (name.length > maxLength) {
         return name.slice(0, maxLength) + '...';
      }
      return name;
   };
   return (
      <div className="selling-container">
         <h3 style={{ color: '#ff6699', fontSize: '60px', margin: '30px 0 10px' }}>Best Selling Product </h3>
         <div className="d-flex flex-wrap">
            {products.map((p) => {
               let rowPrice = p.price;
               let discountPrice = 0;
               if (p.discount?.end_date) {
                  const discountEndDate = new Date(p.discount.end_date);
                  const now = new Date();
                  if (discountEndDate.getTime() >= now.getTime()) {
                     discountPrice = rowPrice - (rowPrice * p.discount.price) / 100;
                  }
               }

               return (
                  <Card
                     onClick={() => {
                        handleCardClick(p.category?.slug, p.category?.id, p.slug, p.id);
                     }}
                     key={p.id}
                     className="card-container"
                     style={{ width: 350, fontSize: '20px' }}
                     cover={
                        <img
                           alt="product"
                           src={
                              p.thumbnail.includes('https://via.placeholder.com')
                                 ? p.thumbnail
                                 : BE_URL + 'images/product/' + p.thumbnail
                           }
                           className="product-image"
                        />
                     }
                  >
                     <Meta
                        title={
                           <div>
                              <div
                                 style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '20px',
                                 }}
                              >
                                 <span style={{ flex: 1 }}>{truncateProductName(p.name, 20)}</span>
                                 <Rate
                                    disabled
                                    defaultValue={5}
                                    style={{ color: '#ffc107', fontSize: '14px', marginLeft: '10px' }}
                                 />
                              </div>
                              <div style={{ marginTop: '5px', textAlign: 'left' }}>
                                 <span>({p.rating}) Customer service</span>
                              </div>
                           </div>
                        }
                        description={
                           <div>
                              <div
                                 style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '8px',
                                 }}
                              >
                                 {discountPrice === 0 ? (
                                    <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                                       {rowPrice.toFixed(2)}$
                                    </span>
                                 ) : (
                                    <>
                                       <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                                          {discountPrice.toFixed(2)}$
                                       </span>
                                       <span
                                          className=""
                                          style={{ color: 'red', marginLeft: '', textDecoration: 'line-through 2px' }}
                                       >
                                          {rowPrice.toFixed(2)}$
                                       </span>
                                    </>
                                 )}
                              </div>
                           </div>
                        }
                     />
                  </Card>
               );
            })}
         </div>
      </div>
   );
};

export default Selling;
