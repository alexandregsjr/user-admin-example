import React, { Component } from 'react';
import RolesTable from '../component/RolesTable';


class RolesPage extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="conteiner d-flex flex-column">
                                <span class="h2 mb-0 text-dark block mt-5">Roles</span>
                                <div class="mt-2">
                                    <RolesTable/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RolesPage;