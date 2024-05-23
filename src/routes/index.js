import { AdminLayout } from '../components/Layouts';
import { Home, ProductList, ProductDetail, Cart, Dashboard, SignIn, SignUp } from '~/pages';
import {
   AboutUs,
   Summary,
   OrderManagementCus,
   AddMoreUser,
   EditUser,
   OrderList,
   OrderDetail,
   ListUser,
} from '../pages';

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/home', component: Home },
   { path: '/login', component: SignIn },
   { path: '/register', component: SignUp },
   { path: '/aboutUs', component: AboutUs },
   { path: '/productList/:cateSlug/:page', component: ProductList },
   { path: '/detail/:cateSlug/:productSlug', component: ProductDetail },
   // { path: '/user-management', component: UserManagement },
   // { path: '/list-user', component: ListUser },
   // { path: '/addmoreUser', component: AddMoreUser },
   // { path: '/editUser', component: EditUser },

   // exmaple for a route when it use a diff layout,
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
      path: '/summary',
      component: Summary,
      error: () => {
         alert('ban khong con quyen truy cap yeu cau nay');
      },
   },
   {
      path: '/orderSummary/:status',
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
];

export { publicRoutes, privateRoutes };
