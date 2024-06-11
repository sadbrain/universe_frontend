import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';
import axios from 'axios';
const RoleRadio = ({ onRoleChange }) => {
   const onChange = (e) => {
      onRoleChange(e.target.value);
      
   };
   const [value, setValue] = useState(1);
   const [companies, setCompanies] = useState([]);
   const [roles, setRoles] = useState([]);
   useEffect(() => {
      try {
         const token = localStorage.getItem('token');
         const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/v1',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         const companyManagers = async () => {
            const res = await axiosInstance.get('/companies');
            const data = res.data.data;
            setCompanies(data);
            console.log('Data', companies);
         };
         companyManagers();
         const roleManagers = async () => {
            const res = await axiosInstance.get('/users/get-roles');
            const data = res.data.data;
            setRoles(data);
            console.log('Data', roles);
         };
         roleManagers();
      } catch (error) {
         console.error(error);
      }
   }, []);

   return (
      <Radio.Group onChange={onChange} value={value}>
         <div className="row">
            {roles.map((role) => (
               <div className="col-6">
                  <Radio
                     key={role.id}
                     value={role.id}
                     className="text-custom content-size bold-text color-custom"
                     onClick={() => {
                        if (role.name === 'Company') {
                           const select = document.getElementById('companySelected');
                           select.classList.remove('hidden');
                        } else {
                           const select = document.getElementById('companySelected');
                           select.classList.add('hidden');
                        }
                     }}
                  >
                     {role.name}
                     <select
                        id="companySelected"
                        className="hidden"
                        onChange={(e) => {
                           const selectedCompanyId = e.target.value;
                           localStorage.setItem('company_id', selectedCompanyId);
                           console.log('company_id select:' + selectedCompanyId);
                        }}
                     >
                        {companies.map((company) => (
                           <option value={company.id} key={company.id}>
                              {company.name}
                           </option>
                        ))}
                     </select>
                  </Radio>
               </div>
            ))}
         </div>
      </Radio.Group>
   );
};
export default RoleRadio;
