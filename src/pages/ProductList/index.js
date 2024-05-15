import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Category() {
   // State variables
   const [showCategories, setShowCategories] = useState(false);
   const [selectedCategory, setSelectedCategory] = useState(null); // Set to null initially
   const [categories, setCategories] = useState([]); // State for categories

   // Fetch categories from API
   useEffect(() => {
      const fetchCategories = async () => {
         try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/categories');
            const data = await response.json();
            setCategories(data.data); // Update the state with the fetched categories
         } catch (error) {
            console.error('Error fetching categories:', error);
         }
      };

      fetchCategories();
   }, []); // Empty dependency array means this useEffect runs once after initial render

   const handleCategoryClick = (categoryId) => {
      setSelectedCategory(categoryId);
      console.log(`Selected category ID: ${categoryId}`);
   };

   const toggleCategoryDropdown = () => {
      setShowCategories(!showCategories); // Toggle the display state of the category list
   };

   return (
      <div className="col-1">
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
                  {Array.isArray(categories) && categories.length > 0 ? (
                     categories.map((category) => (
                        <li
                           className="maincontent-size w-100"
                           key={category.id}
                           onClick={() => handleCategoryClick(category.id)}
                        >
                           {category.name}
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
            <button className="btn btn-pink maincontent-size text-white mt-2 rounded-10 text-center pl-5 pr-5 pt-3 pb-3 w-100">
               Apply
            </button>
         </div>
      </div>
   );
}

function ProductList() {
   return (
      <div className="row flex-item">
         <Category />
         <div className="col-11">
            <button className="btn-pink content-size text-white rounded-10 p-2 w-100">ANTIQUE DRESS</button>
            <div className="row mt-5">
               <div className="col-3 mb-5">
                  <div className="product bg-custom rounded-10">
                     <img
                        className="rounded-10 w-100"
                        src="https://cf.shopee.vn/file/1b874305dfdff03c3786983c2576d3fc"
                        alt="Vay co trang"
                     />
                     <div className="m-1 maincontent-size">
                        <div className="row">
                           <div className="col-6">Shiny Dress</div>
                           <div className="col-6">*****</div>
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
   );
}

export default ProductList;
