import React from "react";

/**
 * Componente funcional Fichas:
 *
 * @param {cell} celdas - Contiene el numero de jugador en turno que identifica siguiente celda a colorear
 *
 * @returns {<div>} Retorna el div de clase fichas con un estilo diferente segun la celda
 *                  El estilo se torna de color amarillo para jugador 1 y amarillo para el jugador 2
 */

const Fichas = ({ cell }) => {
  let color = "#fff";
  if (cell === 1) {
    color = "red";
  } else if (cell === 2) {
    color = "yellow";
  }

  var style = {
    backgroundColor: color
  };

  return <div className="fichas" style={style} />;
};

export default Fichas;
