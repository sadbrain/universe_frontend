import React from 'react';
import { Rate, Card } from 'antd';
import './index.css'; // Import CSS tùy chỉnh của bạn

const { Meta } = Card;

const App = () => {
   const productName = 'This is a very long product name that needs to be truncated or wrapped';

   // Hàm này sẽ rút gọn hoặc xuống dòng tên sản phẩm nếu nó quá dài
   const truncateProductName = (name, maxLength) => {
      if (name.length > maxLength) {
         return name.slice(0, maxLength) + '...';
      }
      return name;
   };

   return (
      <div className="selling-container">
         <h3 style={{ color: '#ff6699', fontSize: '60px', margin: '30px 0 10px' }}>Selling Product</h3>
         <div className="d-flex flex-wrap">
            <Card
               className="card-container"
               style={{ width: 350, fontSize: '20px' }}
               cover={<img alt="product" src="./images/Slider1.jpg" className="product-image" />}
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
                           <span style={{ flex: 1 }}>{truncateProductName(productName, 20)}</span>
                           <Rate
                              disabled
                              defaultValue={5}
                              style={{ color: '#ffc107', fontSize: '14px', marginLeft: '10px' }}
                           />
                        </div>
                        <div style={{ marginTop: '5px', textAlign: 'left' }}>
                           <span>(4.1k) Customer service</span>
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
                           <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                              100$
                           </span>
                           <span
                              className=""
                              style={{ color: 'red', marginLeft: '', textDecoration: 'line-through 2px' }}
                           >
                              200$
                           </span>
                        </div>
                     </div>
                  }
               />
            </Card>
            <Card
               className="card-container"
               style={{ width: 350, fontSize: '20px' }}
               cover={<img alt="product" src="./images/Slider1.jpg" className="product-image" />}
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
                           <span style={{ flex: 1 }}>{truncateProductName(productName, 20)}</span>
                           <Rate
                              disabled
                              defaultValue={5}
                              style={{ color: '#ffc107', fontSize: '14px', marginLeft: '10px' }}
                           />
                        </div>
                        <div style={{ marginTop: '5px', textAlign: 'left' }}>
                           <span>(4.1k) Customer service</span>
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
                           <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                              100$
                           </span>
                           <span
                              className=""
                              style={{ color: 'red', marginLeft: '', textDecoration: 'line-through 2px' }}
                           >
                              200$
                           </span>
                        </div>
                     </div>
                  }
               />
            </Card>
            <Card
               className="card-container"
               style={{ width: 350, fontSize: '20px' }}
               cover={<img alt="product" src="./images/Slider1.jpg" className="product-image" />}
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
                           <span style={{ flex: 1 }}>{truncateProductName(productName, 20)}</span>
                           <Rate
                              disabled
                              defaultValue={5}
                              style={{ color: '#ffc107', fontSize: '14px', marginLeft: '10px' }}
                           />
                        </div>
                        <div style={{ marginTop: '5px', textAlign: 'left' }}>
                           <span>(4.1k) Customer service</span>
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
                           <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                              100$
                           </span>
                           <span
                              className=""
                              style={{ color: 'red', marginLeft: '', textDecoration: 'line-through 2px' }}
                           >
                              200$
                           </span>
                        </div>
                     </div>
                  }
               />
            </Card>
            <Card
               className="card-container"
               style={{ width: 350, fontSize: '20px' }}
               cover={<img alt="product" src="./images/Slider1.jpg" className="product-image" />}
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
                           <span style={{ flex: 1 }}>{truncateProductName(productName, 20)}</span>
                           <Rate
                              disabled
                              defaultValue={5}
                              style={{ color: '#ffc107', fontSize: '14px', marginLeft: '10px' }}
                           />
                        </div>
                        <div style={{ marginTop: '5px', textAlign: 'left' }}>
                           <span>(4.1k) Customer service</span>
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
                           <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                              100$
                           </span>
                           <span
                              className=""
                              style={{ color: 'red', marginLeft: '', textDecoration: 'line-through 2px' }}
                           >
                              200$
                           </span>
                        </div>
                     </div>
                  }
               />
            </Card>
            <Card
               className="card-container"
               style={{ width: 350, fontSize: '20px' }}
               cover={<img alt="product" src="./images/Slider1.jpg" className="product-image" />}
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
                           <span style={{ flex: 1 }}>{truncateProductName(productName, 20)}</span>
                           <Rate
                              disabled
                              defaultValue={5}
                              style={{ color: '#ffc107', fontSize: '14px', marginLeft: '10px' }}
                           />
                        </div>
                        <div style={{ marginTop: '5px', textAlign: 'left' }}>
                           <span>(4.1k) Customer service</span>
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
                           <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                              100$
                           </span>
                           <span
                              className=""
                              style={{ color: 'red', marginLeft: '', textDecoration: 'line-through 2px' }}
                           >
                              200$
                           </span>
                        </div>
                     </div>
                  }
               />
            </Card>
            <Card
               className="card-container"
               style={{ width: 350, fontSize: '20px' }}
               cover={<img alt="product" src="./images/Slider1.jpg" className="product-image" />}
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
                           <span style={{ flex: 1 }}>{truncateProductName(productName, 20)}</span>
                           <Rate
                              disabled
                              defaultValue={5}
                              style={{ color: '#ffc107', fontSize: '14px', marginLeft: '10px' }}
                           />
                        </div>
                        <div style={{ marginTop: '5px', textAlign: 'left' }}>
                           <span>(4.1k) Customer service</span>
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
                           <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                              100$
                           </span>
                           <span
                              className=""
                              style={{ color: 'red', marginLeft: '', textDecoration: 'line-through 2px' }}
                           >
                              200$
                           </span>
                        </div>
                     </div>
                  }
               />
            </Card>
            <Card
               className="card-container"
               style={{ width: 350, fontSize: '20px' }}
               cover={<img alt="product" src="./images/Slider1.jpg" className="product-image" />}
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
                           <span style={{ flex: 1 }}>{truncateProductName(productName, 20)}</span>
                           <Rate
                              disabled
                              defaultValue={5}
                              style={{ color: '#ffc107', fontSize: '14px', marginLeft: '10px' }}
                           />
                        </div>
                        <div style={{ marginTop: '5px', textAlign: 'left' }}>
                           <span>(4.1k) Customer service</span>
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
                           <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                              100$
                           </span>
                           <span
                              className=""
                              style={{ color: 'red', marginLeft: '', textDecoration: 'line-through 2px' }}
                           >
                              200$
                           </span>
                        </div>
                     </div>
                  }
               />
            </Card>
            <Card
               className="card-container"
               style={{ width: 350, fontSize: '20px' }}
               cover={<img alt="product" src="./images/Slider1.jpg" className="product-image" />}
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
                           <span style={{ flex: 1 }}>{truncateProductName(productName, 20)}</span>
                           <Rate
                              disabled
                              defaultValue={5}
                              style={{ color: '#ffc107', fontSize: '14px', marginLeft: '10px' }}
                           />
                        </div>
                        <div style={{ marginTop: '5px', textAlign: 'left' }}>
                           <span>(4.1k) Customer service</span>
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
                           <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                              100$
                           </span>
                           <span
                              className=""
                              style={{ color: 'red', marginLeft: '', textDecoration: 'line-through 2px' }}
                           >
                              200$
                           </span>
                        </div>
                     </div>
                  }
               />
            </Card>
         </div>
      </div>
   );
};

export default App;
