import React, { Component } from "react";
import {HorizontalBar} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

class ChartjsHorizontalBarChart extends Component {
  render(){
    const options = {
        annotation: {
            annotations: [{
                drawTime: 'afterDatasetsDraw',
                borderColor: 'red',
                borderDash: [2, 2],
                borderWidth: 2,
                mode: 'vertical',
                type: 'line',
                value: 10,
                scaleID: 'x-axis-0',
          }]
        },
        maintainAspectRation: false
    };

    const data = {
      labels: ["January","February","March","April","May","June","July"],
      datasets: [
        {
          label:"My First Dataset",
          data:[65,59,80,81,56,55,40],
          fill: false, 
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }
      ]
    };

    return(
      <HorizontalBar
        data={data}
        width={100}
        height={50}
        options={options}
      />
          
    )
  }
}

export default ChartjsHorizontalBarChart;