import React, { Component } from 'react';

class RolesTable extends Component {
    render() {
        return (
            <table class="table table-bordered table-sm table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Admin</td>
                        <td>Full Access to All Functionalities</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Developer</td>
                        <td>Only developer tools</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Quality Assurance</td>
                        <td>Only QA tools and bug tracker</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default RolesTable;
