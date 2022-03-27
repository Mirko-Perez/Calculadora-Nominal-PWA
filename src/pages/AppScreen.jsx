import React from "react";
import { useSelector } from "react-redux";

import { FormAdd } from "../components/FormAdd";
import { NavBar } from "../components/NavBar";

export const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName);

  return (
    <>
      <NavBar />

      <div className="container">
        <h1 className="center">Hola {name}</h1>
        <hr />

        <FormAdd />
      </div>
    </>
  );
};
