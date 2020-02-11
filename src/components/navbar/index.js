import React, { Component, Fragment } from "react";

import NavStyle from "./components/styled/NavStyle";


class Navbar extends Component {
    render() {
        return(





            <div className="main-navbar">
            <NavStyle>
                            <li><a href="/inicio">Inicio</a></li>
                            <li><a href="/conocenos">Conócenos</a></li>
                            <li><a href="/servicios">Servicios & Horarios</a></li>
                            <li><a href="/donativos">Donativos</a></li>
                            <li><a href="/contactanos">Contáctanos</a></li>
                            </NavStyle>

                        </div>


        )
    }
}

export default (Navbar);