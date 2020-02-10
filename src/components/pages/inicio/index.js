import React, { Component } from "react";
import {
    NavLink,
    NavItem
} from "reactstrap";

export default class Inicio extends Component {
    render() {
        return(
            <div class="site-blocks-cover" data-aos="fade" data-stellar-background-ratio="0.5">
             <img className="logo-home" src="/images/logo-bethel.jpg"></img>
            <div class="container">
              <div class="row align-items-center justify-content-center">
                <div class="col-md-7 text-center" data-aos="fade">
                  <h1><strong>CONGREGACIÓN MERSIÁNICA BETH-EL</strong></h1>
                  <h1>(Kehilah Mashiajit Beth-El)</h1>
                </div>
              </div>
            </div>
          </div>  

        )
    }
}

