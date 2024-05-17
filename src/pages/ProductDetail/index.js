import { useParams } from 'react-router-dom';
import { getProduct } from '../../mock/testting_data';

function ProductDetails() {
   const { productId } = useParams();

   const productInfo = getProduct(productId);

   if (!productInfo) {
      return <h1>Cannot find this product</h1>;
   }

   return <h1>This is the product page of {productInfo.name}</h1>;
}

export default ProductDetails;
