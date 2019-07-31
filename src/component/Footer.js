import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { groupPatternsByBaseDirectory } from 'fast-glob/out/managers/tasks';

class Footer extends Component {
    render() {
        const footerStyle = {
            backgroundColor: "#F8F8F8",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%",
        };

        const textStyle = {
            color: "gray",
        };

        const linkStyle = {
            color: "",
        }
          
        const phantom = {
          display: 'block',
          padding: '20px',
          height: '60px',
          width: '100%',
        };

        return (
            <div>
                <div style={phantom}/>
                    <div style={footerStyle}>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6">
                                    <p class="row text-right" style={textStyle}>2019 © EasyAdmin - github.com/alexandregjr</p>
                                </div>
                                <div class="col-lg-6">
                                    <div class="text-md-right footer-links d-none d-md-block">
                                        <a class="text-dark ml-0" href="/">About</a>
                                        <a class="text-dark ml-4" href="/">Support</a>
                                        <a class="text-dark ml-4" href="/">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Footer;
