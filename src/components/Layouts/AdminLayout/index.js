import SideBar from './SideBar';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function AdminLayout({ children }) {
   return (
      <div>
         <SideBar />
         <div className="content">
            <div className="container">{children}</div>
         </div>
      </div>
   );
}

export default AdminLayout;
