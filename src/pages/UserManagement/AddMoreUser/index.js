import { useContext, useState } from 'react';
import './index.css';
import FormControlM from '../../../components/FormControlM';
import RoleRadio from '../../../components/RoleRadio';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RoleContext } from './RoleContext/RoleContext';
import { RoleProvider } from './RoleContext/RoleContext';

function AddMoreUser() {
   const navigate = useNavigate();
   const [roleValue, setRoleValue] = useState()
   setRoleValue(localStorage.localStorage.getItem("role"))
   const [FormData, setFormData] = useState({
      user: {
         name: '',
         email: '',
         password: '',
         password_confirmation: '',
         phone: '',
         street_address: '',
         district_address: '',
         city: '',
         role_id: roleValue,
      },
   });
   console.log("role_id ",FormData.user.role_id)
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
               updatedFormData.user.role = value;
            } else {
               currentLevel = currentLevel[keys[i]];
            }
         }
         currentLevel[keys[keys.length - 1]] = value;

         return updatedFormData;
      });
   };
   const handleCreateUser = (e) => {
      e.preventDefault();
      try {
         localStorage.setItem(
            'token',
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTcxNDk4MjMsImV4cCI6MTcxNzE1MzQyMywibmJmIjoxNzE3MTQ5ODIzLCJqdGkiOiJmOHBqRGJxMG5aT29WMTNyIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.FTjIh11xe4tcN-VT7lJNk9xN4PKYLdzlX88SYhdSN44',
         );
         const token = localStorage.getItem('token');
         const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/v1',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const createUser = async () => {
            console.log('Form Data: ', FormData);
            const res = await axiosInstance.post('/users/register', FormData.user);
            console.log('Role_id: ', FormData.user.role_id);
            // navigate("/admin/user")
         };
         createUser();
      } catch (error) {
         console.error(error);
      }
   };
   return (
      <RoleProvider>
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
                           label="Password: "
                           type="password"
                           value={FormData.user.password}
                           onChange={handleChange}
                           name="user.password"
                        />
                     </div>
                     <div className="col-6">
                        <FormControlM
                           label="Password_confirmation: "
                           type="password"
                           value={FormData.user.password_confirmation}
                           onChange={handleChange}
                           name="user.password_confirmation"
                        />
                     </div>
                  </div>

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
                  <FormControlM label="City: " value={FormData.user.city} onChange={handleChange} name="user.city" />
                  <div className="row">
                     {/* <RoleRadio name="user.role_id" value={FormData.user.role_id} /> */}
                     <RoleRadio />
                     <input type="hidden" name="user.role_id" value={FormData.user.role_id} />
                  </div>
                  <div className="row mt-2">
                     <div className="col-6"></div>
                     <div className="col-6">
                        <button
                           onClick={handleCreateUser}
                           type="submit"
                           value="Place Order"
                           className="card-summary_place-order form-control"
                        >
                           Create
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </form>
      </RoleProvider>
   );
}

export default AddMoreUser;
