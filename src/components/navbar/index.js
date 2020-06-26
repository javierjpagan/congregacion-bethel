import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './style.css';

class Navbar extends Component {
    render() {
        return(

            <div className="row align-items-center justify-content-center">
            <div className="col-md-9 text-center" data-aos="fade">
            <div className="path_4">
            <div className="main-navbar">
                            <li className="inicio"><Link to="/">INICIO</Link></li>
                            <li className="servicios___horarios"><Link to="/servicios">SERVICIOS & HORARIOS</Link></li>
                            <li className="recursos"><Link to="/recursos">RECURSOS</Link></li>
                            <li className="sobre_nosotros"><Link to="/sobrenosotros">SOBRE NOSOTROS</Link></li>
                            <li className="cont_ctanos"><Link to="/contactanos">CONTÁCTANOS</Link></li>
                        </div>
                        </div>
                        </div>
                        </div>




        )
    }
}

export default (Navbar);