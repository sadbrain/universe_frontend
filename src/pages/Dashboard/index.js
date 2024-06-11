import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
   Chart as ChartJS,
   BarController,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BASE_URL, vAPI } from '~/enums/core';

ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);

function Dashboard() {
   const canvasRef1 = useRef(null);
   const canvasRef2 = useRef(null);
   const [orderMode, setOrderMode] = useState('orders/get-daily-orders');
   const [totalRevenueOrder, setTotalRevenueOrder] = useState({});
   const [totalCurrentRevenueOrder, setTotalCurrentRevenueOrder] = useState({});
   let chart1, chart2;
   const createOrderChart = async () => {
      const url = BASE_URL + vAPI + orderMode;
      const token = localStorage.getItem('token');
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      };

      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         console.log(responseObj);
         const canvasElement1 = canvasRef1.current;
         if (canvasElement1) {
            chart1 = new ChartJS(canvasElement1.getContext('2d'), {
               type: 'bar',
               data: {
                  labels: responseObj.data[0].label,
                  datasets: [
                     {
                        label: 'Population',
                        data: responseObj.data[0].order_count,
                        backgroundColor: [
                           'rgba(189, 190, 198, 1)',
                           'rgba(246, 36, 237, 1)',
                           'rgba(189, 190, 198, 1)',
                           'rgba(246, 36, 237, 1)',
                           'rgba(189, 190, 198, 1)',
                           'rgba(246, 36, 237, 1)',
                           'rgba(189, 190, 198, 1)',
                           'rgba(246, 36, 237, 1)',
                           'rgba(189, 190, 198, 1)',
                        ],
                        borderWidth: 1,
                        borderColor: '#777',
                        hoverBorderWidth: 3,
                        hoverBorderColor: '#000',
                     },
                  ],
               },
               options: {
                  plugins: {
                     title: {
                        display: true,
                        text: responseObj.data[0].order_chart,
                        fontSize: 25,
                     },
                     legend: {
                        display: true,
                        position: 'right',
                        labels: {
                           color: '#000',
                        },
                     },
                     tooltip: {
                        enabled: true,
                     },
                  },
                  layout: {
                     padding: {
                        left: 50,
                        right: 0,
                        bottom: 0,
                        top: 0,
                     },
                  },
               },
            });
         }
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   useEffect(() => {
      // Create the first chart
      createOrderChart();

      // Cleanup function to destroy the chart instances
      return () => {
         if (chart1) {
            chart1.destroy();
         }
      };
   }, [orderMode]);
   useEffect(() => {
      getTotalRevenueOrder();
      getCurrentYearTotalRevenueOrder();
   }, []);
   const getTotalRevenueOrder = async () => {
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `orders/get-total-revenue-order`;
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      };

      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         setTotalRevenueOrder({ ...responseObj.data[0] });
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   const getCurrentYearTotalRevenueOrder = async () => {
      const token = localStorage.getItem('token');
      const url = BASE_URL + vAPI + `orders/get-current-year-total-revenue-order`;
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      };

      try {
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseObj = await response.json();
         setTotalCurrentRevenueOrder({ ...responseObj.data[0] });
      } catch (error) {
         console.error('Fetch error:', error.message);
         return null;
      }
   };
   return (
      <div className="container mt-5">
         <div className="row ml-10 mr-10 pt-5">
            <div className="col-3 maincontent-size bold-text">
               <div className="bg-custom rounded-10 text-center p-3">
                  <p className="text-white mb-2">Total price</p>
                  <p>$ {totalRevenueOrder.revenue_total}</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-4 p-3">
                  <p className="text-white mb-2">Current monthly</p>
                  <p>$ {totalCurrentRevenueOrder.revenue_total}</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-4 p-3">
                  <p className="text-white mb-2">Total orders</p>
                  <p>{totalRevenueOrder.order_total}</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-4 p-3">
                  <p className="text-white mb-2">Total orders current monthly</p>
                  <p>{totalCurrentRevenueOrder.order_total}</p>
               </div>
            </div>
            <div className="col-9">
               <div className="col-3 fs-4">Select display mode</div>
               <select
                  id="select_order_chart"
                  class="col-5 form-select border-0 shadow mt-3"
                  onChange={(e) => {
                     setOrderMode(e.target.value);
                  }}
               >
                  <option value="orders/get-daily-orders">Daily</option>
                  <option value="orders/get-monthly-orders">MonthLy</option>
                  <option value="orders/get-yearly-orders">YearLy</option>
               </select>
               <canvas ref={canvasRef1} id="chart1"></canvas>
               {/* <canvas ref={canvasRef2} id="chart2"></canvas> */}
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
