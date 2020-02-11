import React, { Component, Fragment } from "react";
import './style.css';

import styled from "styled-components";

// const NavStyle = styled.div`

//     color: black;
//     padding: 10px 10px;
//     text-transform: uppercase;
//     letter-spacing: .05em;
//     font-size: 15px;
//     text-decoration: none !important; 
//     display: inline-block;
//     float: none;
//     font-family: "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
//     box-sizing: border-box;
//     margin-left: auto;
//     margin-right: auto;
// `;


class Navbar extends Component {
    render() {
        return(




            // <NavStyle>
            <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center" data-aos="fade">
            <div className="main-navbar">
                            <li><a href="/inicio">Inicio</a></li>
                            <li><a href="/conocenos">Conócenos</a></li>
                            <li><a href="/servicios">Servicios & Horarios</a></li>
                            <li><a href="/donativos">Donativos</a></li>
                            <li><a href="/contactanos">Contáctanos</a></li>
                        </div>
                        </div>
                        </div>
                                                    // </NavStyle>


        )
    }
}

export default (Navbar);