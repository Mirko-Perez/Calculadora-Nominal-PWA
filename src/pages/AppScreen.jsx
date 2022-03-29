import React from "react";
import { useSelector } from "react-redux";
import { Element } from "../components/Element";

import { FormAdd } from "../components/FormAdd";
import { NavBar } from "../components/NavBar";

export const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName);
  const data = useSelector((state) => state.nomina.data);
  return (
    <>
      <NavBar />

      <div className="container">
        <h1 className="center">Hola {name}</h1>
        <hr />

        <FormAdd />

        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento) => {
              return (
                <tr key={elemento.id}>
                  <Element data={elemento} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
