import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Menu, Badge } from 'antd';
import { SearchOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { BASE_URL, vAPI, BASE_FE_URL } from '~/enums/core';
import './index.css';

const { SubMenu } = Menu;

const Header = () => {
   const navigate = useNavigate();

   const navigateProductList = async (e) => {
      e.preventDefault();
      const url = BASE_URL + vAPI + `categories`;
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         if (responseObj.data.length !== 0) {
            const category = responseObj.data[0];
            navigate(`/productList/${category.slug}-${category.id}/1`);
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   return (
      <div className="header">
         <div className="nav-bar-parent">
            <Menu mode="horizontal" className="nav-menu">
               <SubMenu
                  key="universe"
                  title={
                     <span className="universe-title">
                        <Link to="/">UNIVERSE</Link>
                     </span>
                  }
               >
                  {/* Add submenu items here if needed */}
               </SubMenu>
               <Menu.Item key="search">
                  <Input
                     placeholder="Search"
                     className="search-input"
                     suffix={<SearchOutlined className="search-icon" />}
                  />
               </Menu.Item>
               <Menu.Item key="favorites">
                  <Link to="/favorites">
                     <HeartOutlined className="icon-color" />
                  </Link>
               </Menu.Item>
               <Menu.Item key="product" className="menu-item-color">
                  <Link to="/product" onClick={navigateProductList}>
                     Product
                  </Link>
               </Menu.Item>
               <Menu.Item key="about-us" className="menu-item-color">
                  <Link to="/aboutUs">About Us</Link>
               </Menu.Item>
               <Menu.Item key="privacy" className="menu-item-color">
                  <Link to="/privacy">Privacy</Link>
               </Menu.Item>
               <Menu.Item key="notifications">
                  <Badge count={99}>
                     <span className="notification-badge">
                        <Link to="/cart">
                           <ShoppingCartOutlined className="icon-color" />
                        </Link>
                     </span>
                  </Badge>
               </Menu.Item>
            </Menu>
            <div className="nav-elements">
               <Button type="primary" className="sign-up-button">
                  <Link to="/signup" className="button-link">
                     Sign Up
                  </Link>
               </Button>
               <Button type="primary" className="sign-in-button">
                  <Link to="/signin" className="button-link">
                     Sign In
                  </Link>
               </Button>
            </div>
         </div>
      </div>
   );
};

export default React.memo(Header);
