import React from "react";
import { useDispatch } from "react-redux";
import { borrarRegistro } from "../actions/nominal";

export const Element = ({ data }) => {
  const dispach = useDispatch();

  const { fecha, pago, id } = data;
  let FechaFormato;

  if (fecha.seconds) {
    const date = fecha.toDate();
    FechaFormato = date.toLocaleString();
  } else {
    FechaFormato = fecha;
  }

  const handleDelete = () => {
    dispach(borrarRegistro(id));
  };

  return (
    <>
      <td>{FechaFormato}</td>
      <td>${pago}</td>
      <td>
        <button onClick={handleDelete} className="btn red">
          <i class="material-icons">delete_forever</i>
        </button>
      </td>
    </>
  );
};
