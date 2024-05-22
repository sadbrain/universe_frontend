import { memo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

function SideBar() {
   const location = useLocation();
   const isMatchPath = (pattern, path) => {
      return pattern.test(path);
   };
   return (
      <div className="left-side">
         <div className="left-side-heading">
            <h1>UNIVERSE</h1>
         </div>

         <ul className="left-side-bar">
            <li
               className={
                  isMatchPath(/^\/admin\/dashboard(\/.*)?$/, location.pathname)
                     ? 'left-side-bar-item active'
                     : 'left-side-bar-item'
               }
            >
               <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li className={'left-side-bar-item'}>
               <Link to="/">Home</Link>
            </li>
            <li className="left-side-bar-item">
               <Link to="/admin/user">User Management</Link>
            </li>
            <li
               className={
                  isMatchPath(/^\/admin\/company(\/.*)?$/, location.pathname)
                     ? 'left-side-bar-item active'
                     : 'left-side-bar-item'
               }
            >
               <Link to="/admin/company">Company Management</Link>
            </li>
            <li
               className={
                  isMatchPath(/^\/admin\/category(\/.*)?$/, location.pathname)
                     ? 'left-side-bar-item active'
                     : 'left-side-bar-item'
               }
            >
               <Link to="/admin/category">Category Management</Link>
            </li>
            <li
               className={
                  isMatchPath(/^\/admin\/product(\/.*)?$/, location.pathname)
                     ? 'left-side-bar-item active'
                     : 'left-side-bar-item'
               }
            >
               <Link to="/admin/product">Product Management</Link>
            </li>
            <li
               className={
                  isMatchPath(/^\/admin\/order(\/.*)?$/, location.pathname)
                     ? 'left-side-bar-item active'
                     : 'left-side-bar-item'
               }
            >
               <Link to="/admin/order?status=all">Order Management</Link>
            </li>
         </ul>
      </div>
   );
}

export default memo(SideBar);
