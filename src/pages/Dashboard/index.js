import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Dashboard() {
   const Chart = () => {
      let newChart = document.getElementById('new_chart').getContext('2d');
      // Global Options
      Chart.defaults.global.defaultFontFamily = 'Volkhov';
      Chart.defaults.global.defaultFontSize = 16;
      Chart.defaults.global.defaultFontColor = '#F624ED';

      let new_massPopChart = new Chart(newChart, {
         type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
         data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            datasets: [
               {
                  label: 'Population',
                  data: [250, 650, 800, 850, 900, 750, 850, 500, 980],
                  //backgroundColor:'green',
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
                     'rgba(246, 36, 237, 1)',
                  ],
                  borderWidth: 1,
                  borderColor: '#777',
                  hoverBorderWidth: 3,
                  hoverBorderColor: '#000',
               },
            ],
         },
         options: {
            title: {
               display: true,
               text: 'New',
               fontSize: 25,
            },
            legend: {
               display: true,
               position: 'right',
               labels: {
                  fontColor: '#000',
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
            tooltips: {
               enabled: true,
            },
         },
      });
   };
   return (
      <div className="container">
         <div className="row ml-10 mr-10">
            <div className="col-1"></div>
            <div className="col-3 maincontent-size bold-text">
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white">Total price</p>
                  <p>30,000,000 USD</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white ">Current monthly </p>
                  <p>20,000,000 USD</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white ">Total orders </p>
                  <p>5,000</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white ">Monthly orders </p>
                  <p>2,000</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white ">Total</p>
                  <p>2,000</p>
               </div>
               <div className="bg-custom rounded-10 text-center mt-5 p-3">
                  <p className="text-white ">Monthly</p>
                  <p>2,000</p>
               </div>
            </div>
            <div className="col-7">
               <canvas id="revenue_chart"></canvas>
               <canvas id="new_chart"></canvas>
            </div>
            <div className="col-1"></div>
         </div>
         <Chart />
         <Chart />
      </div>
   );
}

export default Dashboard;
