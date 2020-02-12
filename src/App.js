import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar/";
import Inicio from "./components/pages/inicio/";
import Servicios from "./components/pages/servicios/"
import Contactanos from "./components/pages/contactanos/";


class App extends Component {
render () {
  return (
    <Router>
    <div>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Inicio} />
    <Route path="/servicios" component={Servicios} />
    <Route path="/contactanos" component={Contactanos} />
    </Switch>

    </div>
    </Router>
  )
}
}


export default App;
