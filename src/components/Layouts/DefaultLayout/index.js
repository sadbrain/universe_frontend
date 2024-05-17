import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function DefaultLayout() {
   return (
      <div>
         <Header />
         <div className="container content">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
}

export default DefaultLayout;
