import { AdminLayout } from '../components/Layouts';
import { Home, ProductList, ProductDetail, Cart, Dashboard, SignIn, SignUp } from '~/pages';
import {
   AboutUs,
   Summary,
   OrderManagementCus,
   AddMoreUser,
   OrderList,
   OrderDetail,
   OrderConfirmation,
   Products,
   ProductCreate,
   ProductUpdate,
} from '../pages';

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/home', component: Home },
   { path: '/login', component: SignIn },
   { path: '/register', component: SignUp },
   { path: '/aboutUs', component: AboutUs },
   { path: '/productList', component: ProductList },
   { path: '/productList/:cateSlug/:page', component: ProductList },
   { path: '/productList/:price', component: ProductList },
   { path: '/detail/:cateSlug/:productSlug', component: ProductDetail },
   { path: '/orderSumary', component: OrderManagementCus },

   // exmaple for a route when it use a diff layout,
];
const privateRoutes = [
   {
      path: '/summary',
      component: Summary,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      path: '/admin/dashboard',
      component: Dashboard,
      layout: AdminLayout,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      path: '/cart',
      component: Cart,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      path: '/orderSummary',
      component: OrderManagementCus,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      layout: AdminLayout,
      path: '/admin/user/create',
      component: AddMoreUser,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      layout: AdminLayout,
      path: '/admin/order',
      component: OrderList,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      layout: AdminLayout,
      path: '/admin/order/detail/:id',
      component: OrderDetail,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      layout: AdminLayout,
      path: '/admin/product',
      component: Products,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      layout: AdminLayout,
      path: '/admin/product/create',
      component: ProductCreate,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      layout: AdminLayout,
      path: '/admin/product/update/:id',
      component: ProductUpdate,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      layout: AdminLayout,
      path: '/admin/order/detail/:id',
      component: OrderDetail,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      path: '/orderConfirmation',
      component: OrderConfirmation,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
];

export { publicRoutes, privateRoutes };
