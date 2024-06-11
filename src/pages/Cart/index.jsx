import React, { useEffect, useState } from 'react';
import { Row, Col, Breadcrumb, Card, Typography, Input, Button } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined, RightOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import { BASE_URL, vAPI, BE_URL } from '~/enums/core';
import { toast } from 'react-toastify';

const { Title, Text, Paragraph } = Typography;
const Cart = () => {
   const [carts, setCarts] = useState([]);
   const [cartIds, setCartIds] = useState([]);
   const navigate = useNavigate();
   const navigateSummary = () => {
      let queryParams = '?';
      if (cartIds.length === 0) {
         for (let i = 0; i < carts.length; i++) {
            queryParams += `cart_id=${carts[i].id}&`;
         }
      } else {
         for (let i = 0; i < cartIds.length; i++) {
            queryParams += `cart_id=${cartIds[i]}&`;
         }
      }
      navigate(`/summary${queryParams.slice(0, -1)}`);
   };

   useEffect(() => {
      logCarts();
   }, []);
   const handleChooseCart = (e, id) => {
      if (e.target.checked) {
         setCartIds((prev) => [...prev, id]);
      } else {
         setCartIds((prev) => prev.filter((p) => p !== id));
      }
   };
   async function logCarts() {
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + 'carts/show-cart';
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         setCarts(responseObj.data);
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   }
   const increaseQuantity = async (id, index) => {
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `carts/plus/${id}`;
      const options = {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      };

      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         if (response.status === 201) {
            toast.success(responseObj.success_messages);
            setCarts((prevQuantity) => {
               const newArr = [...prevQuantity];
               newArr[index].quantity += 1;
               return [...newArr];
            });
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };

   const decreaseQuantity = async (id, index) => {
      if (carts[index].quantity > 1) {
         const token = localStorage.getItem('token');
         const url = BASE_URL + vAPI + `carts/minus/${id}`;
         const options = {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
         };
         try {
            const response = await fetch(url, options);
            if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseObj = await response.json();
            if (response.status === 201) {
               toast.success(responseObj.success_messages);
               setCarts((prevQuantity) => {
                  const newArr = [...prevQuantity];
                  newArr[index].quantity -= 1;
                  return [...newArr];
               });
            }
         } catch (error) {
            console.error('Fetch error:', error.message);
            return null;
         }
      }
   };
   const handleInputChange = () => {};
   const handleDelete = async (id, index) => {
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `carts/delete/${id}`;
      const options = {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      };

      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }
         console.log(response);
         const responseObj = await response.json();
         if (response.status === 201) {
            toast.success(responseObj.success_messages);
            setCarts((prevQuantity) => {
               const newArr = [...prevQuantity];
               newArr.splice(index, 1);
               return [...newArr];
            });
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   let totalCost = 0;

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
                  {carts.map((c, i) => {
                     let price = c.product.price;

                     if (c.product?.discount?.end_date) {
                        const discountEndDate = new Date(c.product.discount.end_date);
                        const now = new Date();
                        if (discountEndDate.getTime() >= now.getTime()) {
                           price = price - (price * c.product.discount.price) / 100;
                        }
                     }
                     totalCost += price * c.quantity;
                     return (
                        <Card key={c.id} className="cart-item p-3 active my-2" style={{ position: 'relative' }}>
                           <Row className="p-2 w-100">
                              <Col span={1} className="d-flex justify-content-center align-content-center">
                                 <input
                                    type="checkbox"
                                    className="select-cart"
                                    onChange={(e) => {
                                       handleChooseCart(e, c.id);
                                    }}
                                 />
                              </Col>
                              <Col span={9} className="px-1">
                                 <Row>
                                    <div className="col-4">
                                       <img
                                          src={
                                             c?.product?.thumbnail.includes('https://placehold.co')
                                                ? c?.product?.thumbnail
                                                : BE_URL + c?.product?.thumbnail
                                          }
                                          alt="Product Image"
                                          className="product-image"
                                       />
                                    </div>
                                    <div className="col-8 px-2">
                                       <div className="cart-item-info">
                                          <Paragraph>{c.product.name}</Paragraph>
                                          <div>
                                             <span>
                                                Color: {c.color}
                                                <div className="color-option" style={{ backgroundColor: '#000' }}></div>
                                             </span>
                                          </div>
                                          <div className="size">Size: {c.size}</div>
                                          <div className="price-info">
                                             <Paragraph>
                                                Price: <span className="price">{price.toFixed(2)}</span>{' '}
                                                <span className="unit">$</span>
                                             </Paragraph>
                                          </div>
                                       </div>
                                    </div>
                                 </Row>
                              </Col>
                              <Col span={6} className="cart-item-details">
                                 <div className="cart-item-total">
                                    <div className="product-price text-center ">
                                       <span className="total">{(price * c.quantity).toFixed(2)}</span> $
                                    </div>
                                 </div>
                              </Col>
                              <Col span={8}>
                                 <div className="cart-item-actions">
                                    <div className="quantity-buttons mb-3 d-flex justify-content-center">
                                       <Button
                                          onClick={(e) => {
                                             decreaseQuantity(c.id, i);
                                          }}
                                       >
                                          <MinusOutlined />
                                       </Button>
                                       <Input
                                          type="number"
                                          value={c.quantity}
                                          onChange={handleInputChange}
                                          className="quantity-input"
                                       />
                                       <Button
                                          onClick={(e) => {
                                             increaseQuantity(c.id, i);
                                          }}
                                       >
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
                                             onClick={() => handleDelete(c.id, i)}
                                          />
                                       </a>
                                    </div>
                                 </div>
                              </Col>
                           </Row>
                        </Card>
                     );
                  })}
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
                     ${totalCost.toFixed(2)}
                  </div>
                  {/* </div> */}
               </div>
               <div className="row p-2">
                  <Paragraph className="col-8">Shipping Fee</Paragraph>
                  <div
                     className="price-detail total-shipping-cost col-4 text-end"
                     style={{ color: '#ff6699', fontWeight: '600' }}
                  >
                     $2.00
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
                     ${(totalCost + 2.0).toFixed(2)}
                  </div>
                  {/* </div> */}
               </div>
               <div className="row p-2">
                  <div className="col-4"></div>
                  <div className="col-4 text-center ">
                     <Button
                        type="primary"
                        onClick={navigateSummary}
                        style={{ background: '#ff6699', fontWeight: '600', hover: '#53cbfe' }}
                     >
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
