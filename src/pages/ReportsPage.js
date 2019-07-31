import React, { Component } from "react";
import ApexVerticalBarChart from '../component/ApexVerticalBarChart';
import ChartjsHorizontalBarChart from '../component/ChartjsHorizontalBarChart';
import ApexLineChart from '../component/ApexLineChart';
import ChartjsAreaChart from '../component/ChartjsAreaChart';

class ReportsPage extends Component {
  render() {
    return (
        <div>
            <div class="container">
                <div class="col">
                    <div class="row">
                        <span class="h2 mb-0 text-dark block mt-5">Reports</span>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-6">
                    <span class="h4">Apex Charts</span>
                        <div class="card rounded-10 shadow-sm mt-3">
                            <div class="container mt-3 justify-content-center align-items-center">
                                <ApexVerticalBarChart/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <span class="h4">Chart.js</span>
                        <div class="card rounded-10 shadow-sm mt-3">
                            <div class="container mt-3 justify-content-center align-items-center">
                                <ChartjsHorizontalBarChart/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-6">
                        <div class="card rounded-10 shadow-sm mt-3">
                            <div class="container mt-3 justify-content-center align-items-center">
                                <ApexLineChart/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card rounded-10 shadow-sm mt-3">
                            <div class="container mt-3 justify-content-center align-items-center">
                                <ChartjsAreaChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ReportsPage;