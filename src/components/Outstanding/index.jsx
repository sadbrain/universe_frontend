import React, { useRef } from 'react';
import { Carousel } from 'antd';
// import 'antd/dist/antd.css'; // đảm bảo bạn đã import CSS của Ant Design
import './index.css'; // import CSS tùy chỉnh của bạn

const App = () => {
   const carouselRef = useRef(null);

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
               <div className="custom-carousel-content">
                  <div className="custom-carousel-img-container">
                     <img src="./images/Slider1.jpg" alt="Slide 1" className="custom-carousel-img" />
                  </div>
               </div>
               <div className="custom-carousel-content">
                  <div className="custom-carousel-img-container">
                     <img src="./images/Slider2.jpg" alt="Slide 2" className="custom-carousel-img" />
                  </div>
               </div>
               <div className="custom-carousel-content">
                  <div className="custom-carousel-img-container">
                     <img src="./images/Slider4.jpg" alt="Slide 3" className="custom-carousel-img" />
                  </div>
               </div>
            </Carousel>
         </div>
      </div>
   );
};

export default App;
