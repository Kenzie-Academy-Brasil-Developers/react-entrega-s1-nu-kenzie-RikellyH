import React from "react";

const FiltrarTipo = ({ tipos, setFilter }) => {
  return (
    <div className="button__container">
      <button type="button" onClick={() => setFilter("")}>
        Todos
      </button>
      {tipos.map((tipo) => (
        <button key={tipo} onClick={() => setFilter(tipo)}>
          {tipo}
        </button>
      ))}
    </div>
  );
};

export default FiltrarTipo;
