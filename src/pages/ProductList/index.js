import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { Cards } from '../../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Skeleton } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'antd';
import { useParams } from 'react-router-dom';
// "http://localhost:8000/api/v1/products?category=${category}&page=x&priceFrom=${priceFrom}&priceTo=${priceTo}"

function ProductList() {
   const navigate = useNavigate();
   const location = useLocation();
   const { pathname } = location;
   const { categorySlug } = useParams();
   const [slug, setSlug] = useState() || "fans";
   const [showCategories, setShowCategories] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [pages, setPages] = useState(1);
   const toggleCategoryDropdown = () => {
      setShowCategories(!showCategories);
   };
   const categoryId = pathname.split('/')[2];
   const page = pathname.split('/')[3];
   const [price, setPrice] = useState(100);
   const [categories, setCategories] = useState([]);
   const inputRef = useRef(null);
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);

   const ProductPagination = ({ current, totalProduct, productEachPage }) => {
      const onChange = (page) => {
         setPages(page);
         navigate(`../productList/${categoryId}/${pages}`);
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
      const fetchProducts = async () => {
         const categoryId = pathname.split('/')[2].match(/-(\d+)/) ? pathname.split('/')[2].match(/-(\d+)/)[1] : '1';
         const page = pathname.split('/')[3].match(/-(\d+)/) ? pathname.split('/')[3].match(/-(\d+)/) : '1';
         const searchParams = new URLSearchParams();
         const url = new URL(`http://127.0.0.1:8000/api/v1/products/get-products-by-category/${categoryId}/${page}`);
         url.search = searchParams.toString();
         const res = await axios.get(url.href);
         const data = res.data;
         setProducts(data.data);
         setLoading(false);
      };
      const fetchCategories = async () => {
         const res = await axios.get('http://127.0.0.1:8000/api/v1/categories');
         const data = await res.data;
         setCategories(data.data);
      };

      fetchCategories();
      fetchProducts();
   }, [categoryId, page]);

   const fetchByprice = async (price) => {
      try {
         const searchParams = new URLSearchParams();
         const url = new URL(`http://127.0.0.1:8000/api/v1/products/get-products-by-price/${price}`);
         url.search = searchParams.toString();
         const res = await axios.get(url.href);
         const data = res.data;
         setProducts(data.data);
         console.log('products By Price: ', products);
      } catch (error) {
         console.log(error);
      }
   };

   const handleCategoryClick = (categoryId, currentPage, categorySlug) => {
      setSlug(categorySlug)
      navigate(`../productList/${categorySlug}-${categoryId}/${currentPage}`);
   };

   const handleProductListDefault = () => {
      navigate(`../productList/fans-1/1`);
   };

   const handlePriceClick = () => {
      const priceValue = inputRef.current.value;
      setPrice(priceValue);
      fetchByprice(priceValue);
      navigate(`../productList/${priceValue}/${pages}`);
   };
   const handleCardClick = (productSlug) => {
      // console.log(slug)
      navigate(`../detail/${slug}/${productSlug}`);
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
               <Link to="/home" className="maincontent-size text-decoration-none text-dark">
                  Home
               </Link>
               <RightOutlined className="m-3" />
               <Link to="#" className="maincontent-size color-custom mr-2 text-decoration-none">
                  Fashion
               </Link>
               <RightOutlined className="m-3 color-custom" />
               <Link to="#" className="maincontent-size text-decoration-none text-dark">
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
                                    onClick={() => handleCategoryClick(category.id, currentPage, category.slug)}
                                 >
                                    {loading ? <Skeleton active /> : category.name}
                                 </span>
                              </li>
                           ))}
                        </ul>
                     )}
                     <button onClick={handleProductListDefault}>Product List</button>
                  </div>
                  <div id="priceType">
                     <p className="content-size mt-4 mb-2">Price-type</p>
                     <input type="number" min="1" placeholder="" className="pl-5 w-100 border-pink" ref={inputRef} />
                     <button
                        className="btn-pink maincontent-size text-white mt-2 rounded-10 text-center p-3 "
                        onClick={() => handlePriceClick(inputRef, currentPage)}
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
                        products.map((product) => (
                           <Cards
                              src={product.thumbnail}
                              productName={product.name}
                              rankComments={product.description}
                              currentPrice={product.discount.price}
                              oldPrice={product.price}
                              onClick={()=>{
                                 handleCardClick( product.slug)
                              }}
                           />
                        ))
                     )}
                  </div>
               </div>
            </div>
         </div>
         <ProductPagination className="text-center" current={parseInt(10)} totalProduct={100} productEachPage={10} />;
      </div>
   );
}
export default ProductList;
