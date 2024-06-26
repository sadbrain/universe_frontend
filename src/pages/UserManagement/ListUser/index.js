import UserList from '../../../components/UserList';
import { Link } from 'react-router-dom';
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function ListUser() {
   const [users, setUsers] = useState([]);
   const [companies, setCompanies] = useState([]);
   useEffect(() => {
      try {
         const token = localStorage.getItem('token');
         const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/v1',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const userManagers = async () => {
            const res = await axiosInstance.get('/users');
            const data = res.data.data;
            setUsers(data);
         };
         userManagers();
         const companyManagers = async () => {
            const res = await axiosInstance.get('/companies');
            const data = res.data.data;
            setCompanies(data);
         };
         companyManagers();
      } catch (error) {
         console.error(error);
      }
   }, []);

   return (
      <div className="container">
         <h1 className="color-custom text-center title-size">User list</h1>
         <button className="mb-3 btn-pink content-size rounded-10 text-right">
            <Link to="/admin/user/create" className="text-white main-size bold-text text-decoration-none">
               Create+
            </Link>
         </button>

         <table className="table table-bordered">
            <thead>
               <tr className="color-custom content-size border-dark">
                  <th style={{ color: '#ff6699' }}>User name</th>
                  <th style={{ color: '#ff6699' }}>Email</th>
                  <th style={{ color: '#ff6699' }}>Phone</th>
                  <th style={{ color: '#ff6699' }}>Company</th>
                  <th style={{ color: '#ff6699' }}>Lock-Unlock</th>
                  <th style={{ color: '#ff6699' }}>Action</th>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <UserList
                     id={user.id}
                     userName={user.name}
                     email={user.email}
                     phoneNumber={user.phone}
                     company={user.company !== null ? user.company.name : ''}
                     locked={user.locked}
                  />
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default ListUser;
