import React, { memo } from 'react';
import { Layout, Menu, Input, Button, Row, Col } from 'antd';
import {
   InstagramOutlined,
   FacebookOutlined,
   PinterestOutlined,
   TwitterOutlined,
   MailOutlined,
} from '@ant-design/icons';
import './index.css';

const { Footer: AntFooter } = Layout;

const Footer = () => {
   return (
      <AntFooter className="footer">
         <Row>
            <Col span={6}>
               <div className="footer-section">
                  <h3>Categories</h3>
                  <Menu mode="vertical">
                     <Menu.Item>Hanfu</Menu.Item>
                     <Menu.Item>Jewelry</Menu.Item>
                     <Menu.Item>Hair Stick</Menu.Item>
                     <Menu.Item>Hand Fan</Menu.Item>
                     <Menu.Item>Ethnic Shoes</Menu.Item>
                  </Menu>
               </div>
            </Col>
            <Col span={12} className="newsletter-section">
               <h3 style={{ fontSize: '30px' }}>Subscribe to our Newsletter</h3>
               <Input.Group compact>
                  <Input style={{ width: 'calc(100% - 500px)' }} placeholder="Email" /> {/* Adjusted width */}
                  <Button type="primary" style={{ width: '80px', background: '#E89B93' }}>
                     Submit
                  </Button>{' '}
                  {/* Adjusted width */}
               </Input.Group>
               <h3>Connect With Us On Social Media</h3>
               <div className="social-icons">
                  <InstagramOutlined />
                  <FacebookOutlined />
                  <PinterestOutlined />
                  <TwitterOutlined />
                  <MailOutlined />
               </div>
            </Col>
            <Col span={6}>
               <div className="footer-section">
                  <h3>Navigation</h3>
                  <Menu mode="vertical">
                     <Menu.Item>Home</Menu.Item>
                     <Menu.Item>About Us</Menu.Item>
                     <Menu.Item>Contact Us</Menu.Item>
                     <Menu.Item>FAQs</Menu.Item>
                     <Menu.Item>Help</Menu.Item>
                  </Menu>
               </div>
            </Col>
         </Row>
         <Row className="footer-bottom">
            <Col span={24}>
               <Menu mode="horizontal" className="footer-menu">
                  <Menu.Item>Cookie Policy</Menu.Item>
                  <Menu.Item>Cookies Settings</Menu.Item>
                  <Menu.Item>Terms</Menu.Item>
                  <Menu.Item>Privacy</Menu.Item>
                  <Menu.Item>Security</Menu.Item>
               </Menu>
               <p>&copy; 2021 Luxe Animal Spa, LLC. All rights reserved.</p>
            </Col>
         </Row>
      </AntFooter>
   );
};

export default memo(Footer);
