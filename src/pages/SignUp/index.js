import React, { useState } from 'react';
import './index.css';

function SignUp() {
   const [role, setRole] = useState('customer');

   const handleRoleChange = (event) => {
      setRole(event.target.value);
   };

   return (
      <div className="form-container">
         <div className="image-container">
            <img
               src="https://inkythuatso.com/uploads/thumbnails/800/2022/05/1-anh-gai-xinh-2k4-inkythuatso-07-15-20-27.jpg"
               alt="Your Image"
            />
         </div>
         <div className="form-wrapper">
            <div className="form-header">
               <h1>UNIVERSE</h1>
               <h2>Register To Universe</h2>
            </div>
            <div className="signup-options">
               <button className="google-signup">
                  <img
                     src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                     alt="Google Logo"
                  />
                  Sign up with Google
               </button>
               <button className="facebook-signup">
                  <img
                     src="https://i0.wp.com/ladolcevitasarasota.com/wp-content/uploads/2023/03/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png?fit=1000%2C1000&ssl=1&w=640"
                     alt="Facebook Logo"
                  />
                  Sign up with Facebook
               </button>
            </div>
            <p className="or">— OR —</p>
            <form>
               <div className="input-container">
                  <input type="email" placeholder="Email Address" className="input-field" />
                  <div className="underline"></div>
               </div>
               <div className="password-fields">
                  <div className="input-container">
                     <input type="password" placeholder="Password" className="input-field" />
                     <div className="underline"></div>
                  </div>
                  <div className="input-container">
                     <input type="password" placeholder="Confirm Password" className="input-field" />
                     <div className="underline"></div>
                  </div>
               </div>
               <div className="contact-fields">
                  <div className="input-container">
                     <input type="text" placeholder="Fullname" className="input-field" />
                     <div className="underline"></div>
                  </div>
                  <div className="input-container">
                     <input type="tel" placeholder="Phone Number" className="input-field" />
                     <div className="underline"></div>
                  </div>
               </div>
               <div className="address-fields">
                  <div className="input-container">
                     <input type="text" placeholder="Street Name" className="input-field" />
                     <div className="underline"></div>
                  </div>
                  <div className="input-container">
                     <input type="text" placeholder="Ward/Commune" className="input-field" />
                     <div className="underline"></div>
                  </div>
               </div>
               <div className="address-fields">
                  <div className="input-container">
                     <input type="text" placeholder="District/District" className="input-field" />
                     <div className="underline"></div>
                  </div>
                  <div className="input-container">
                     <input type="text" placeholder="City/Province" className="input-field" />
                     <div className="underline"></div>
                  </div>
               </div>
               <div className="role-selection">
                  <input
                     type="radio"
                     id="customer"
                     name="role"
                     value="customer"
                     checked={role === 'customer'}
                     onChange={handleRoleChange}
                  />
                  <label htmlFor="customer">Customer</label>
                  <input
                     type="radio"
                     id="company"
                     name="role"
                     value="company"
                     checked={role === 'company'}
                     onChange={handleRoleChange}
                  />
                  <label htmlFor="company">Company</label>
               </div>
               {role === 'company' && (
                  <div className="terms-menu">
                     <ul>
                        <li>
                           <input type="radio" id="term1" name="terms" value="term1" />
                           <label htmlFor="term1">Công ty TNHH AO quần</label>
                        </li>
                        <li>
                           <input type="radio" id="term2" name="terms" value="term2" />
                           <label htmlFor="term2">Công ty TNHH AO quần</label>
                        </li>
                        <li>
                           <input type="radio" id="term3" name="terms" value="term3" />
                           <label htmlFor="term3">Công ty TNHH AO quần</label>
                        </li>
                     </ul>
                  </div>
               )}
               <button type="submit" className="create-account">
                  Create Account
               </button>
            </form>
            <p className="login-link">
               Already have an account? <a href="#">Login</a>
            </p>
         </div>
      </div>
   );
}

export default SignUp;