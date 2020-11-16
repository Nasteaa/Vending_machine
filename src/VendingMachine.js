import React from "react";
import { NavLink } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <nav className="VendingMachine">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/soda">
        Soda
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/tacos">
        Tacos
      </NavLink>
    </nav>
  );
}

export default VendingMachine;