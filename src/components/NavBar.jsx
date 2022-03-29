import React from "react";
import { useDispatch } from "react-redux";
import { Logout } from "../actions/auth";
import { limpiar } from "../actions/nominal";

export const NavBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(limpiar());
    dispatch(Logout());
  };

  return (
    <nav className="green">
      <div className="nav-wrapper">
        <span className="brand-logo">Calculadora Nominal</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button
              onClick={handleLogout}
              className="btn red waves-effect waves-light btn"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
