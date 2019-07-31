import React, { Component } from 'react';


class HomePage extends Component {
    render() {
        return (
            <div>
                <div class="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
                    <span class="h1 mb-4 w-100 text-center text-dark">Welcome to EasyAdmin</span>
                    <span class="text-center text-dark w-100">Use the menu above to navigate between pages</span>
                </div>
            </div>
        );
    }
}

export default HomePage;
