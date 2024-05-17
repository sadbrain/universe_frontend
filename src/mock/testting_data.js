export const productMock = [
   {
      id: '1',
      name: 'Jacket',
   },
   {
      id: '2',
      name: 'Hat',
   },
];

export const getProduct = (productId) => {
   return productMock.find((product) => product.id === productId);
};

export const getProductList = ({ sort, page, category }) => {
   fetch(`http://localhost:8080/product?sort=${sort}&page=${page}&category=${category}`);
};
