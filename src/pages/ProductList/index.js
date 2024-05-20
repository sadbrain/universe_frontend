import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ProductPagination from '../../components/pagination';
import './index.css';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { RightOutlined } from '@ant-design/icons';

function ProductList() {
   const [showCategories, setShowCategories] = useState(false);
   const categories = [' Antique Dress', ' Hairpin', 'Jewelry', ' Ethnic shoes', ' Hand fan'];
   const toggleCategoryDropdown = () => {
      setShowCategories(!showCategories);
   };
   return (
      <div className="ml-4 mr-4">
         <div className="head-content">
            <h1 className="text-center title-size">
               <b>Fashion</b>
            </h1>
            <div className="text-center flex-item bold-text">
               <h2>Home</h2>
               <RightOutlined />
               <h2 className="color-custom">Fashion </h2>
               <RightOutlined className="color-custom" />
               <h2>Antiques Dress</h2>
            </div>
         </div>
         <div className="container mt-3">
            <div className="row flex-item">
               <div className="col-3 ">
                  <div className="dropdown" id="myDropdown">
                     <button
                        className="btn btn-pink dropdown-toggle main-size w-100"
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
                                 <li className="maincontent-size w-100" key={index}>
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
                     <p className="content-size">Price-type</p>
                     <input type="number" min="1" placeholder="" className="pl-5 w-100 border-pink" />
                     <button className="btn-pink maincontent-size text-white mt-2 rounded-10 text-center  pl-5 pr-5 pt-3 pb-3 ">
                        Apply
                     </button>
                  </div>
               </div>
               <div className="col-9">
                  <button className="btn-pink content-size text-white rounded-10 p-2">ANTIQUE DRESS</button>
                  <div className="row mt-3">
                     <div className="col-3  mb-5">
                        <div className="product bg-custom rounded-10">
                           <img
                              className="rounded-10"
                              src="https://cf.shopee.vn/file/1b874305dfdff03c3786983c2576d3fc"
                              alt="Vay co trang"
                           />
                           <div className="m-1 maincontent-size">
                              <div className="row">
                                 <div className="col-6 ">Shiny Dress</div>
                                 <div className="col-6"> *****</div>
                              </div>
                              <p>(4.1K) Customer reviews</p>
                              <div className="row">
                                 <div className="col-5">95.000đ</div>
                                 <div className="col-7">Almost Sold out</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-3  mb-5">
                        <div className="product bg-custom rounded-10">
                           <img
                              className="rounded-10"
                              src="https://cf.shopee.vn/file/1b874305dfdff03c3786983c2576d3fc"
                              alt="Vay co trang"
                           />
                           <div className="m-1 maincontent-size">
                              <div className="row">
                                 <div className="col-6 ">Shiny Dress</div>
                                 <div className="col-6"> *****</div>
                              </div>
                              <p>(4.1K) Customer reviews</p>
                              <div className="row">
                                 <div className="col-5">95.000đ</div>
                                 <div className="col-7">Almost Sold out</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-3 mb-5">
                        <div className="product bg-custom rounded-10">
                           <img
                              className="rounded-10"
                              src="https://cf.shopee.vn/file/1b874305dfdff03c3786983c2576d3fc"
                              alt="Vay co trang"
                           />
                           <div className="m-1 maincontent-size">
                              <div className="row">
                                 <div className="col-6 ">Shiny Dress</div>
                                 <div className="col-6"> *****</div>
                              </div>
                              <p>(4.1K) Customer reviews</p>
                              <div className="row">
                                 <div className="col-5">95.000đ</div>
                                 <div className="col-7">Almost Sold out</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-3  mb-5">
                        <div className="product bg-custom rounded-10">
                           <img
                              className="rounded-10"
                              src="https://cf.shopee.vn/file/1b874305dfdff03c3786983c2576d3fc"
                              alt="Vay co trang"
                           />
                           <div className="m-1 maincontent-size">
                              <div className="row">
                                 <div className="col-6 ">Shiny Dress</div>
                                 <div className="col-6"> *****</div>
                              </div>
                              <p>(4.1K) Customer reviews</p>
                              <div className="row">
                                 <div className="col-5">95.000đ</div>
                                 <div className="col-7">Almost Sold out</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-3  mb-5">
                        <div className="product bg-custom rounded-10">
                           <img
                              className="rounded-10"
                              src="https://cf.shopee.vn/file/1b874305dfdff03c3786983c2576d3fc"
                              alt="Vay co trang"
                           />
                           <div className="m-1 maincontent-size">
                              <div className="row">
                                 <div className="col-6 ">Shiny Dress</div>
                                 <div className="col-6"> *****</div>
                              </div>
                              <p>(4.1K) Customer reviews</p>
                              <div className="row">
                                 <div className="col-5">95.000đ</div>
                                 <div className="col-7">Almost Sold out</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <ProductPagination className="text-center" current={parseInt(10)} totalProduct={100} productEachPage={10} />;
      </div>
   );
}
export default ProductList;
