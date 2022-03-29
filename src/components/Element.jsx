import React from "react";

export const Element = ({ data }) => {
  const { fecha, pago } = data;
  let FechaFormato;

  if (fecha.seconds) {
    const date = fecha.toDate();
    FechaFormato = date.toLocaleString();
  } else {
    FechaFormato = fecha;
  }

  return (
    <>
      <td>{FechaFormato}</td>
      <td>{pago}</td>
      <td>
        <button className="btn red">Borrar</button>
      </td>
    </>
  );
};
