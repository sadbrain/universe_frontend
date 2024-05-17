import { Pagination } from 'antd';

const ProductPagination = ({ current, totalProduct, productEachPage }) => {
   const onChange = (page) => {
      console.log(page);
   };
   return <Pagination current={current} defaultPageSize={productEachPage} total={totalProduct} onChange={onChange} />;
};

export default ProductPagination;
