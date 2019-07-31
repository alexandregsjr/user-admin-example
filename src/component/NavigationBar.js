import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class NavigationBar extends Component {

    render() {
      return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <span class="navbar-brand mb-0 h1">EasyAdmin</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <nav class="navbar-nav">
                  <Link class="nav-link" to={"/"}>Home <span class="sr-only">(current)</span></Link>
                  <Link class="nav-link" to={"/users"}>Users</Link>
                  <Link class="nav-link" to={"/roles"}>Roles</Link>
                  <Link class="nav-link" to={"/reports"}>Reports</Link>
              </nav>
              <form class="form-inline my-2 my-lg-0 ml-auto">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        );
    }
}

export default NavigationBar;
