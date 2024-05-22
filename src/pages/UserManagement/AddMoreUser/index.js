import { useState } from 'react';
import './index.css'
import FormControlM from '../../../components/FormControlM';
import RoleRadio from '../../../components/RoleRadio';
function AddMoreUser() {
   const [FormData, setFormData] = useState({
      user: {
         name: '',
         phone: '',
         email: '',
         street_address: '',
         district_address: '',
         city: '',
         avatar: '',
         role: '',
      },
   });
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
      <form method="post" className="mt-5" id="userForm">
         <div className="col-12 text-center mb-5">
            <h2 className="py-2 table-heading">Create User</h2>
         </div>
         <div className="row">
            <div className="col-6 mt-4">
               <img src="https://cf.shopee.vn/file/be11ab46fb4528ec6793b03cefeaa1f4" alt="" className="img-cover" />
            </div>
            <div className="col-6">
               <FormControlM label="Name: " value={FormData.user.name} onChange={handleChange} name="user.name" />
               <FormControlM
                  label="Email: "
                  type="email"
                  value={FormData.user.email}
                  onChange={handleChange}
                  name="user.email"
               />
               <FormControlM
                  label="Phone Number: "
                  type="tel"
                  value={FormData.user.phone}
                  onChange={handleChange}
                  name="user.phone"
               />
               <div className="row">
                  <div className="col-6">
                     <FormControlM
                        label="Street Address: "
                        value={FormData.user.street_address}
                        onChange={handleChange}
                        name="user.street_address"
                     />
                  </div>
                  <div className="col-6">
                     <FormControlM
                        label="District Address: "
                        value={FormData.user.district_address}
                        onChange={handleChange}
                        name="user.district_address"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className="col-6">
                     <FormControlM label="City: " value={FormData.user.city} onChange={handleChange} name="user.city" />
                  </div>
                  <div className="col-6">
                     <FormControlM
                        label="Avatar: "
                        type="file"
                        value={FormData.user.avatar}
                        onChange={handleChange}
                        name="user.avatar"
                     />
                  </div>
               </div>
               <div className="row">
                 <RoleRadio />
               </div>
               <div className="row">
                  <div className="col-6"></div>
                  <div className="col-6">
                     <button type="submit" value="Place Order" className="card-summary_place-order form-control">
                       Create
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </form>
   );
}

export default AddMoreUser;
