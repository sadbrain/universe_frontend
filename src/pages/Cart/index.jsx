import React, { useState } from 'react';
import { Row, Col, Breadcrumb, Card, Typography, Input, Button } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined, EditOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './index.css';

const { Title, Text, Paragraph } = Typography;

const Cart = () => {
   const [quantity, setQuantity] = useState(1);
   const increaseQuantity = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
   };

   const decreaseQuantity = () => {
      if (quantity > 1) {
         setQuantity((prevQuantity) => prevQuantity - 1);
      }
   };

   const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (value >= 1) {
         setQuantity(value);
      }
   };

   return (
      <div className="cart-container">
         <div className="fs_product text-center mb-4">
            <Title level={1} className="cart-title">
               Cart
               <Breadcrumb separator={<RightOutlined className="breadcrumb-icon" />} className="breadcrumb">
                  <Breadcrumb.Item>
                     <Link to="/" className="breadcrumb-link-home">
                        Home
                     </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                     <Link
                        to="#"
                        className="breadcrumb-link-cart active"
                        style={{ textDecoration: 'none', display: 'inline' }}
                     >
                        Your shopping cart
                     </Link>
                  </Breadcrumb.Item>
               </Breadcrumb>
            </Title>
         </div>
         <div className="cart-content">
            <div className="fs_cart">
               <div className="cart-header">
                  <Row>
                     <Col span={1}></Col>
                     <Col span={9}>
                        <Text strong style={{ color: '#ff6699' }}>
                           Product
                        </Text>
                     </Col>
                     <Col span={6} className="text-center">
                        <Text strong style={{ color: '#ff6699' }}>
                           Price
                        </Text>
                     </Col>
                     <Col span={8} className="text-center">
                        <Text strong style={{ color: '#ff6699' }}>
                           Quantity
                        </Text>
                     </Col>
                  </Row>
               </div>
               <div className="all_cart">
                  <Card className="cart-item p-3 active my-2" style={{ position: 'relative' }}>
                     <Row className="p-2 w-100">
                        <Col span={1} className="d-flex justify-content-center align-content-center">
                           <input type="checkbox" className="select-cart" />
                        </Col>
                        <Col span={9} className="px-1">
                           <Row>
                              <div className="col-4">
                                 <img src="./images/Slider1.jpg" alt="Product Image" className="product-image" />
                              </div>
                              <div className="col-8 px-2">
                                 <div className="cart-item-info">
                                    <Paragraph>Product Name</Paragraph>
                                    <div>
                                       <span>
                                          Color: {'blue'}
                                          <div className="color-option" style={{ backgroundColor: '#000' }}></div>
                                       </span>
                                    </div>
                                    <div className="size">Size: M</div>
                                    <div className="price-info">
                                       <Paragraph>
                                          Price: <span className="price">100,00</span> <span className="unit">$</span>
                                       </Paragraph>
                                    </div>
                                 </div>
                              </div>
                           </Row>
                        </Col>
                        <Col span={6} className="cart-item-details">
                           <div className="cart-item-total">
                              <div className="product-price text-center ">
                                 <span className="total">100,00</span> $
                              </div>
                           </div>
                        </Col>
                        <Col span={8}>
                           <div className="cart-item-actions">
                              <div className="quantity-buttons mb-3 d-flex justify-content-center">
                                 <Button onClick={decreaseQuantity}>
                                    <MinusOutlined />
                                 </Button>
                                 <Input
                                    type="number"
                                    value={quantity}
                                    onChange={handleInputChange}
                                    className="quantity-input"
                                    min={1}
                                 />
                                 <Button onClick={increaseQuantity}>
                                    <PlusOutlined />
                                 </Button>
                              </div>
                              <div>
                                 {/* <a className="edit-cart" href="#">
                                    <EditOutlined />
                                 </a> */}
                                 <a href="#" className="d-flex justify-content-center">
                                    <DeleteOutlined
                                       style={{
                                          color: '#000',
                                          fontSize: '20px',
                                       }}
                                    />
                                 </a>
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </Card>
                  <Card className="cart-item p-3 active my-2" style={{ position: 'relative' }}>
                     <Row className="p-2 w-100">
                        <Col span={1} className="d-flex justify-content-center align-content-center">
                           <input type="checkbox" className="select-cart" />
                        </Col>
                        <Col span={9} className="px-1">
                           <Row>
                              <div className="col-4">
                                 <img src="./images/Slider1.jpg" alt="Product Image" className="product-image" />
                              </div>
                              <div className="col-8 px-2">
                                 <div className="cart-item-info">
                                    <Paragraph>Product Name</Paragraph>
                                    <div>
                                       <span>
                                          Color: {'blue'}
                                          <div className="color-option" style={{ backgroundColor: '#000' }}></div>
                                       </span>
                                    </div>
                                    <div className="size">Size: M</div>
                                    <div className="price-info">
                                       <Paragraph>
                                          Price: <span className="price">100,00</span> <span className="unit">$</span>
                                       </Paragraph>
                                    </div>
                                 </div>
                              </div>
                           </Row>
                        </Col>
                        <Col span={6} className="cart-item-details">
                           <div className="cart-item-total">
                              <div className="product-price text-center ">
                                 <span className="total">100,00</span> $
                              </div>
                           </div>
                        </Col>
                        <Col span={8}>
                           <div className="cart-item-actions">
                              <div className="quantity-buttons mb-3 d-flex justify-content-center">
                                 <Button onClick={decreaseQuantity}>
                                    <MinusOutlined />
                                 </Button>
                                 <Input
                                    type="number"
                                    value={quantity}
                                    onChange={handleInputChange}
                                    className="quantity-input"
                                    min={1}
                                 />
                                 <Button onClick={increaseQuantity}>
                                    <PlusOutlined />
                                 </Button>
                              </div>
                              <div>
                                 {/* <a className="edit-cart" href="#">
                                    <EditOutlined />
                                 </a> */}
                                 <a href="#" className="d-flex justify-content-center">
                                    <DeleteOutlined
                                       style={{
                                          color: '#000',
                                          fontSize: '20px',
                                       }}
                                    />
                                 </a>
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </Card>
                  <Card className="cart-item p-3 active my-2" style={{ position: 'relative' }}>
                     <Row className="p-2 w-100">
                        <Col span={1} className="d-flex justify-content-center align-content-center">
                           <input type="checkbox" className="select-cart" />
                        </Col>
                        <Col span={9} className="px-1">
                           <Row>
                              <div className="col-4">
                                 <img src="./images/Slider1.jpg" alt="Product Image" className="product-image" />
                              </div>
                              <div className="col-8 px-2">
                                 <div className="cart-item-info">
                                    <Paragraph>Product Name</Paragraph>
                                    <div>
                                       <span>
                                          Color: {'blue'}
                                          <div className="color-option" style={{ backgroundColor: '#000' }}></div>
                                       </span>
                                    </div>
                                    <div className="size">Size: M</div>
                                    <div className="price-info">
                                       <Paragraph>
                                          Price: <span className="price">100,00</span> <span className="unit">$</span>
                                       </Paragraph>
                                    </div>
                                 </div>
                              </div>
                           </Row>
                        </Col>
                        <Col span={6} className="cart-item-details">
                           <div className="cart-item-total">
                              <div className="product-price text-center ">
                                 <span className="total">100,00</span> $
                              </div>
                           </div>
                        </Col>
                        <Col span={8}>
                           <div className="cart-item-actions">
                              <div className="quantity-buttons mb-3 d-flex justify-content-center">
                                 <Button onClick={decreaseQuantity}>
                                    <MinusOutlined />
                                 </Button>
                                 <Input
                                    type="number"
                                    value={quantity}
                                    onChange={handleInputChange}
                                    className="quantity-input"
                                    min={1}
                                 />
                                 <Button onClick={increaseQuantity}>
                                    <PlusOutlined />
                                 </Button>
                              </div>
                              <div>
                                 {/* <a className="edit-cart" href="#">
                                    <EditOutlined />
                                 </a> */}
                                 <a href="#" className="d-flex justify-content-center">
                                    <DeleteOutlined
                                       style={{
                                          color: '#000',
                                          fontSize: '20px',
                                       }}
                                    />
                                 </a>
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </Card>
               </div>
            </div>
            <div className="spec_detail">
               <Paragraph className="specific">Payment Details</Paragraph>
               {/* <div className="total-detail"> */}
               <div className="row p-2">
                  <Paragraph className="col-8">Total Item Price</Paragraph>
                  <div
                     className="price-detail total-product-price col-4 text-end"
                     style={{ color: '#ff6699', fontWeight: '600' }}
                  >
                     100,000
                  </div>
                  {/* </div> */}
               </div>
               <div className="row p-2">
                  <Paragraph className="col-8">Shipping Fee</Paragraph>
                  <div
                     className="price-detail total-shipping-cost col-4 text-end"
                     style={{ color: '#ff6699', fontWeight: '600' }}
                  >
                     30,000
                  </div>
                  {/* </div> */}
               </div>

               <hr />
               <div className="row p-2">
                  <Paragraph className="col-8">Total payment</Paragraph>
                  <div
                     className="price-detail total-price col-4 text-end"
                     style={{ color: '#ff6699', fontWeight: '600' }}
                  >
                     130,000
                  </div>
                  {/* </div> */}
               </div>
               <div className="row p-2">
                  <div className="col-4"></div>
                  <div className="col-4 text-center ">
                     <Button type="primary" style={{ background: '#ff6699', fontWeight: '600', hover: '#53cbfe' }}>
                        Checkout
                     </Button>
                  </div>

                  <div className="col-4"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
