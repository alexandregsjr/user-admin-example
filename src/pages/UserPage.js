import React, { Component } from 'react';
import UserTable from '../component/UserTable';


class UserPage extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="col">
                        <div class="row">
                            <span class="h2 mb-0 text-dark block mt-5">Users</span>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-lg-8">
                            <UserTable/>
                        </div>
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">User name</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

export default UserPage;