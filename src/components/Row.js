import  React  from  'react';
import Celdas from './Celdas';

const Row = props => {
  let style = {
    display: "flex"
  };

  let cells = [];
  for (let i = 0; i < 7; i++) {
    cells.push(
      <Celdas
        key={i}
        cell={props.cells[i]}
        row={props.row}
        col={i}
        onClickHandler={props.onClickHandler}
      />
    );
  }
  return <div style={style}> {cells} </div>;
};

export default Row;
