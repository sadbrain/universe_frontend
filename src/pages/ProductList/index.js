import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Cards } from '../../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Skeleton } from 'antd';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'antd';

function ProductList() {
   const navigate = useNavigate();
   const [showCategories, setShowCategories] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const { cateSlug, page } = useParams();
   const toggleCategoryDropdown = () => {
      setShowCategories(!showCategories);
   };
   const [categories, setCategories] = useState([]);
   const inputRef = useRef(null);
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const ProductPagination = ({ current, totalProduct, productEachPage }) => {
      // const navigate = useNavigate();
      const onChange = (page) => {
         navigate(`../productList/${cateSlug}/${page}`);
      };
      return (
         <Pagination
            className="text-center"
            current={current}
            defaultPageSize={productEachPage}
            total={totalProduct}
            onChange={onChange}
         />
      );
   };
   useEffect(() => {
      const timer = setTimeout(() => {
         setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
   }, []);
   useEffect(() => {
      const fetchCategories = async () => {
         try {
            const res = await axios.get('http://127.0.0.1:8000/api/v1/categories');
            const data = await res.data;
            setCategories(data.data);
            console.log(data.data);
         } catch (error) {
            console.error('Error fetching categories:', error);
         }
      };

      fetchCategories();
   }, []);

   // const fetchProductByCategory = async (cateSlug, page) => {
   //    setLoading(true);
   //    try {
   //       const res = await axios.get(
   //          `http://127.0.0.1:8000/api/v1/products/get-products-by-category/${cateSlug}/${page}`,
   //       );
   //       const data = await res.data;
   //       setProducts(data.data);
   //       console.log(data.data);
   //    } catch (error) {
   //       console.error('Error fetching products:', error);
   //    }finally{
   //       setLoading(false)
   //    }
   // };
   // const fetchProductDefault = async () => {
   //    try {
   //       const res = await axios.get(`http://127.0.0.1:8000/api/v1/products/get-products-by-category/1/1`);
   //       const data = await res.data;
   //       setProducts(data.data);
   //       console.log(data.data);
   //    } catch (error) {
   //       console.error('Error fetching products:', error);
   //    }
   // };

   // useEffect(() => {
   //    fetchProductDefault();
   //    fetchProductByCategory()
   // }, [cateSlug, page]);

   const fetchData = async () => {
      setLoading(true);
      try {
         const res = await axios.get(
            `http://127.0.0.1:8000/api/v1/products/get-products-by-category/${cateSlug}/${page}`,
         );
         const data = res.data;
         setProducts(data.data);
         setLoading(false);
      } catch (error) {
         console.error('Error fetching products:', error);
         setLoading(false);
      }
   };
   useEffect(() => {
      fetchData();
   }, [cateSlug, page]);

   const handleCategoryClick = (categoryId, currentPage) => {
      navigate(`../productList/${categoryId}/${currentPage}`);
   };
   const productsByPrice = async (price) => {
      try {
         const res = await axios.get(`http://127.0.0.1:8000/api/v1/products/get-products-by-price/${price}`);
         const data = await res.data;
         setProducts(data.data);
         console.log(data.data);
      } catch (error) {
         console.error('Error fetching products:', error);
      }
   };
   const handlePriceClick = (price) => {
      const priceValue = inputRef.current.value;
      productsByPrice(priceValue);
   };

   useEffect(() => {
      const dropdown = document.getElementById('myDropdown');
      const priceType = document.getElementById('priceType');

      const handleMovePriceType = () => {
         if (dropdown.classList.contains('show')) {
            priceType.style.marginTop = '100px';
         } else {
            priceType.style.marginTop = '0px';
         }
      };

      dropdown.addEventListener('click', handleMovePriceType);

      return () => {
         dropdown.removeEventListener('click', handleMovePriceType);
      };
   }, []);

   return (
      <div className="ml-4 mr-4">
         <div className="head-content">
            <h1 className="text-center title-size m-3 color-custom bold-text">
               <b>Fashion</b>
            </h1>
            <div className="text-center flex-item bold-text">
               <Link to="/home" className="maincontent-size non-text-decoration text-dark">
                  Home
               </Link>
               <RightOutlined className="m-3" />
               <Link to="#" className="maincontent-size color-custom mr-2 non-text-decoration">
                  Fashion
               </Link>
               <RightOutlined className="m-3 color-custom" />
               <Link to="#" className="maincontent-size non-text-decoration text-dark">
                  Antiques Dress
               </Link>
            </div>
         </div>
         <div className="container mt-5">
            <div className="row flex-item ">
               <div className="col-3 ">
                  <div className="dropdown" id="myDropdown">
                     <button
                        className="btn btn-pink dropdown-toggle main-size w-100 "
                        type="button"
                        onClick={toggleCategoryDropdown}
                     >
                        Categories
                        <span className="caret"></span>
                     </button>

                     {showCategories && (
                        <ul>
                           {categories.map((category, index) => (
                              <li className="maincontent-size w-100 m-2 text-center color-custom" key={index}>
                                 <span
                                    className="non-text-decoration"
                                    onClick={() => handleCategoryClick(category.id, currentPage)}
                                 >
                                    {loading ? <Skeleton active /> : category.name}
                                 </span>
                              </li>
                           ))}
                        </ul>
                     )}
                  </div>
                  <div id="priceType">
                     <p className="content-size mt-4 mb-2">Price-type</p>
                     <input type="number" min="1" placeholder="" className="pl-5 w-100 border-pink" ref={inputRef} />
                     <button
                        className="btn-pink maincontent-size text-white mt-2 rounded-10 text-center p-3 "
                        onClick={() => handlePriceClick(inputRef)}
                     >
                        Apply
                     </button>
                  </div>
               </div>
               <div className="col-9">
                  <button className="btn-pink content-size text-white rounded-10 p-2">ANTIQUE DRESS</button>
                  <div className="row mt-4">
                     {loading ? (
                        <Skeleton active />
                     ) : (
                        products.map((product, index) => (
                           <div className="col-3" key={index}>
                              <Cards
                                 src={product.thumbnail}
                                 productName={product.name}
                                 rankComments={product.description}
                                 currentPrice={product.discount.price}
                                 oldPrice={product.price}
                              />
                           </div>
                        ))
                     )}
                  </div>
               </div>
            </div>
         </div>
         <ProductPagination
            className="text-center"
            current={parseInt(10)}
            totalProduct={100}
            productEachPage={10}
            onChange={(current) => handlePageChange(current)}
         />
         ;
      </div>
   );
}
export default ProductList;
