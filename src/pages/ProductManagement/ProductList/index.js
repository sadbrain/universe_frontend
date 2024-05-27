import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './index.css';
function ProductList() {
   const handleRemoveProduct = (e, url) => {
      e.preventDefault();
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Yes, delete it!',
         cancelButtonText: 'No, cancel!',
      }).then((result) => {
         if (result.isConfirmed) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
         } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'Your file is safe :)', 'error');
         }
      });
   };
   return (
      <div className="">
         <div className=" my-5">
            <div className="col-12 text-center">
               <h2 className="py-2 table-heading">Product List</h2>
            </div>
            <div className="row my-4">
               <div className="col-12 text-end">
                  <Link
                     to={'/admin/product/create'}
                     style={{
                        fontSize: '30px',
                        color: '#fff',
                        backgroundColor: '#FF6699',
                        padding: '30px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                     }}
                  >
                     Create +
                  </Link>
               </div>
            </div>
            <div className="p-4">
               <div className="row col-12 d-flex justify-content-center align-items-center">
                  <table
                     id="tblData"
                     className="order-management-table table table-bordered table-striped"
                     style={{ width: 100 }}
                  >
                     <thead>
                        <tr>
                           <th>ID</th>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Rating</th>
                           <th>Qty</th>
                           <th>Discount</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>1</td>
                           <td>Clothes 1</td>
                           <td>10 000</td>
                           <td>1000</td>
                           <td>100</td>
                           <td>0%</td>
                           <td>
                              <div className=" btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link
                                    style={{ backgroundColor: '#0F881B' }}
                                    className="order-detail-button mx-4"
                                    onClick={(e) => handleRemoveProduct(e, '/admin/product/delete/1')}
                                 >
                                    Delete
                                 </Link>
                                 <Link to={'/admin/product/update/1'} className="order-detail-button mx-4">
                                    Edit
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td>Clothes 1</td>
                           <td>10 000</td>
                           <td>1000</td>
                           <td>100</td>
                           <td>50%</td>
                           <td>
                              <div className=" btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link
                                    style={{ backgroundColor: '#0F881B' }}
                                    className="order-detail-button mx-4"
                                    onClick={(e) => handleRemoveProduct(e, '/admin/product/delete/1')}
                                 >
                                    Delete
                                 </Link>
                                 <Link to={'/admin/product/update/1'} className="order-detail-button mx-4">
                                    Edit
                                 </Link>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td>Clothes 1</td>
                           <td>10 000</td>
                           <td>1000</td>
                           <td>100</td>
                           <td>25%</td>
                           <td>
                              <div className=" btn-group d-flex justify-content-center align-items-center" role="group">
                                 <Link
                                    // to={'/admin/product/delete/1'}
                                    style={{ backgroundColor: '#0F881B' }}
                                    className="order-detail-button mx-4"
                                    onClick={(e) => handleRemoveProduct(e, '/admin/product/delete/1')}
                                 >
                                    Delete
                                 </Link>
                                 <Link to={'/admin/product/update/1'} className="order-detail-button mx-4">
                                    Edit
                                 </Link>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductList;
