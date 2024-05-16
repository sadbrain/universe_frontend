import { memo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

function SideBar() {
   const [nav, setNav] = useState('dashboard');
   return (
      <div className="left-side">
         <div className="left-side-heading">
            <h1>UNIVERSE</h1>
         </div>

         <ul className="left-side-bar">
            <li className={nav === 'dashboard' ? 'left-side-bar-item active' : 'left-side-bar-item'}>
               <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li className={'left-side-bar-item'} onClick={() => setNav('home')}>
               <Link to="/">Home</Link>
            </li>
            <li
               className={nav === 'm-user' ? 'left-side-bar-item active' : 'left-side-bar-item'}
               onClick={() => setNav('m-user')}
            >
               <Link to="/admin/user">User Management</Link>
            </li>
            <li
               className={nav === 'm-company' ? 'left-side-bar-item active' : 'left-side-bar-item'}
               onClick={() => setNav('m-company')}
            >
               <Link to="/admin/company">Company Management</Link>
            </li>
            <li
               className={nav === 'm-category' ? 'left-side-bar-item active' : 'left-side-bar-item'}
               onClick={() => setNav('m-category')}
            >
               <Link to="/admin/category">Category Management</Link>
            </li>
            <li
               className={nav === 'm-product' ? 'left-side-bar-item active' : 'left-side-bar-item'}
               onClick={() => setNav('m-product')}
            >
               <Link to="/admin/product">Product Management</Link>
            </li>
            <li
               className={nav === 'm-order' ? 'left-side-bar-item active' : 'left-side-bar-item'}
               onClick={() => setNav('m-order')}
            >
               <Link to="/admin/order">Order Management</Link>
            </li>
         </ul>
      </div>
   );
}

export default memo(SideBar);
