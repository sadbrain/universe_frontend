import React, { useState, useEffect } from 'react';
import { Card, Button as AntButton, Radio, Typography, Divider, Rate, InputNumber } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import the custom CSS
import { useParams, useNavigate } from 'react-router-dom';
import { BASE_URL, vAPI } from '~/enums/core';
import { toast } from 'react-toastify';
import { Meta } from 'antd/es/list/Item';
const { Title, Text } = Typography;

const ProductPage = () => {
   const [product, setProduct] = useState(null);
   const [relatedProducts, setRelatedProducts] = useState([]);
   const [size, setSize] = useState('');
   const [color, setColor] = useState('');
   const [quantity, setQuantity] = useState(1);
   const { productSlug } = useParams();
   const navigate = useNavigate();
   const productSlugArr = productSlug.split('-');
   const id = productSlugArr[productSlugArr.length - 1];
   let rowPrice = product?.price;
   let discountPrice = 0;
   if (product?.discount?.end_date) {
      const discountEndDate = new Date(product.discount.end_date);
      const now = new Date();
      if (discountEndDate.getTime() >= now.getTime()) {
         discountPrice = rowPrice - (rowPrice * product.discount.price) / 100;
      }
   }

   useEffect(() => {
      getProduct();
   }, [id]);

   useEffect(() => {
      if (product) {
         getRelatedProducts();
      }
   }, [product]);

   const getProduct = async () => {
      const url = BASE_URL + vAPI + `products/${id}`;
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
         setProduct(responseObj.data);
      } catch (error) {
         console.error('Fetch error:', error.message);
      }
   };

   const getRelatedProducts = async () => {
      const url = BASE_URL + vAPI + `products/get-products-by-category/${product?.category?.id}`;
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
         const products = responseObj.data;
         products.sort((a, b) => {
            const discountA = a.discount?.price || 0;
            const discountB = b.discount?.price || 0;
            return discountB - discountA;
         });
         setRelatedProducts(products);
      } catch (error) {
         console.error('Fetch error:', error.message);
      }
   };

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

   const truncateProductName = (name, maxLength) => {
      if (name.length > maxLength) {
         return name.slice(0, maxLength) + '...';
      }
      return name;
   };

   // const handleAddToCart = () => {
   //    toast.success('Product added to cart!');
   // };
   const handleAddToCart = async (e) => {
      const formData = {
         quantity,
         size,
         color,
         product_id: product.id,
      };
      setColor('');
      setQuantity(1);
      setSize('');

      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `carts/add-to-cart`;
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         mode: 'cors',
         body: JSON.stringify({ ...formData }),
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         if (response.status === 201) {
            toast.success(responseObj.success_messages);
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };

   const handleCardClick = (categorySlug, categoryId, productSlug, productId) => {
      navigate(`/detail/${categorySlug}-${categoryId}/${productSlug}-${productId}`);
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
                     {product?.name}
                  </Title>
                  <div className="price-rating-container">
                     <Text strong className="h4 text-danger price">
                        {discountPrice === 0 ? (
                           <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                              {rowPrice && rowPrice.toFixed(2)}$
                           </span>
                        ) : (
                           <>
                              <span className="" style={{ fontWeight: 'bold', color: '#ff6699' }}>
                                 {discountPrice && discountPrice.toFixed(2)}$
                              </span>
                              <span
                                 className=""
                                 style={{ color: 'red', marginLeft: '50px', textDecoration: 'line-through 2px' }}
                              >
                                 {rowPrice && rowPrice.toFixed(2)}$
                              </span>
                           </>
                        )}
                     </Text>
                     <div className="rating">
                        <Rate disabled defaultValue={5} />
                        <Text className="ml-3 rating-text">
                           4.9/5 rating | {product?.inventory?.quantity_sold} solder
                        </Text>
                     </div>
                  </div>
                  <Divider />

                  <div className="mb-3">
                     <Text strong>Size:</Text>
                     <Radio.Group onChange={handleSizeChange} value={size} className="d-block">
                        {product?.inventory?.sizes?.map((s, i) => (
                           <Radio.Button key={i} value={s.name}>
                              {s.name}
                           </Radio.Button>
                        ))}
                     </Radio.Group>
                  </div>

                  <div className="mb-3">
                     <Text strong>Color:</Text>
                     <Radio.Group onChange={handleColorChange} value={color} className="d-block">
                        {product?.inventory?.colors?.map((c) => (
                           <Radio.Button key={c.name} value={c.name}>
                              {c.name}
                           </Radio.Button>
                        ))}
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
                     <AntButton type="primary" className="mr-2 add-to-cart-button" onClick={handleAddToCart}>
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
            {' '}
            The size is accurate, but since it is a double size, it may not perfectly fit all feet. Customers should
            choose the size based on their personal preference for how they typically like to wear slippers. <br /> The
            slipper sole is approximately 3.5cm thick (measured by hand). <br /> The slipper sole is designed to be
            anti-slip, made of high-quality EVA material that is environmentally friendly. <br /> These slippers are
            very popular right now, so customers should order their desired color and size quickly before they sell out.{' '}
            <br /> Since it is a double size, the fit may be looser or tighter than your foot. Choose based on your
            personal preference for a looser or tighter fit.{' '}
         </Text>
         <div className="related-container">
            <h3 style={{ color: '#ff6699', fontSize: '60px', margin: '30px 0 10px' }}>Related Products</h3>
            <div className="d-flex flex-wrap">
               {relatedProducts.map((product) => {
                  let rowPrice = product.price;
                  let discountPrice = 0;
                  if (product.discount?.end_date) {
                     const discountEndDate = new Date(product.discount.end_date);
                     const now = new Date();
                     if (discountEndDate.getTime() >= now.getTime()) {
                        discountPrice = rowPrice - (rowPrice * product.discount.price) / 100;
                     }
                  }
                  return (
                     <Card
                        onClick={() => {
                           handleCardClick(product.category?.slug, product.category?.id, product.slug, product.id);
                        }}
                        key={product.id}
                        className="card-container"
                        style={{ width: 350, fontSize: '20px' }}
                        cover={
                           <img
                              alt="product"
                              src={
                                 product.thumbnail.includes('https://via.placeholder.com')
                                    ? product.thumbnail
                                    : BASE_URL + 'images/product/' + product.thumbnail
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
                                    <span style={{ flex: 1 }}>{truncateProductName(product.name, 20)}</span>
                                    <Rate
                                       disabled
                                       defaultValue={5}
                                       style={{ color: '#ffc107', fontSize: '14px', marginLeft: '10px' }}
                                    />
                                 </div>
                                 <div style={{ marginTop: '5px', textAlign: 'left' }}>
                                    <span>({product.rating}) Customer service</span>
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
                                             style={{
                                                color: 'red',
                                                marginLeft: '',
                                                textDecoration: 'line-through 2px',
                                             }}
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
      </div>
   );
};

export default ProductPage;
