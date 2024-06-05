import './index.css';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import FormControlM from '~/components/FormControlM';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL, vAPI, BE_URL } from '~/enums/core';
import axios from 'axios';

function ProductUpdate() {
   const navigate = useNavigate();
   const { id } = useParams();
   const [productContainer, setProductContainer] = useState({});
   const prefix = 'products/';

   const [formData, setFormData] = useState({
      product: {
         id: 0,
         name: '',
         description: '',
         price: 0,
      },
      discount: {
         id: 0,
         start_date: '',
         end_date: '',
         price: 0,
      },
      inventory: {
         id: 0,
         quantity: 0,
      },
      image: '',
      sizes: [],
      existingSizes: [],
      existingColors: [],
      colors: [],
   });
   useEffect(() => {
      logProduct();
   }, []);
   useEffect(() => {
      if (productContainer) {
         setFormData((prev) => ({
            ...prev,
            product: {
               id: productContainer.id,
               name: productContainer.name,
               description: productContainer.description,
               price: productContainer.price,
            },
            discount: {
               start_date: productContainer?.discount?.start_date
                  ? new Date(productContainer?.discount?.start_date).toISOString().slice(0, 10)
                  : '',
               end_date: productContainer?.discount?.end_date
                  ? new Date(productContainer?.discount?.end_date).toISOString().slice(0, 10)
                  : '',
               price: productContainer?.discount?.price,
            },
            inventory: {
               quantity: productContainer?.inventory?.quantity,
            },
            existingSizes: productContainer?.inventory?.sizes,
            existingColors: productContainer?.inventory?.colors,
         }));
      }
   }, [productContainer]);
   const logProduct = async () => {
      const url = BASE_URL + vAPI + prefix + `${id}`;
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
         setProductContainer(responseObj.data);
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
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

   const handleRemoveExistingSize = async (e, id) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + prefix + `delete-size-more/${id}`;
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
         toast.success('Product size deleted successfully');
         setFormData((prevFormData) => ({
            ...prevFormData,
            existingSizes: prevFormData.existingSizes.filter((s) => s.id !== id),
         }));
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   const handleAddNewSizeInDb = async (e, index) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + prefix + `create-size-more/${productContainer?.inventory?.id}`;
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({ sizes: [formData.sizes[index]] }),
      };
      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }
         const responseObj = await response.json();

         if (response.status === 201) {
            toast.success(responseObj.success_messages);
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   const handleAddNewColorInDb = async (e, index) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + prefix + `create-color-more/${productContainer?.inventory?.id}`;
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({ colors: [formData.colors[index]] }),
      };

      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }
         const responseObj = await response.json();
         if (response.status === 201) {
            toast.success(responseObj.success_messages);
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   const handleRemoveExistingColor = async (e, id) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + prefix + `delete-color-more/${id}`;
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
         toast.success('Product color deleted successfully');
         setFormData((prevFormData) => ({
            ...prevFormData,
            existingColors: prevFormData.existingColors.filter((c) => c.id !== id),
         }));
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   const updateProduct = async (e) => {
      e.preventDefault();
      const newFormData = { ...formData };
      newFormData.existingSizes = newFormData.existingSizes.filter((s) => {
         return s.name !== '' && s.quantity > 1;
      });
      newFormData.existingColors = newFormData.existingColors.filter((c) => {
         return c.name !== '' && c.quantity > 1;
      });

      const formDataToSend = new FormData();
      formDataToSend.append('product[name]', newFormData.product.name);
      formDataToSend.append('product[id]', newFormData.product.id);
      formDataToSend.append('product[description]', newFormData.product.description);
      formDataToSend.append('product[price]', newFormData.product.price);
      formDataToSend.append('discount[start_date]', newFormData.discount.start_date);
      formDataToSend.append('discount[end_date]', newFormData.discount.end_date);
      formDataToSend.append('discount[price]', newFormData.discount.price);
      formDataToSend.append('inventory[quantity]', newFormData.inventory.quantity);
      formDataToSend.append('image', newFormData.image);
      newFormData.existingColors.forEach((c, i) => {
         formDataToSend.append(`colors[${i}][name]`, c.name);
         formDataToSend.append(`colors[${i}][id]`, c.id);
         formDataToSend.append(`colors[${i}][quantity]`, c.quantity);
      });
      newFormData.existingSizes.forEach((s, i) => {
         formDataToSend.append(`sizes[${i}][name]`, s.name);
         formDataToSend.append(`sizes[${i}][id]`, s.id);
         formDataToSend.append(`sizes[${i}][quantity]`, s.quantity);
      });
      console.log(newFormData);
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `products/${newFormData.product.id}`;
      const api = axios.create({
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      try {
         const response = await api.put(url, formDataToSend);
         console.log(response);

         if (response.status === 200) {
            toast.success(response.data.success_messages);
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   return (
      <form className="my-5" id="orderForm">
         <div className="col-12 text-center mb-5">
            <h2 className="py-2 table-heading">Update Product</h2>
         </div>
         <div className="row col-12">
            <img
               style={{
                  objectFit: 'contain',
                  width: '50%',
                  borderRadius: '20px',
                  margin: '10px auto',
                  height: '400px',
               }}
               src={
                  productContainer?.thumbnail?.includes('https://placehold.co')
                     ? productContainer?.thumbnail
                     : BE_URL + productContainer?.thumbnail
               }
            />
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
            <FormControlM label="Images:" type="file" value={formData.image} onChange={handleChange} name="image" />
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
                  {formData.existingSizes?.map((s, i) => (
                     <div key={i} className="row w-100 text-start my-2">
                        <FormControlM
                           label={`Name ${i + 1}:`}
                           value={s.name}
                           onChange={handleChange}
                           name={`existingSizes.${i}.name`}
                           style={{ width: '48%' }}
                        />
                        <FormControlM
                           label={`Quantity ${i + 1}:`}
                           type="number"
                           value={s.quantity}
                           onChange={handleChange}
                           name={`existingSizes.${i}.quantity`}
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
                           onClick={(e) => handleRemoveExistingSize(e, s.id)}
                        >
                           x
                        </button>
                     </div>
                  ))}
                  {formData.sizes?.map((s, i) => (
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
                        <div style={{ width: '1%', display: 'flex', flexDirection: 'column' }}>
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
                           <button
                              style={{
                                 border: 'none',
                                 outline: 'none',
                                 backgroundColor: '#ff6699',
                                 color: '#000',
                                 borderRadius: '50%',
                                 width: '48ox',
                                 height: '48px',
                                 fontSize: '30px',
                              }}
                              onClick={(e) => handleAddNewSizeInDb(e, i)}
                           >
                              +
                           </button>
                        </div>
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
                  {formData.existingColors?.map((c, i) => (
                     <div key={i} className="row w-100 text-start my-2">
                        <FormControlM
                           label={`Name ${i + 1}:`}
                           value={c.name}
                           onChange={handleChange}
                           name={`existingColors.${i}.name`}
                           style={{ width: '48%' }}
                        />
                        <FormControlM
                           label={`Quantity ${i + 1}:`}
                           type="number"
                           value={c.quantity}
                           onChange={handleChange}
                           name={`existingColors.${i}.quantity`}
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
                           onClick={(e) => handleRemoveExistingColor(e, c.id)}
                        >
                           x
                        </button>
                     </div>
                  ))}
                  {formData.colors?.map((c, i) => (
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
                        <div style={{ width: '1%', display: 'flex', flexDirection: 'column' }}>
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
                           <button
                              style={{
                                 border: 'none',
                                 outline: 'none',
                                 backgroundColor: '#ff6699',
                                 color: '#000',
                                 borderRadius: '50%',
                                 width: '48ox',
                                 height: '48px',
                                 fontSize: '30px',
                              }}
                              onClick={(e) => handleAddNewColorInDb(e, i)}
                           >
                              +
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="row my-4">
               <div className="col-12 text-end">
                  <Link
                     to={'/admin/product/create'}
                     style={{
                        fontSize: '30px',
                        color: '#fff',
                        backgroundColor: '#0F881B',
                        padding: '30px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        marginRight: '20px',
                     }}
                     onClick={updateProduct}
                  >
                     Update
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

export default ProductUpdate;
