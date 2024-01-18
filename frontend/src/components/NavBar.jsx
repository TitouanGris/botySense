import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="containerNavBar">
      <div className="nav">
        <div className="links">
            <NavLink to="">
          <h3>Shampoing</h3>
          </NavLink>
          <NavLink to="">
          <h3>Crèmes</h3>
          </NavLink>
          <div className="logo">
            <img className="boty" src="/images/BotySense.webp" alt="logo" />
          </div>
            <NavLink to="">
          <h3>rouge à lèvres</h3>
          </NavLink>
          <NavLink to="">
          <h3>colorations</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
