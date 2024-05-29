import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from '../../../components/UserList';
import { Link } from 'react-router-dom';
import './index.css';
function ListUser() {
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
                  <th style={{ color:"#ff6699" }}>User name</th>
                  <th style={{ color:"#ff6699" }}>Email</th>
                  <th style={{ color:"#ff6699" }}>Phone</th>
                  <th style={{ color:"#ff6699" }}>Lock-Unlock</th>
                  <th style={{ color:"#ff6699" }}>Action</th>
               </tr>
            </thead>
            <tbody>
               <UserList userName="Tinh Tran" email="example@example.com" phoneNumber="12345678" />
               <UserList userName="Am" email="example@example.com" phoneNumber="12345678" />
               <UserList userName="Nhung" email="example@example.com" phoneNumber="12345678" />
               <UserList userName="Duyen" email="example@example.com" phoneNumber="12345678" />
               <UserList userName="Ngan" email="example@example.com" phoneNumber="12345678" />
            </tbody>
         </table>
      </div>
   );
}

export default ListUser;
