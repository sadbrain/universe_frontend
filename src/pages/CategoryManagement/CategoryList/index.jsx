import React from 'react';
import { Table, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './index.css';
import { BASE_URL, vAPI } from '~/enums/core';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CategoryList = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      logCategories();
   }, []);
   useEffect(() => {
      if (categories) {
      }
   }, [categories]);
   async function logCategories() {
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
         setCategories(responseObj.data);
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   }

   const handleRemoveCategory = (e, id) => {
      e.preventDefault();
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Yes, delete it!',
         cancelButtonText: 'No, cancel!',
      }).then((result) => {
         if (result.isConfirmed) {
            removeCategory(id);
         } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'Your Category is safe :)', 'error');
         }
      });
   };
   async function removeCategory(id) {
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `categories/${id}`;
      const options = {
         method: 'DELETE',
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
         // const responseObj = await response.json();
         setCategories((prev) => {
            let newArray = [...prev];
            newArray = newArray.filter((p) => p.id !== id);
            return newArray;
         });
         Swal.fire('Deleted!', 'Category deleted successfully', 'success');
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   }

   const columns = [
      {
         title: <span style={{ fontSize: '30px', color: '#ff6699' }}>Numerical order</span>,
         dataIndex: 'id',
         key: 'id',
         render: (text) => <span style={{ fontSize: '20px' }}>{text}</span>,
      },
      {
         title: <span style={{ fontSize: '30px', color: '#ff6699' }}>Category name</span>,
         dataIndex: 'name',
         key: 'name',
         render: (text) => <span style={{ fontSize: '20px' }}>{text}</span>,
      },
      {
         title: '',
         dataIndex: 'id',
         key: 'delete',
         render: (id) => (
            <Button type="primary" danger style={{ fontSize: '15px' }} onClick={(e) => handleRemoveCategory(e, id)}>
               <DeleteOutlined style={{ fontSize: '20px' }} />
               Delete
            </Button>
         ),
      },
      {
         title: '',
         dataIndex: 'id',
         key: 'edit',
         render: (id) => (
            <Button type="primary" style={{ fontSize: '15px' }}>
               <EditOutlined style={{ fontSize: '20px' }} />
               <Link to={`/admin/category/update/${id}`}>Edit</Link>
            </Button>
         ),
      },
   ];
   return (
      <div className="container_cate">
         <div className="col-12 text-center">
            <h2 className="py-2 table-heading">Category List</h2>
         </div>
         <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
            <Button
               type="link"
               href="/admin/category/create"
               style={{
                  backgroundColor: '#ff6699',
                  borderColor: '#ff6699',
                  width: '100px',
                  height: '50px',
                  fontSize: '20px',
                  color: '#fff',
               }}
            >
               Create +
            </Button>
         </div>
         <Table columns={columns} dataSource={categories} />
      </div>
   );
};

export default CategoryList;
