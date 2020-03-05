import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './style.css';

const mapContainerStyles = {
    width: '100%',
    height: '500px',
    position: 'relative',

  };

class Contactanos extends Component {

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

    render() {
        return(

<div className="ContBody container-fluid">
            <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center" data-aos="fade">
            <div className="ContHead">
<h2><strong>CONTÁCTANOS</strong></h2>
</div>
            </div>
            </div>
            

            <div className="row align-items-center justify-content-center">
<h2>Dirección Postal: HC 1 Box 29030 PMB 602, Caguas, PR 00725-8900</h2> 
</div>

<div className="row align-items-center justify-content-center">

<h2>{`Dirección Física: Carretera #1 Km. 27.0 (Frente al Parque de Soccer), 
Sector Quebrada Arenas, Bo. Río Cañas, Caguas, Puerto Rico`}</h2> 
</div>

<div className="GoogMaps" style={mapContainerStyles}>
            <Map
              google={this.props.google}
              zoom={13}
              initialCenter={{ lat: 18.3017, lng: -66.0525 }}
            >
                          <Marker 
                          position={{ lat: 18.301756, lng: -66.052734}}
          onClick={this.onMarkerClick}
          name={'Beth-El Congregación'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
                          </Map>
          </div>


<div className="row align-items-center justify-content-center">
<h2>Teléfono: (787) 486-3507</h2>   
</div>

<div className="row align-items-center justify-content-center">
<h2>Email: kehilah_beth_el@yahoo.com</h2> 
</div>
                                                </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB16-2IDJJayTklxjcMIXXhOF0pKwrRQtI'
  })(Contactanos);