import Link from 'antd/es/typography/Link';
import Swal from 'sweetalert2';
function UserList(props) {
   const { userName, email, phoneNumber } = props;
   return (
      <tr>
         <td>{userName}</td>
         <td>{email}</td>
         <td className=" d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
               <span>{phoneNumber}</span>
            </div>
            <div className="d-flex ">
               <button className="btn btn-primary m-2 ">
                  <Link to={'/editUser'} className="maincontent-size text-white">
                     Edit
                  </Link>
               </button>
               <button className="btn btn-danger maincontent-size">
                 <Link className="maincontent-size text-white" onClick={() => {
                           const swalWithBootstrapButtons = Swal.mixin({
                              customClass: {
                                 confirmButton: 'btn btn-success',
                                 cancelButton: 'btn btn-danger',
                              },
                              buttonsStyling: false,
                           });
                           swalWithBootstrapButtons
                              .fire({
                                 title: 'Are you sure?',
                                 text: "You won't be able to revert this!",
                                 icon: 'warning',
                                 showCancelButton: true,
                                 confirmButtonText: 'Yes, delete it!',
                                 cancelButtonText: 'No, cancel!',
                                 reverseButtons: true,
                              })
                              .then((result) => {
                                 if (result.isConfirmed) {
                                    swalWithBootstrapButtons.fire({
                                       title: 'Deleted!',
                                       text: 'Your file has been deleted.',
                                       icon: 'success',
                                    });
                                 } else if (
                                    /* Read more about handling dismissals below */
                                    result.dismiss === Swal.DismissReason.cancel
                                 ) {
                                    swalWithBootstrapButtons.fire({
                                       title: 'Cancelled',
                                       text: 'Your imaginary file is safe :)',
                                       icon: 'error',
                                    });
                                 }
                              });
                        }}>Delete</Link>
               </button>
            </div>
         </td>
      </tr>
   );
}
export default UserList;
