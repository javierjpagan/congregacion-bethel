import React, { Component } from "react";
import './style.css';


export default class Inicio extends Component {
    render() {
        return(
            <div className="site-blocks-cover" data-aos="fade" data-stellar-background-ratio="0.5">
                           <div className="row align-items-center justify-content-center">
                <div className="col-md-7 text-center" data-aos="fade">
             <img className="logo-home" src="/images/logo-bethel.jpg"></img>
            <div className="container">
                  <h1><strong>CONGREGACIÓN MERSIÁNICA BETH-EL</strong></h1>
                  <h1>(Kehilah Mashiajit Beth-El)</h1>
                </div>
              </div>
            </div>
          </div>  

        )
    }
}

