import React, { Component } from "react";
import './style.css';

class Navbar extends Component {
    render() {
        return(

            <div className="row align-items-center justify-content-center">
            <div className="col-md-9 text-center" data-aos="fade">
            <div className="main-navbar">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/conocenos">Conócenos</a></li>
                            <li><a href="/servicios">Servicios & Horarios</a></li>
                            <li><a href="/vestimenta">Codigo de Vestimenta</a></li>
                            <li><a href="/donativos">Donativos</a></li>
                            <li><a href="/sobrenosotros">Sobre Nosotros</a></li>
                            <li><a href="/contactanos">Contáctanos</a></li>
                        </div>
                        </div>
                        </div>



        )
    }
}

export default (Navbar);