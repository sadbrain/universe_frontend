import { useState, useEffect } from 'react';
import './index.css';
import FormControlM from '../../../components/FormControlM';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RoleRadio from '../../../components/RoleRadio';
import { useParams } from 'react-router-dom';
function EditUser() {
   const navigate = useNavigate();
   const { id } = useParams();
   const [user, setUser] = useState({});
   const roleValue = parseInt(localStorage.getItem('role'));
   const company_id = parseInt(localStorage.getItem('company_id'));
   const [FormData, setFormData] = useState({
      user: {
         company_id: company_id,
         role_id: roleValue,
      },
   });
   const handleRoleChange = (value) => {
      setFormData((prevFormData) => ({
         ...prevFormData,
         user: {
            ...prevFormData.user,
            role_id: value,
            company_id: value === 2 ? company_id : null,
         },
      }));
   };
   const [roles, setRoles] = useState([]);
   const handleEditUser = (e) => {
      e.preventDefault();
      try {
         localStorage.setItem(
            'token',
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTcyOTA1NzAsImV4cCI6MTcxNzI5NDE3MCwibmJmIjoxNzE3MjkwNTcwLCJqdGkiOiJZTE02STk3SHZ5djNXVGlNIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.l-3d7DAhEMDwcUSTbmOS91BGskTfh2PoOxykLbx3XIE',
         );
         const token = localStorage.getItem('token');
         const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/v1',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const editUser = async () => {
            const res = await axiosInstance.put(`/users/perrmission/${id}`, FormData.user);
            const data = res;
            navigate('/admin/user');
         };
         editUser();
      } catch (error) {
         console.error(error);
      }
   };
   useEffect(() => {
      try {
         localStorage.setItem(
            'token',
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTcyOTA1NzAsImV4cCI6MTcxNzI5NDE3MCwibmJmIjoxNzE3MjkwNTcwLCJqdGkiOiJZTE02STk3SHZ5djNXVGlNIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.l-3d7DAhEMDwcUSTbmOS91BGskTfh2PoOxykLbx3XIE',
         );
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
         const getUser = async () => {
            const res = await axiosInstance.get(`/users/${id}`, FormData.user);
            setUser(res.data.data);
            console.log('User: ', user);
         };
         getUser();
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
               <FormControlM label="Name: " value={user.name} placholder={user.name} name="user.name" disabled />
               <FormControlM label="Email: " type="email" value={user.email} name="user.email" disabled />
               <FormControlM label="Phone Number: " type="tel" value={user.phone} name="user.phone" disabled />

               <div className="row">
                  <div className="col-6">
                     <FormControlM
                        label="Street Address: "
                        value={user.street_address}
                        name="user.street_address"
                        disabled
                     />
                  </div>
                  <div className="col-6">
                     <FormControlM
                        label="District Address: "
                        value={user.district_address}
                        name="user.district_address"
                        disabled
                     />
                  </div>
               </div>
               <FormControlM label="City: " value={user.city} name="user.city" disabled />
               <RoleRadio onRoleChange={handleRoleChange} name="user.role_id" />
               <div className="row mt-2">
                  <div className="col-6"></div>
                  <div className="col-6">
                     <button
                        onClick={handleEditUser}
                        type="submit"
                        value="Place Order"
                        className="card-summary_place-order form-control"
                     >
                        Edit
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </form>
   );
}

export default EditUser;
