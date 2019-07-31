import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

class ChartjsAreaChart extends Component {
  render(){

    const options = {
      responsive: true,
      tooltips: {
        mode: 'index',
      },
      hover: {
        mode: 'index'
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }]
      }
    };

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My Third dataset',
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        data: [ 80, -19, 94, 15, -47, -88, 0 ],
      }, {
        label: 'My Third dataset',
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgb(255, 205, 86)',//'rgba(255, 205, 86, 0.2)',
        data: [ 150, -98, -83, 12, -53, 50, 66 ],
      }]
    };

    return(
      <Line
        data={data}
        width={100}
        height={50}
        options={options}
      />
          
    )
  }
}

export default ChartjsAreaChart;