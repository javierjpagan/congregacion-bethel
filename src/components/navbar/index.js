import React, { Component, Fragment } from "react";
import {
    NavLink,
    NavItem
} from "reactstrap";

class Navbar extends Component {
    render() {
        return(
        <Fragment>
            <NavItem></NavItem>
            <NavItem>
                <NavLink href="/inicio">
                    Inicio
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/conocenos">
                    Conocenos
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/servicios">
                    Servicios & Horarios
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/donativos">
                    Donativos
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contactanos">
                    Contactanos
                </NavLink>
            </NavItem>
        </Fragment>
        )
    }
}

export default (Navbar);