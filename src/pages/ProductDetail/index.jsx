import React, { useState } from 'react';
import { Card, Button as AntButton, Radio, Typography, Divider, Rate, InputNumber } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import the custom CSS

const { Title, Text } = Typography;

const ProductPage = () => {
   const [size, setSize] = useState(37);
   const [color, setColor] = useState('white');
   const [quantity, setQuantity] = useState(1);

   const handleSizeChange = (e) => {
      setSize(e.target.value);
   };

   const handleColorChange = (e) => {
      setColor(e.target.value);
   };

   const handleQuantityChange = (value) => {
      setQuantity(value);
   };

   const handleDecreaseQuantity = () => {
      if (quantity > 1) {
         setQuantity(quantity - 1);
      }
   };

   const handleIncreaseQuantity = () => {
      if (quantity < 10) {
         setQuantity(quantity + 1);
      }
   };

   return (
      <div className="container mt-5">
         <Card className="p-4">
            <div className="d-flex">
               <div className="image-container">
                  <img src="/images/Slider1.jpg" alt="Product" className="img-fluid product-image" />
               </div>
               <div className="content-container">
                  <Title level={4} className="product-title">
                     [Có sẵn] Dép Đi Học Siêu Nhẹ Hình Mặt Cười Siêu Cute Dễ Cao Đi Êm Chân
                  </Title>
                  <div className="price-rating-container">
                     <Text strong className="h4 text-danger price">
                        300.000₫
                     </Text>
                     <div className="rating">
                        <Rate disabled defaultValue={5} />
                        <Text className="ml-3 rating-text">4.9/5 đánh giá | 100 đã mua</Text>
                     </div>
                  </div>
                  <Divider />

                  <div className="mb-3">
                     <Text strong>Size:</Text>
                     <Radio.Group onChange={handleSizeChange} value={size} className="d-block">
                        <Radio.Button value={37}>37</Radio.Button>
                        <Radio.Button value={38}>38</Radio.Button>
                        <Radio.Button value={39}>39</Radio.Button>
                        <Radio.Button value={40}>40</Radio.Button>
                     </Radio.Group>
                  </div>

                  <div className="mb-3">
                     <Text strong>Color:</Text>
                     <Radio.Group onChange={handleColorChange} value={color} className="d-block">
                        <Radio.Button value="white">white</Radio.Button>
                        <Radio.Button value="blue">blue</Radio.Button>
                        <Radio.Button value="black">black</Radio.Button>
                        <Radio.Button value="pink">pink</Radio.Button>
                     </Radio.Group>
                  </div>

                  <div className="mb-3">
                     <Text strong>Quantity:</Text>
                     <div className="quantity-control">
                        <button className="quantity-button" onClick={handleDecreaseQuantity}>
                           -
                        </button>
                        <InputNumber
                           className="quantity-input"
                           style={{ height: '36px' }}
                           min={1}
                           max={10}
                           value={quantity}
                           onChange={handleQuantityChange}
                        />
                        <button className="quantity-button" onClick={handleIncreaseQuantity}>
                           +
                        </button>
                     </div>
                  </div>

                  <div className="mb-3 button-container">
                     <AntButton type="primary" className="mr-2 add-to-cart-button">
                        Add to cart
                     </AntButton>
                     <AntButton type="danger" className="buy-now-button">
                        Buy Now
                     </AntButton>
                  </div>
                  <Divider />
               </div>
            </div>
         </Card>
         <Title level={5} style={{ color: '#ff6699', fontSize: '30px' }}>
            Product description
         </Title>
         <Text className="product-description">
            Dép đúng size, vì size đôi nên không thể vừa khít tất cả các chân, các bạn nên lựa chọn theo thói quen đi
            dép của cá nhân ạ.
            <br />
            Đế dép dày khoảng 3.5cm (đo bằng tay).
            <br />
            Đế dép thiết kế chống trơn, chất liệu EVA hàng loại 1 thân thiện với môi trường.
            <br />
            Dép đang hot lắm các bạn thích màu và size nào order luôn không hết màu, hết size ạ.
            <br />
            Vì là size đôi nên có thể rộng hoặc chật hơn so với chân xíu các bạn lựa chọn theo thói quen thích đi rộng,
            chật của mỗi cá nhân ạ.
         </Text>
      </div>
   );
};

export default ProductPage;
