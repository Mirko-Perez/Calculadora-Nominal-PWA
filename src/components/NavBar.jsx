import React from "react";

export const NavBar = () => {
  return (
    <nav className="green">
      <div className="nav-wrapper">
        <span className="brand-logo">Calculadora Nominal</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button className="btn red waves-effect waves-light btn">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
