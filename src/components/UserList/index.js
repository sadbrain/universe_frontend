import Link from 'antd/es/typography/Link';
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
                  <i className="fa-solid fa-trash"></i>
                  Delete
               </button>
            </div>
         </td>
      </tr>
   );
}
export default UserList;
