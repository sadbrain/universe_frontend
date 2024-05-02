import React, { useState, useEffect } from 'react';
function Category() {
   //Luu tat ca category
   const [categories, setCategories] = useState([]);
   //Luu category da duoc select
   const [selectedCategory, setSelectedCategory] = useState([]);
   //Luu san pham se duoc fetch
   const [products, setProducts] = useState([]);

   // Fetch danh sách categories từ API khi component được render
   useEffect(() => {
      fetchCategories();
   }, []);

   const fetchCategories = () => {
      fetch(`http://127.0.0.1:8000/api/v1/categories`)
         .then((response) => response.json())
         .then((data) => setCategories(data))
         .catch((error) => console.error('Error fetching categories:', error));
   };

   const handleCategoryClick = (categoryId) => {
      setSelectedCategory(categoryId);
   };
   return (
      <div className="dropdown" id="myDropdown">
         <button
            className="btn btn-pink dropdown-toggle main-size"
            type="button"
            data-toggle="dropdown"
            onClick="movePriceType()"
         >
            Categories
            <span className="caret"></span>
         </button>
         <ul className="dropdown-menu color-custom text-center">
            {Array.isArray(categories) &&
               categories.map((category) => (
                  <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                     {category.name}
                  </li>
               ))}
         </ul>
      </div>
   );
}

export default Category;
