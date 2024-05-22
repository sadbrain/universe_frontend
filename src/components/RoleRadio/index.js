import React, { useState } from 'react';
import { Radio } from 'antd';
const RoleRadio = () => {
   const [value, setValue] = useState(1);
   const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
   };
   

   return (
      <Radio.Group onChange={onChange} value={value}>
         <div className="row">
            <div className="col-6">
               <Radio value="Customer" className="text-custom maincontent-size"
               onClick={() =>{
                  const select = document.getElementById("companySelected");
                  select.classList.add("hidden");
               }}
               >
                  Customer
               </Radio>
            </div>
            <div className="col-6">
               <Radio value="Company" className="ttext-custom maincontent-size" id="company" onClick={() =>{
                  const select = document.getElementById("companySelected");
                  select.classList.remove("hidden");
               }}>
                  Company
                  <select id="companySelected" className="hidden">
                     <option value="Công ty TNHH ÁO quần">Công ty TNHH ÁO quần</option>
                     <option value="Công ty TNHH giày dép">Công ty TNHH giày dép</option>
                     <option value="Công ty TNHH phụ kiện">Công ty TNHH phụ kiện</option>
                  </select>
               </Radio>
            </div>
         </div>
      </Radio.Group>
   );
};
export default RoleRadio;
