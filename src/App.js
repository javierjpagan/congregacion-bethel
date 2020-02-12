import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect, Link, HashRouter } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar/";
import Inicio from "./components/pages/inicio/";
import Servicios from "./components/pages/servicios/"
import Vestimenta from "./components/pages/vestimenta/"
import SobreNosotros from "./components/pages/SobreNosotros/";
import Contactanos from "./components/pages/contactanos/";


class App extends Component {
render () {
  return (
    <BrowserRouter path={process.env.PUBLIC_URL + '/'}>
    <div>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Inicio} />
    <Route path="/servicios" component={Servicios} />
    <Route path="/vestimenta" component={Vestimenta} />
    <Route path="/sobrenosotros" component={SobreNosotros} />
    <Route path="/contactanos" component={Contactanos} />
    <Route component={Inicio}/>
    </Switch>

    </div>
    </BrowserRouter>
  )
}
}


export default App;
