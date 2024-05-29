import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from '../../../components/UserList';
import { Link } from 'react-router-dom';
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function ListUser() {
   const [users, setUsers] = useState([]);
   useEffect(() => {
      try {
         localStorage.setItem(
            'token',
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTY5OTg0MDksImV4cCI6MTcxNzAwMjAwOSwibmJmIjoxNzE2OTk4NDA5LCJqdGkiOiJIZng1Szd6akE0ZUx1MHNqIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.-xasqUYyd0dIJHNLbMKhxAmvsWFoKoburA9DzSv-_EQ',
         );
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
            console.log('Data', users);
         };
         userManagers();
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
                  <th style={{ color: '#ff6699' }}>Lock-Unlock</th>
                  <th style={{ color: '#ff6699' }}>Action</th>
               </tr>
            </thead>
            <tbody>
              {
               users.map ((user) =>(
                  <UserList id= {user.id} userName={user.name} email={user.email} phoneNumber={user.phone} locked={user.locked} />
               ))
              }
            </tbody>
         </table>
      </div>
   );
}

export default ListUser;
