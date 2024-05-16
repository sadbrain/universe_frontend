import { useParams } from 'react-router-dom';
function ProductList() {
   const { cateSlug, page } = useParams();
   console.log(cateSlug, page);
   return <h1>ProductList page</h1>;
}

export default ProductList;
