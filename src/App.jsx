import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './components/Layouts';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import SignIn from './pages/SignIn';

function App() {
   const router = createBrowserRouter([
      {
         path: '/signin',
         element: <SignIn />,
      },
      {
         path: '/',
         element: <DefaultLayout />,

         children: [
            {
               path: 'products',
               children: [
                  {
                     index: true,
                     element: <ProductList />,
                  },
                  {
                     path: ':productId',
                     element: <ProductDetails />,
                  },
               ],
            },
            {
               path: 'cart',
               element: <Cart />,
            },
         ],
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
