import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Switch } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';

function UserList(props) {
   const { userName, email, phoneNumber, id, locked } = props;
   const [isLocked, setIsLocked] = useState(locked);
   const onChange = async (checked) => {
      console.log(checked);
      console.log(isLocked);
      try {
         setIsLocked(checked);
         localStorage.setItem(
            'token',
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE3MTcyMzU0NjgsImV4cCI6MTcxNzIzOTA2OCwibmJmIjoxNzE3MjM1NDY4LCJqdGkiOiJwYnFwT21UZ2pUcm5Ldms2Iiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.GC3T1OWzE82o0grqJdoDGBLjJ_jHP7052e49znQvs74',
         );
         const token = localStorage.getItem('token');
         const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/v1',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const res = await axiosInstance.get(`/users/lock-unclock/${id}`);
         const data = res.data.data;
      } catch (error) {
         setIsLocked(!isLocked);
         console.error(error);
      }
   };
   const SwitchLocked = () => <Switch defaultChecked={isLocked} onChange={onChange} />;
   return (
      <tr>
         <td>{userName}</td>
         <td>{email}</td>
         <td>{phoneNumber}</td>
         <td>
            <SwitchLocked className="d-flex justify-content-center align-items-center" />
         </td>
         <td className="d-flex justify-content-center align-items-center">
            <button className="btn btn-primary m-2">
               <Link to={`/admin/user/edit/${id}`} className="maincontent-size text-white text-decoration-none">
                  <EditFilled />
                  Edit
               </Link>
            </button>
            <button className="btn btn-danger maincontent-size  ">
               <Link
                  className="maincontent-size text-white text-decoration-none"
                  onClick={() => {
                     const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                           confirmButton: 'btn btn-success ',
                           cancelButton: 'btn btn-danger m-2',
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
                  }}
               >
                  <DeleteFilled />
                  Delete
               </Link>
            </button>
         </td>
      </tr>
   );
}
export default UserList;
