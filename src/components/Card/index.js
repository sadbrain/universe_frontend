import React from 'react';
import { Rate, Card } from 'antd';
import './index.css';
import { useNavigate } from 'react-router-dom';

export function Cards(props) {
   const { productName, rankComments, currentPrice, oldPrice, src, categorySlug, categoryId, product, onClick } = props;
   const { Meta } = Card;
   const navigate = useNavigate();

   const truncateProductName = (name, maxLength) => {
      if (name.length > maxLength) {
         return name.slice(0, maxLength) + '...';
      }
      return name;
   };
   const handleCardClick = () => {
      onClick(product);
   };

   return (
      <div className="card-container col-3 mb-4" onClick={handleCardClick} >
         <Card cover={<img alt="product" src={src} className="product-image " />}>
            <Meta
               title={
                  <div>
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                        }}
                        className="maincontent-size"
                     >
                        <span style={{ flex: 1 }}>{truncateProductName(productName, 5)}</span>
                        <Rate disabled defaultValue={4} style={{ color: '#ffc107', fontSize: '14px' }} />
                     </div>
                     <div style={{ marginTop: '5px' }}>
                        <span className="subcontent-size">{truncateProductName(rankComments, 15)}</span>
                     </div>
                  </div>
               }
               description={
                  <div>
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                           marginBottom: '8px',
                        }}
                     >
                        <span style={{ fontWeight: 'bold', color: '#ff6699' }}>{currentPrice}$</span>
                        <span
                           style={{
                              color: 'red',
                              paddingLeft: '60px',
                              textDecoration: 'line-through 2px',
                           }}
                        >
                           {oldPrice}$
                        </span>
                     </div>
                  </div>
               }
            />
         </Card>
      </div>
   );
}
