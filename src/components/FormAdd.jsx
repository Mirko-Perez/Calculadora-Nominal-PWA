import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nominal";

export const FormAdd = () => {
  const [viewForm, setViewForm] = useState(false);

  const [cantidadPago, setCantidadPago] = useState({
    precioHora: "",
    horas: "",
  });

  const { precioHora, horas } = cantidadPago;

  const dispatch = useDispatch();
  const handleAdd = () => {
    setViewForm(!viewForm);
    // dispatch(crearRegistro());
  };

  const handleChange = (e) => {
    setCantidadPago({
      ...cantidadPago,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const cantidadFinal = horas * precioHora;

    dispatch(crearRegistro(cantidadFinal));

    setCantidadPago({
      precioHora: "",
      horas: "",
    });
  };

  return (
    <>
      <button onClick={handleAdd} className="btn green">
        {!viewForm ? "Agregar" : "Cerrar"}
      </button>
      {viewForm && (
        <>
          <input
            type="text"
            placeholder="Ingrese Cantidad a Pago por Hora"
            value={precioHora}
            onChange={handleChange}
            name="precioHora"
          />
          <input
            type="text"
            placeholder="Ingrese Cantidad de Horas"
            value={horas}
            onChange={handleChange}
            name="horas"
          />
          <button onClick={handleSave} className="btn purple">
            Calcular y Guardar
          </button>
        </>
      )}
    </>
  );
};
