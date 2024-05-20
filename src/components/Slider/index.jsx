import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './index.css'; // đảm bảo bạn đã import CSS của Ant Design

const contentStyle = {
   height: '300px', // Chiều cao của banner
   color: '#fff',
   textAlign: 'center',
   background: '#364d79',
};

const imgContainerStyle = {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '100%',
};

const imgStyle = {
   width: '100%',
   height: '100%',
   objectFit: 'cover',
};

const arrowStyle = {
   position: 'absolute',
   top: '50%',
   transform: 'translateY(-50%)',
   zIndex: 1,
   fontSize: '24px',
   color: '#fff',
   background: 'rgba(0, 0, 0, 0.5)',
   borderRadius: '50%',
   cursor: 'pointer',
   padding: '10px',
   margin: '0 10px',
   transition: 'background 0.3s ease',
};

const leftArrowStyle = {
   ...arrowStyle,
   left: '10px',
};

const rightArrowStyle = {
   ...arrowStyle,
   right: '10px',
};

const App = () => {
   const carouselRef = useRef(null);
   const [currentSlide, setCurrentSlide] = useState(0);

   const handlePrev = () => {
      carouselRef.current?.prev();
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
   };

   const handleNext = () => {
      carouselRef.current?.next();
      setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
   };

   return (
      <div className="container" style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: 'auto' }}>
         <Carousel
            ref={carouselRef}
            afterChange={(index) => setCurrentSlide(index)}
            autoplay
            autoplaySpeed={3000} // Chuyển đổi mỗi 3 giây
         >
            <div style={contentStyle}>
               <div style={imgContainerStyle}>
                  <img src="./images/Slider1.jpg" alt="Slide 1" style={imgStyle} />
               </div>
            </div>
            <div style={contentStyle}>
               <div style={imgContainerStyle}>
                  <img src="./images/Slider2.jpg" alt="Slide 2" style={imgStyle} />
               </div>
            </div>
            <div style={contentStyle}>
               <div style={imgContainerStyle}>
                  <img src="./images/Slider4.jpg" alt="Slide 3" style={imgStyle} />
               </div>
            </div>
         </Carousel>
         <div
            style={leftArrowStyle}
            onClick={handlePrev}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)')}
         >
            <LeftOutlined />
         </div>
         <div
            style={rightArrowStyle}
            onClick={handleNext}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)')}
         >
            <RightOutlined />
         </div>
      </div>
   );
};

export default App;
