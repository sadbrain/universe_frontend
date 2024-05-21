import './index.css';
function Summary() {
   return (
      <form action="http://localhost:8000/api/v1/carts/summary" id="summary" method="post">
         <br />
         <div className="container-summary">
            <div className="card shadow border-0">
               <div className="card-body card-summary">
                  <div className="rounded p-2">
                     <div className="row">
                        <div className="col-12 col-lg-5 pb-4">
                           <div className="row">
                              <h4 className="d-flex justify-content-between align-items-center mb-3">
                                 <span className="user-info-title">Contact User</span>
                              </h4>
                           </div>
                           <div className="row my-3">
                              <div className="col-4">
                                 <label className="mt-3">Name</label>
                              </div>
                              <div className="col-8">
                                 <input placeholder="Enter your name ..." name="order[name]" className="form-control" />
                                 <span className="text-danger"></span>
                              </div>
                           </div>
                           <div className="row my-3">
                              <div className="col-4">
                                 <label className="mt-3">Phone Number</label>
                              </div>
                              <div className="col-8">
                                 <input
                                    placeholder="Enter your phone ..."
                                    name="order[phone]"
                                    className="form-control"
                                 />
                                 <span className="text-danger"></span>
                              </div>
                           </div>
                           <div className="row my-3">
                              <div className="col-4">
                                 <label className="mt-3">Street Address</label>
                              </div>
                              <div className="col-8">
                                 <input
                                    placeholder="Enter your street address ..."
                                    name="order[street_address]"
                                    className="form-control"
                                 />
                                 <span className="text-danger"></span>
                              </div>
                           </div>
                           <div className="row my-3">
                              <div className="col-4">
                                 <label className="mt-3">State</label>
                              </div>
                              <div className="col-8">
                                 <input
                                    placeholder="Enter your district address ..."
                                    name="order[district_address]"
                                    className="form-control"
                                 />
                                 <span className="text-danger"></span>
                              </div>
                           </div>
                           <div className="row my-3">
                              <div className="col-4">
                                 <label className="mt-3">City</label>
                              </div>
                              <div className="col-8">
                                 <input placeholder="Enter your city ..." name="order[city]" className="form-control" />
                                 <span className="text-danger"></span>
                              </div>
                           </div>

                           <p className="estimate-date ms-5">Estimate Arrival Date: 2/28/2024 - 3/6/2024</p>
                        </div>
                        <div className="col-12 col-lg-6 offset-lg-1">
                           <h4 className="d-flex justify-content-between align-items-center mb-3">
                              <span className="order-summary-title">Order Summary</span>
                           </h4>
                           <ul className="list-group mb-3">
                              <li className="list-group-item d-flex  product-summary-container box-shadow">
                                 <div className="product-summary_image col-2">
                                    <img
                                       src="https://cdn.alongwalk.info/info/wp-content/uploads/2022/12/23063734/image-huong-dan-cach-chup-anh-giay-dep-chuan-studio-cho-shop-giay-4aa9a1e4bb5e63153de3d815d676050c.jpg"
                                       alt=""
                                    />
                                 </div>
                                 <div className="product-summary_info px-1 col-3">
                                    <h6 className="product-summary_info-name my-1">
                                       Ultra-Light School Slippers for introverts
                                    </h6>
                                    <p className="">Size: M</p>
                                    <p className="">Color: blue</p>
                                 </div>
                                 <div className="product-summary_price col-7 ">
                                    <h3 className="col-4">Quantity : 01</h3>
                                    <h3 className="col-4">Price: $500.00</h3>
                                    <h3 className="col-4 product-summary_total_price">$500.00</h3>
                                 </div>

                                 <input type="hidden" name="cart_id" value="" />
                              </li>

                              <li className="list-group-item d-flex  product-summary-container box-shadow">
                                 <div className="product-summary_image col-2">
                                    <img
                                       src="https://cdn.alongwalk.info/info/wp-content/uploads/2022/12/23063734/image-huong-dan-cach-chup-anh-giay-dep-chuan-studio-cho-shop-giay-4aa9a1e4bb5e63153de3d815d676050c.jpg"
                                       alt=""
                                    />
                                 </div>
                                 <div className="product-summary_info px-1 col-3">
                                    <h6 className="product-summary_info-name my-1">
                                       Ultra-Light School Slippers for introverts
                                    </h6>
                                    <p className="">Size: M</p>
                                    <p className="">Color: blue</p>
                                 </div>
                                 <div className="product-summary_price col-7 ">
                                    <h3 className="col-4">Quantity : 01</h3>
                                    <h3 className="col-4">Price: $500.00</h3>
                                    <h3 className="col-4 product-summary_total_price">$500.00</h3>
                                 </div>

                                 <input type="hidden" name="cart_id" value="" />
                              </li>

                              <li className="list-group-item d-flex  product-summary-container box-shadow">
                                 <div className="product-summary_image col-2">
                                    <img
                                       src="https://cdn.alongwalk.info/info/wp-content/uploads/2022/12/23063734/image-huong-dan-cach-chup-anh-giay-dep-chuan-studio-cho-shop-giay-4aa9a1e4bb5e63153de3d815d676050c.jpg"
                                       alt=""
                                    />
                                 </div>
                                 <div className="product-summary_info p-1 col-3">
                                    <h6 className="product-summary_info-name my-1">
                                       Ultra-Light School Slippers for introverts
                                    </h6>
                                    <p className="">Size: M</p>
                                    <p className="">Color: blue</p>
                                 </div>
                                 <div className="product-summary_price col-7 ">
                                    <h3 className="col-4">Quantity : 01</h3>
                                    <h3 className="col-4">Price: $500.00</h3>
                                    <h3 className="col-4 product-summary_total_price">$500.00</h3>
                                 </div>

                                 <input type="hidden" name="cart_id" value="" />
                              </li>

                              <li className="list-group-item d-flex  product-summary-container box-shadow">
                                 <div className="product-summary_image col-2">
                                    <img
                                       src="https://cdn.alongwalk.info/info/wp-content/uploads/2022/12/23063734/image-huong-dan-cach-chup-anh-giay-dep-chuan-studio-cho-shop-giay-4aa9a1e4bb5e63153de3d815d676050c.jpg"
                                       alt=""
                                    />
                                 </div>
                                 <div className="product-summary_info px-1 col-3">
                                    <h6 className="product-summary_info-name my-1">
                                       Ultra-Light School Slippers for introverts
                                    </h6>
                                    <p className="">Size: M</p>
                                    <p className="">Color: blue</p>
                                 </div>
                                 <div className="product-summary_price col-7 ">
                                    <h3 className="col-4">Quantity : 01</h3>
                                    <h3 className="col-4">Price: $500.00</h3>
                                    <h3 className="col-4 product-summary_total_price">$500.00</h3>
                                 </div>

                                 <input type="hidden" name="cart_id" value="" />
                              </li>
                              <li className="list-group-item d-flex justify-content-between bg-light">
                                 <small className="f" style={{}}>
                                    Total (USD)
                                 </small>
                                 <strong className="product-summary_total_price px-2">$2000.00</strong>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className=" card-summary_footer px-4 pb-4">
                  <div className="row">
                     <div className="col-12 col-md-8 pt-2"></div>
                     <div className="col-12 col-md-4">
                        <button type="submit" value="Place Order" className="card-summary_place-order form-control">
                           Place Order
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </form>
   );
}
export default Summary;
