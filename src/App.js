import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, HashRouter } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar/";
import Inicio from "./components/pages/inicio/";
import Servicios from "./components/pages/servicios/"
import Contactanos from "./components/pages/contactanos/";


class App extends Component {
render () {
  return (
    <Router path={process.env.PUBLIC_URL + '/'}>
    <div>
    <Navbar />
    <Switch>
    <Route exact path={process.env.PUBLIC_URL + "/"} component={Inicio} />
    <Route path={process.env.PUBLIC_URL + "/servicios"} component={Servicios} />
    <Route path={process.env.PUBLIC_URL + "/contactanos"} component={Contactanos} />
    </Switch>

    </div>
    </Router>
  )
}
}


export default App;
