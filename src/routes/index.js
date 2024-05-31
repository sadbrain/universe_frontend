import { AdminLayout } from '../components/Layouts';
import { Home, ProductList, ProductDetail, Cart, Dashboard, SignIn, SignUp } from '~/pages';
import {
   AboutUs,
   Summary,
   OrderManagementCus,
   AddMoreUser,
   EditUser,
   ListUser,
   OrderList,
   OrderDetail,
   OrderConfirmation,
   Products,
   ProductCreate,
   ProductUpdate,
   Privacy,
} from '../pages';

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/home', component: Home },
   { path: '/signin', component: SignIn },
   { path: '/signup', component: SignUp },
   { path: '/aboutUs', component: AboutUs },
   // { path: '/productList', component: ProductList },
   { path: '/productList/:cateSlug/:page', component: ProductList },
   { path: '/productList/:price/:page', component: ProductList },
   { path: '/detail/:cateSlug/:productSlug', component: ProductDetail },
   { path: 'privacy', component: Privacy },
];

const privateRoutes = [
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
      path: '/admin/user/edit',
      component: EditUser,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      layout: AdminLayout,
      path: '/admin/user',
      component: ListUser,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
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
