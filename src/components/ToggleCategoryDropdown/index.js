import { useState, useEffect } from "react";
export function ToggleCategoryDropdown (){
    const [showCategories, setShowCategories] = useState(false);
    setShowCategories(!showCategories);
    useEffect(() => {
       const dropdown = document.getElementById('myDropdown');
       const priceType = document.getElementById('priceType');

       const handleMovePriceType = () => {
          if (dropdown.classList.contains('show')) {
             priceType.style.marginTop = '0';
          } else {
             priceType.style.marginTop = '100px'; // Adjust the margin-top value according to your needs
          }
       };
       ToggleCategoryDropdown();
       dropdown.addEventListener('click', handleMovePriceType);
       return () => {
          dropdown.removeEventListener('click', handleMovePriceType);
       };
    }, []);
 };