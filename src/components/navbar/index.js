import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './style.css';

class Navbar extends Component {
    render() {
        return(

            <div className="row align-items-center justify-content-center">
            <div className="col-md-9 text-center" data-aos="fade">
            <div className="main-navbar">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/servicios">Servicios & Horarios</Link></li>
                            <li><Link to="/vestimenta">Código de Vestimenta</Link></li>
                            {/* <li><Link to="/donativos">Donativos</Link></li> */}
                            <li><Link to="/recursos">Recursos</Link></li>
                            <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
                            <li><Link to="/contactanos">Contáctanos</Link></li>
                        </div>
                        </div>
                        </div>



        )
    }
}

export default (Navbar);