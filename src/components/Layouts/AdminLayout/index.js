import Header from './SideBar';
import SideBar from './SideBar';

function AdminLayout({ children }) {
   return (
      <div>
         <SideBar />
         <div className="container content">{children}</div>
      </div>
   );
}

export default AdminLayout;
