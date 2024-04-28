import { AdminLayout } from '../components/Layouts';
import { Home, ProductList, Cart, Dashboard } from '~/pages';

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/home', component: Home },
   { path: '/productList', component: ProductList },
   { path: '/cart', component: Cart },
   // exmaple for a route when it use a diff layout,
   { path: '/dashboard', component: Dashboard, layout: AdminLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
