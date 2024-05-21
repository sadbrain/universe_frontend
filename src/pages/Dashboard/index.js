import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);

function Dashboard() {
   const canvasRef1 = useRef(null);
   const canvasRef2 = useRef(null);
   let chart1, chart2;

   useEffect(() => {
      // Create the first chart
      const canvasElement1 = canvasRef1.current;
      if (canvasElement1) {
         chart1 = new ChartJS(canvasElement1.getContext('2d'), {
            type: 'bar',
            data: {
               labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
               datasets: [
                  {
                     label: 'Population',
                     data: [250, 650, 800, 850, 900, 750, 850, 500, 980],
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
                     text: 'Chart 1',
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

      // Create the second chart
      const canvasElement2 = canvasRef2.current;
      if (canvasElement2) {
         chart2 = new ChartJS(canvasElement2.getContext('2d'), {
            type: 'bar',
            data: {
               labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
               datasets: [
                  {
                     label: 'Population',
                     data: [250, 650, 800, 850, 900, 750, 850, 500, 980],
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
                     text: 'Chart 2',
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

      // Cleanup function to destroy the chart instances
      return () => {
         if (chart1) {
            chart1.destroy();
         }
         if (chart2) {
            chart2.destroy();
         }
      };
   }, []);
   return (
      <div className="container">
         <div className="row ml-10 mr-10">
            <div className="col-1"></div>
            <div className="col-3 maincontent-size bold-text">
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white m-2">Total price</p>
                  <p>30,000,000 USD</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white m-2">Current monthly</p>
                  <p>20,000,000 USD</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white m-2">Total orders</p>
                  <p>5,000</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white m-2">Monthly orders</p>
                  <p>2,000</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white m-2">Total</p>
                  <p>2,000</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white m-2">Monthly</p>
                  <p>2,000</p>
               </div>
            </div>
            <div className="col-7">
               <canvas ref={canvasRef1} id="chart1"></canvas>
               <canvas ref={canvasRef2} id="chart2"></canvas>
            </div>
            <div className="col-1"></div>
         </div>
      </div>
   );
}

export default Dashboard;
