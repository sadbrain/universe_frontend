import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './index.css';

function ProductList() {
   const [productList, setProductList] = useState();
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

   const handleCategoryClick = async (categoryId) => {
      setSelectedCategory(categoryId);
      console.log(`Selected category ID: ${categoryId}`);

      // Fetch products by category when a category is clicked
      try {
         const response = await fetch(`http://127.0.0.1:8000/api/v1/products/get-products-by-category/${categoryId}/1`);
         const data = await response.json();
         setProductList(data.data);
         // console.log(data.data)
      } catch (error) {
         console.error('Error fetching products by category:', error);
      }
   };

   const toggleCategoryDropdown = () => {
      setShowCategories(!showCategories); // Toggle the display state of the category list
   };
   return (
      <div className="row flex-item">
         <div className="col-3">
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
                              <a key={category.id} href="#" onClick={() => handleCategoryClick(category.id)}>
                                 {category.name}
                              </a>
                           </li>
                        ))
                     ) : (
                        <li className="text-center">Loading categories... {console.log(selectedCategory)}</li>
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
         <div className="col-9">
            <button className="btn-pink content-size text-white rounded-10 p-2 w-100">ANTIQUE DRESS</button>
            <div className="row mt-5 flex-item">
               {Array.isArray(productList) && productList.length > 0 ? (
                  productList.map((product) => (
                     <div className=" card col-3 mb-5" style={{ height: '32rem' }} key={product.id}>
                        <div className="product bg-custom rounded-10 h-100">
                           <img className="rounded-10 w-100" src={product.thumbnail} alt={product.name} />
                           <div className="m-1 subcontent-size">
                              <div className="row">
                                 <div className="col" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {product.name}
                                 </div>
                                 <div className="col">*****</div>
                              </div>
                              <p style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>(4.1K) Customer reviews</p>
                              <div className="row">
                                 <div className="col" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {product.price}đ
                                 </div>
                                 <div className="col" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {product.slug}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))
               ) : (
                  <li className="text-center">Loading products...</li>
               )}
            </div>
         </div>
      </div>
   );
}
export default ProductList;
