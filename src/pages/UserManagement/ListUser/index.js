import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from '../../../components/UserList';
import Link from 'antd/es/typography/Link';
import './index.css';
function ListUser() {
   return (
      <div className="container">
         <h1 className="color-custom text-center title-size">User list</h1>
         <button className=" mb-3 btn-pink content-size rounded-10 float-right">
            <Link to="/addmoreUser" className="text-dark main-size bold-text">
               Create+
            </Link>
         </button>
         <table className="table table-bordered">
            <thead>
               <tr className="color-custom content-size border-dark text-center">
                  <th>User name</th>
                  <th>Email</th>
                  <th>Phone</th>
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
