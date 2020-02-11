import React, { Component } from "react";
import './style.css';


export default class Servicios extends Component {
    render() {
        return(
            <div className="ServBody">
            <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center" data-aos="fade">
            <div className="ServHead">
<h3><strong>SERVICIOS & HORARIOS</strong></h3>
            </div>
            </div>
                        </div>

    <div className="ServText">      
<container className="ContainerText">
<h1>Erev Shabbat (Víspera de Shabbat)</h1>
<h2>✡ Kabalat Shabbat (Recibimiento del Shabbat) - en los hogares a la caída del sol</h2>
</container>

 
<container className="ContainerText">
<h1>Servicio de Shabbat </h1> 
<h2>✡ Shajarit y Servicio de Toráh – 10:30 a.m. – 2:00 pm aproximadamente </h2>
<h2>✡ Oneg </h2>
<h2>✡ Estudio de Mandamientos o Fiestas Bíblicas </h2>
</container>

 
<container className="ContainerText">
<h1>Clases de Raíces Hebreas o Lenguaje Hebreo – jueves, 7:30 p.m. </h1>
</container>

<container className="ContainerText">
<h1>Servicio de Rosh Jódesh – conforme al avistamiento de la Luna Nueva </h1>
</container>

<container className="ContainerText">
<h1>Celebración de Fiestas Bíblicas – conforme al calendario hebreo </h1>
</container>
</div>  
</div>

                        


        )
    }
}

