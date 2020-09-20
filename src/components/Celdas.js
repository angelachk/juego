import React from "react";
import Fichas from "./Fichas";

const Celdas = ({ row, col, cell, onClickHandler }) => {
  return (
    <div className="fondoTablero" onClick={() => onClickHandler(row, col)}>
      <Fichas cell={cell} />
    </div>
  );
};

export default Celdas;
