import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Menu, Badge } from 'antd';
import { SearchOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './index.css';

const { SubMenu } = Menu;

const Header = () => {
   return (
      <div className="header">
         <div className="nav-bar-parent">
            <Menu mode="horizontal" className="nav-menu">
               <SubMenu
                  key="universe"
                  title={
                     <span className="universe-title">
                        <Link to="/universe">UNIVERSE</Link>
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
                  <Link to="/product">Product</Link>
               </Menu.Item>
               <Menu.Item key="about-us" className="menu-item-color">
                  <Link to="/about-us">About Us</Link>
               </Menu.Item>
               <Menu.Item key="privacy" className="menu-item-color">
                  <Link to="/privacy">Privacy</Link>
               </Menu.Item>
               <Menu.Item key="notifications">
                  <Badge count={99}>
                     <span className="notification-badge">
                        <Link to="/notifications">
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