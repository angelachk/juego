import  React  from  'react';
import  Row  from  './Row';

//Permite armar la cuadricula dentro de tablero con todas las filas y columnas


const Cuadricula = props => {
  console.log(props);
  let rows = [];
  for (let i = 5; i >= 0; i--) {
    rows.push(
      <Row
        key={i}
        row={i}
        cells={props.cells[i]}
        onClickHandler={props.onClickHandler}
      />
    );
  }
  return <div>{rows}</div>;
};

export default Cuadricula;
