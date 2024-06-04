import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import FormControlM from '~/components/FormControlM';
import { useState } from 'react';
import { BASE_URL, vAPI, BE_URL } from '~/enums/core';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function ProductCreate() {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      product: {
         name: '',
         description: '',
         price: 0,
      },
      discount: {
         start_date: '',
         end_date: '',
         price: 0,
      },
      inventory: {
         quantity: 0,
      },
      image: null,
      sizes: [
         {
            name: '',
            quantity: 0,
         },
      ],
      colors: [
         {
            name: '',
            quantity: 0,
         },
      ],
   });
   const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData((prev) => ({
         ...prev,
         image: file,
      }));
   };
   const handleAddColor = (e) => {
      e.preventDefault();
      setFormData((prevFormData) => ({
         ...prevFormData,
         colors: [...prevFormData.colors, { name: '', quantity: 0 }],
      }));
   };
   const handleRemoveColor = (e, index) => {
      e.preventDefault();
      setFormData((prevFormData) => ({
         ...prevFormData,
         colors: prevFormData.colors.filter((_, i) => i !== index),
      }));
   };
   const handleRemoveSize = (e, index) => {
      e.preventDefault();
      setFormData((prevFormData) => ({
         ...prevFormData,
         sizes: prevFormData.sizes.filter((_, i) => i !== index),
      }));
   };
   const handleAddSize = (e) => {
      e.preventDefault();
      setFormData((prevFormData) => ({
         ...prevFormData,
         sizes: [...prevFormData.sizes, { name: '', quantity: 0 }],
      }));
   };
   const handleChange = (e) => {
      const { value, name } = e.target;
      const keys = name.split('.');
      setFormData((prev) => {
         const updatedFormData = { ...prev };
         let currentLevel = updatedFormData;

         for (let i = 0; i < keys.length - 1; i++) {
            if (Array.isArray(currentLevel[keys[i]])) {
               const index = parseInt(keys[i + 1], 10);
               currentLevel = currentLevel[keys[i]][index];
               i++;
            } else {
               currentLevel = currentLevel[keys[i]];
            }
         }
         currentLevel[keys[keys.length - 1]] = value;

         return updatedFormData;
      });
   };
   const addProduct = async (e) => {
      e.preventDefault();
      const newFormData = { ...formData };
      newFormData.sizes = newFormData.sizes.filter((s) => {
         return s.name !== '' && s.quantity > 1;
      });
      newFormData.colors = newFormData.colors.filter((c) => {
         return c.name !== '' && c.quantity > 1;
      });

      const formDataToSend = new FormData();
      formDataToSend.append('product[name]', newFormData.product.name);
      formDataToSend.append('product[description]', newFormData.product.description);
      formDataToSend.append('product[price]', newFormData.product.price);
      formDataToSend.append('discount[start_date]', newFormData.discount.start_date);
      formDataToSend.append('discount[end_date]', newFormData.discount.end_date);
      formDataToSend.append('discount[price]', newFormData.discount.price);
      formDataToSend.append('inventory[quantity]', newFormData.inventory.quantity);
      // formDataToSend.append('image', newFormData.image);
      newFormData.colors.forEach((c, i) => {
         formDataToSend.append(`colors[${i}][name]`, c.name);
         formDataToSend.append(`colors[${i}][quantity]`, c.quantity);
      });
      newFormData.sizes.forEach((s, i) => {
         formDataToSend.append(`sizes[${i}][name]`, s.name);
         formDataToSend.append(`sizes[${i}][quantity]`, s.quantity);
      });

      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + 'products';
      const api = axios.create({
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      try {
         const response = await api.post(url, formDataToSend);
         console.log(response);

         if (response.status === 201) {
            toast.success(response.data.success_messages);
            navigate('/admin/product');
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   return (
      <form method="post" className="my-5" id="orderForm" encType="multipart/form-data">
         <div className="col-12 text-center mb-5">
            <h2 className="py-2 table-heading">Create Product</h2>
         </div>
         <div className="row">
            <FormControlM label="Name:" value={formData.product.name} onChange={handleChange} name="product.name" />
            <FormControlM
               label="Description:"
               value={formData.product.description}
               onChange={handleChange}
               name="product.description"
            />
            <FormControlM
               label="Price:"
               type="number"
               value={formData.product.price}
               onChange={handleChange}
               name="product.price"
               style={{ width: '49%' }}
            />
            <FormControlM
               label="Discount:"
               type="number"
               value={formData.discount.price}
               onChange={handleChange}
               name="discount.price"
               style={{ width: '49%' }}
            />
            <FormControlM
               label="StartDate:"
               type="date"
               value={formData.discount.start_date}
               onChange={handleChange}
               name="discount.start_date"
               style={{ width: '49%' }}
            />
            <FormControlM
               label="EndDate:"
               type="date"
               value={formData.discount.end_date}
               onChange={handleChange}
               name="discount.end_date"
               style={{ width: '49%' }}
            />

            <FormControlM
               label="Quantity:"
               type="number"
               value={formData.inventory.quantity}
               onChange={handleChange}
               name="inventory.quantity"
            />
            <FormControlM label="Images:" type="file" onChange={handleFileChange} multiple name="image" />
            <div className="row my-4">
               <div className="col-6 text-start">
                  <h2>
                     <button
                        style={{
                           border: 'none',
                           outline: 'none',
                           fontSize: '30px',
                           color: '#fff',
                           backgroundColor: '#0F881B',
                           height: '60px',
                           borderRadius: '10px',
                           textDecoration: 'none',
                           width: '100%',
                        }}
                        onClick={handleAddSize}
                     >
                        + Create more size
                     </button>
                  </h2>
                  {formData.sizes.map((s, i) => (
                     <div key={i} className="row w-100 text-start my-2">
                        <FormControlM
                           label={`Name ${i + 1}:`}
                           value={s.name}
                           onChange={handleChange}
                           name={`sizes.${i}.name`}
                           style={{ width: '48%' }}
                        />
                        <FormControlM
                           label={`Quantity ${i + 1}:`}
                           type="number"
                           value={s.quantity}
                           onChange={handleChange}
                           name={`sizes.${i}.quantity`}
                           style={{ width: '48%' }}
                        />
                        <button
                           style={{
                              border: 'none',
                              outline: 'none',
                              fontSize: '40px',
                              color: '#ff6699',
                              backgroundColor: 'transparent',
                              width: '1%',
                           }}
                           onClick={(e) => handleRemoveSize(e, i)}
                        >
                           x
                        </button>
                     </div>
                  ))}
               </div>
               <div className="col-6 text-end">
                  <h2>
                     <button
                        style={{
                           border: 'none',
                           outline: 'none',
                           fontSize: '30px',
                           color: '#fff',
                           backgroundColor: '#0F881B',
                           height: '60px',
                           borderRadius: '10px',
                           textDecoration: 'none',
                           width: '100%',
                        }}
                        onClick={handleAddColor}
                     >
                        + Create more color
                     </button>
                  </h2>
                  {formData.colors.map((c, i) => (
                     <div key={i} className="row w-100 text-start my-2">
                        <FormControlM
                           label={`Name ${i + 1}:`}
                           value={c.name}
                           onChange={handleChange}
                           name={`colors.${i}.name`}
                           style={{ width: '48%' }}
                        />
                        <FormControlM
                           label={`Quantity ${i + 1}:`}
                           type="number"
                           value={c.quantity}
                           onChange={handleChange}
                           name={`colors.${i}.quantity`}
                           style={{ width: '48%' }}
                        />
                        <button
                           style={{
                              border: 'none',
                              outline: 'none',
                              fontSize: '40px',
                              color: '#ff6699',
                              backgroundColor: 'transparent',
                              width: '1%',
                           }}
                           onClick={(e) => handleRemoveColor(e, i)}
                        >
                           x
                        </button>
                     </div>
                  ))}
               </div>
            </div>

            <div className="row my-4">
               <div className="col-12 text-end">
                  <Link
                     style={{
                        fontSize: '30px',
                        color: '#fff',
                        backgroundColor: '#0F881B',
                        padding: '30px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        marginRight: '20px',
                     }}
                     onClick={addProduct}
                  >
                     + Create
                  </Link>
                  <Link
                     to={'/admin/product'}
                     style={{
                        fontSize: '30px',
                        color: '#fff',
                        backgroundColor: '#FF6699',
                        padding: '30px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                     }}
                  >
                     Back to list
                  </Link>
               </div>
            </div>
         </div>
      </form>
   );
}

export default ProductCreate;
