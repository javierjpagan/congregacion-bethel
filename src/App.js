import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/navbar/";
import Inicio from "./components/pages/inicio/";


class App extends Component {
render () {
  return (
    <div>
    <Navbar />
    <Inicio />
    </div>
  )
}
}


export default App;
