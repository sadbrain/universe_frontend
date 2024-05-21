import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ProductPagination from '../../components/pagination';
import './index.css';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Rate, Card } from 'antd';
import { Cards } from '../../components/Card';

function ProductList() {
   const [showCategories, setShowCategories] = useState(false);
   const categories = [' Antique Dress', ' Hairpin', 'Jewelry', ' Ethnic shoes', ' Hand fan'];
   const toggleCategoryDropdown = () => {
      setShowCategories(!showCategories);
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
            <h1 className="text-center title-size m-3">
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
                        <ul className={'dropdown-menu text-center color-custom subcontent-size w-100 no-bullets'}>
                           {categories.length > 0 ? (
                              categories.map((category, index) => (
                                 <li className="maincontent-size w-100 m-2" key={index}>
                                    <a key={category} href="#">
                                       {category}
                                    </a>
                                 </li>
                              ))
                           ) : (
                              <li className="text-center">Loading categories...</li>
                           )}
                        </ul>
                     )}
                  </div>
                  <div id="priceType">
                     <p className="content-size mt-4 mb-2">Price-type</p>
                     <input type="number" min="1" placeholder="" className="pl-5 w-100 border-pink" />
                     <button className="btn-pink maincontent-size text-white mt-2 rounded-10 text-center  pl-5 pr-5 pt-3 pb-3 ">
                        Apply
                     </button>
                  </div>
               </div>
               <div className="col-9">
                  <button className="btn-pink content-size text-white rounded-10 p-2">ANTIQUE DRESS</button>
                  <div className="row mt-4">
                     <Cards
                        src="https://cf.shopee.vn/file/1b874305dfdff03c3786983c2576d3fc"
                        productName="Awesome Product"
                        rankComments="(4.1K) Customer reviews"
                        currentPrice="49.99"
                        oldPrice="69.99"
                     />
                     <Cards
                        src="https://cf.shopee.vn/file/1b874305dfdff03c3786983c2576d3fc"
                        productName="Awesome Product"
                        rankComments="(4.1K) Customer reviews"
                        currentPrice="49.99"
                        oldPrice="69.99"
                     />
                     <Cards
                        src="https://cf.shopee.vn/file/1b874305dfdff03c3786983c2576d3fc"
                        productName="Awesome Product"
                        rankComments="(4.1K) Customer reviews"
                        currentPrice="49.99"
                        oldPrice="69.99"
                     />
                     <Cards
                        src="https://cf.shopee.vn/file/1b874305dfdff03c3786983c2576d3fc"
                        productName="Awesome Product"
                        rankComments="(4.1K) Customer reviews"
                        currentPrice="49.99"
                        oldPrice="69.99"
                     />
                     <Cards
                        src="https://cf.shopee.vn/file/1b874305dfdff03c3786983c2576d3fc"
                        productName="Awesome Product"
                        rankComments="(4.1K) Customer reviews"
                        currentPrice="49.99"
                        oldPrice="69.99"
                     />
                  </div>
               </div>
            </div>
         </div>
         <ProductPagination className="text-center" current={parseInt(10)} totalProduct={100} productEachPage={10} />;
      </div>
   );
}
export default ProductList;
