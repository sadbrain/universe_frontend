import { useState, useEffect } from 'react';
import './index.css';
import FormControlM from '../../../components/FormControlM';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RoleRadio from '../../../components/RoleRadio';
import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
   toast: true,
   position: 'top-end',
   showConfirmButton: false,
   timer: 2500,
   timerProgressBar: true,
   didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
   },
});
function AddMoreUser() {
   const navigate = useNavigate();
   const roleValue = parseInt(localStorage.getItem('role'));
   const handleRoleChange = (value) => {
      setFormData((prevFormData) => ({
         ...prevFormData,
         user: {
            ...prevFormData.user,
            role_id: value,
         },
      }));
   };
   const [roles, setRoles] = useState([]);

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

   console.log('role_id ', FormData.user.role_id);
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
         const token = localStorage.getItem('token');
         const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/v1',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const createUser = async () => {
            try {
               console.log('Form Data: ', FormData);
               const res = await axiosInstance.post('/users/register', FormData.user);
               console.log('Role_id: ', FormData.user.role_id);
               Toast.fire({
                  icon: 'success',
                  title: 'Created user in successfully',
               });
               navigate('/admin/user');
            } catch (error) {
               console.log(error);
               Toast.fire({
                  icon: 'error',
                  title: 'Create user failed',
               });
            }
         };
         createUser();
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      try {
         const token = localStorage.getItem('token');
         const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/v1',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const roleManagers = async () => {
            const res = await axiosInstance.get('/users/get-roles');
            const data = res.data.data;
            setRoles(data);
            console.log('Data', roles);
         };
         roleManagers();
      } catch (error) {
         console.error(error);
      }
   }, []);
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
               <RoleRadio onRoleChange={handleRoleChange} name="user.role_id" />
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
   );
}

export default AddMoreUser;
