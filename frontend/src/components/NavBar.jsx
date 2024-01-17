import React from "react";

function NavBar() {
  return (
    <div className="containerNavBar">
      <div className="nav">
        <div className="logo">
          <img src="https://i.imgur.com/3f9ZC0z.png" alt="logo" />
        </div>
        <div className="links">
          <h3>Tous les produits</h3>
          <h3>Crème de jour</h3>
          <h3>Crème de nuit</h3>
          <h3>couleurs</h3>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
