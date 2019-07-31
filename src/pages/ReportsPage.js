import React, { Component } from "react";
import FirstChart from '../component/FirstChart';
import SecondChart from '../component/SecondChart';

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
                                <FirstChart/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <span class="h4">Apex Charts</span>
                        <div class="card rounded-10 shadow-sm mt-3">
                            <div class="container mt-3 justify-content-center align-items-center">
                                <SecondChart/>
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