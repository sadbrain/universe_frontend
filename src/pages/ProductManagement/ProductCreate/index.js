import './index.css';
import { Link } from 'react-router-dom';
import FormControlM from '~/components/FormControlM';
import { useState } from 'react';
function ProductCreate() {
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
      image: '',
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

   return (
      <form method="post" className="my-5" id="orderForm">
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
               label="Price:"
               type="number"
               value={formData.product.price}
               onChange={handleChange}
               name="product.price"
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
                  {formData.sizes.map((s, i) => (
                     <div key={i} className="row d-flex w-100 text-start my-2">
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
                  <button style={{ border: 'none', outline: 'none', marginRight: '20px' }}>
                     <Link
                        to={'/admin/product/create'}
                        style={{
                           fontSize: '30px',
                           color: '#fff',
                           backgroundColor: '#0F881B',
                           padding: '30px',
                           borderRadius: '10px',
                           textDecoration: 'none',
                        }}
                     >
                        + Create
                     </Link>
                  </button>
                  <button style={{ border: 'none', outline: 'none' }}>
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
                  </button>
               </div>
            </div>
         </div>
      </form>
   );
}

export default ProductCreate;
