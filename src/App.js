import React, { Component } from 'react';

// you can condense these 2 imports into one, remove unused imports
import { BrowserRouter as Router} from "react-router-dom";
import { Switch, Route, Redirect, Link, HashRouter } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar/";
import Inicio from "./components/pages/inicio/";
import Servicios from "./components/pages/servicios/"
import Vestimenta from "./components/pages/vestimenta/"
import Recursos from "./components/pages/recursos/"
import SobreNosotros from "./components/pages/SobreNosotros/";
import Contactanos from "./components/pages/contactanos/";

// is the commented out process.env.PUBLIC_URL necessary?
// I actually think putting the routes here is better than in index.js
class App extends Component {
render () {
  return (
    // <Router path={process.env.PUBLIC_URL + '/'}>
    <div>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Inicio} />
    <Route path="/servicios" component={Servicios} />
    <Route path="/vestimenta" component={Vestimenta} />
    <Route path="/recursos" component={Recursos} />
    <Route path="/sobrenosotros" component={SobreNosotros} />
    <Route path="/contactanos" component={Contactanos} />
    </Switch>

    </div>
    // </Router>
  )
}
}


export default App;
