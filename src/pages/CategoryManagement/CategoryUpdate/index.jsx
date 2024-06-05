import React, { useState, useEffect } from 'react';
import { Button, Input, Form } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL, vAPI } from '~/enums/core';
import { toast } from 'react-toastify';

const CreateCategory = () => {
   const [category, setCategory] = useState('');
   const { id } = useParams();
   const navigate = useNavigate();
   useEffect(() => {
      logCategory();
   }, []);
   const logCategory = async () => {
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `categories/${id}`;
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      };

      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         setCategory(responseObj.data);
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   const onFinish = async () => {
      // Xử lý logic lưu danh mục mới vào hệ thống
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `categories/${id}`;
      const options = {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({ ...category }),
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         if (response.status === 200) {
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
               Category Update
            </h2>
         </div>
         <Form onFinish={onFinish}>
            <Form.Item
               name="category"
               label={<span style={{ fontSize: '30px', color: '#ff6699' }}>Category Name :</span>}
               // rules={[{ required: true, message: 'Enter category name, please !' }]}
            ></Form.Item>
            <Input
               style={{ width: '1000px', height: '40px ', marginLeft: '15px' }}
               placeholder="Enter category, please!"
               value={category.name}
               onChange={(e) => setCategory((prev) => ({ ...prev, name: e.target.value }))}
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
                  Update
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
