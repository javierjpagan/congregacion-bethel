import React, { Component } from "react";
import GoogleMapReact from 'google-map-react'; // OUT
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './style.css';

const mapStyles = {
    width: '50%',
    height: '50%',
    display: 'block',
    margin: '0px auto',
    position: 'relative'

  };

class Contactanos extends Component {

    render() {
        return(

<div className="ContBody">
            <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center" data-aos="fade">
            <div className="ContHead">
<h2><strong>CONTÁCTANOS</strong></h2>
</div>
            </div>
            

<h2>Dirección Postal: HC 1 Box 29030 PMB 602, Caguas, PR 00725-8900</h2> 

<h2>{`Dirección Física: Carretera #1 Km. 27.0 (Frente al Parque de Soccer), 
Sector Quebrada Arenas, Bo. Río Cañas, Caguas, Puerto Rico`}</h2> 


      <Map className="GoogMaps"
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{ lat: 18.3017, lng: -66.0525}} 
        />
        






<h2>Conexión con Google Map para que obtengan la dirección para llegar</h2>  

<h2>Teléfono: (787) 486-3507</h2>   

<h2>Email: kehilah_beth_el@yahoo.com</h2> 
                        </div>
                        </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB16-2IDJJayTklxjcMIXXhOF0pKwrRQtI'
  })(Contactanos);