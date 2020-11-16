import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from './VendingMachine';


import Home from "./Home";
import Chips from "./Chips";
import Soda from "./Soda";
import Tacos from "./Tacos";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <VendingMachine />
      <Route exact path="/soda">
        <Soda />
      </Route>
      <Route exact path="/chips">
        <Chips />
      </Route>
      <Route exact path="/tacos">
        <Tacos />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </BrowserRouter>
  </div>
  )
}


export default App;