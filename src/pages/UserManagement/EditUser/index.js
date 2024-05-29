import { useState } from 'react';
import './index.css';
import FormControlM from '../../../components/FormControlM';
import RoleRadio from '../../../components/RoleRadio';
function EditUser() {
   const [FormData, setFormData] = useState({
      user: {
         name: 'Am hii',
         phone: '036 973 5240',
         email: 'am.y26@student.passerellesnumeriques.org',
         street_address: 'My khe 3',
         district_address: 'Son Tra',
         city: 'Da Nang',
         avatar: '',
         role: 'Customer',
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
            <h2 className="py-2 table-heading">Edit User</h2>
         </div>
         <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
               <RoleRadio />
            </div>
         </div>
         <div className="row mt-3">
            <div className="col-3"></div>
            <div className="col-6">
               <button type="submit" value="Place Order" className="card-summary_place-order form-control">
                  Edit
               </button>
            </div>
            <div className="col-3"></div>
         </div>
      </form>
   );
}

export default EditUser;
