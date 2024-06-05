import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';
import { BASE_URL, vAPI } from '~/enums/core';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {
   const [categoryName, setCategoryName] = useState('');
   const navigate = useNavigate();

   const onFinish = async () => {
      // Xử lý logic lưu danh mục mới vào hệ thống
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `categories`;
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({ name: categoryName }),
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         if (response.status === 201) {
            toast.success(responseObj.success_messages);
            navigate('/admin/category');
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };

   return (
      <div className="container">
         <div className="col-12 text-center">
            <h2 className="py-2 table-heading" style={{ fontSize: '60px' }}>
               Category Create
            </h2>
         </div>
         <Form onFinish={onFinish}>
            <Form.Item
               name="categoryName"
               label={<span style={{ fontSize: '30px', color: '#ff6699' }}>Category Name :</span>}
               // rules={[{ required: true, message: 'Enter category name, please !' }]}
            ></Form.Item>
            <Input
               style={{ width: '1000px', height: '40px ', marginLeft: '15px' }}
               placeholder="Enter category, please!"
               value={categoryName}
               onChange={(e) => setCategoryName(e.target.value)}
            />

            <Form.Item style={{ padding: '10px 0' }}>
               <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                     background: '#ff6699',
                     marginLeft: '15px',
                     color: '#fff',
                     fontSize: '20px',
                     width: '130px',
                     height: '40px',
                  }}
               >
                  Create
               </Button>
               <Button
                  type="link"
                  href="/admin/category"
                  style={{
                     background: '#ff6699',
                     marginLeft: '15px',
                     color: '#fff',
                     fontSize: '20px',
                     width: '130px',
                     height: '40px',
                  }}
               >
                  Back To List
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default CreateCategory;
