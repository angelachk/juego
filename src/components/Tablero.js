import React, { Component } from "react";
import Cuadricula from "./Cuadricula";
import { withTranslation } from 'react-i18next';

class Tablero extends Component {
  constructor(props) {
    super(props);

    let cells = [];
    for (let i = 0; i < 6; i++) {
      cells.push(new Array(7).fill(0));
    }
    this.state = {
      cells: cells,
      player: false,
      winner: 0,
      tie: false
    };
  }


  onClickHandler = (row, col) => {
    let tablero = this.state.cells;
    let temp = [];
    for (let i = 0; i < 6; i++) {
      temp.push(tablero[i].slice());
    }
    let tie = this.empate(tablero);
    if (tie) {
      console.log("tie");
      this.setState({
        tie: true
      });
    }
    if (this.state.winner) return;
    console.log("temp is" + temp);
    let emptyRow = this.rowWhereCoinBeAdded(col);
    console.log(emptyRow);
    temp[emptyRow][col] = this.state.player ? 1 : 2;
    this.setState(
      {
        cells: temp,
        player: !this.state.player
      },
      () => {
        if (this.verGanador(emptyRow, col) > 0) {
          console.log("winner");
          this.setState({
            winner: this.state.player ? 2 : 1
          });
        }
      }
    );
  };
  rowWhereCoinBeAdded = col => {
    for (let i = 0; i < 6; i++) {
      if (this.state.cells[i][col] === 0) {
        return i;
      }
    }
    return -1;
  };

  empate = tablero => {
    for (let i = 0; i < tablero.length; i++) {
      for (let y = 0; y < tablero[i].length; y++) {
        if (tablero[i][y] === 0) {
          return false;
        }
      }
    }
    return true;
  };

  restartGame = () => {
    var cells = [];
    for (let i = 0; i < 6; i++) {
      cells.push(new Array(7).fill(0));
    }
    this.setState({
      cells: cells,
      tie: false,
      player: false,
      winner: 0
    });
  };

  verificaFichasEjeX = (row, col) => {
    let cells = this.state.cells;
    let i = 6;
    let value = this.state.player ? 2 : 1;

    while (i >= 3) {
      if (
        cells[row][i] === value &&
        cells[row][i - 1] === value &&
        cells[row][i - 2] === value &&
        cells[row][i - 3] === value
      ) {
        return 1;
      }
      i--;
    }
    return 0;
  };

  verificaFichasEjeY = (row, col) => {
    let cells = this.state.cells;
    let value = this.state.player ? 2 : 1;
    if (row >= 3) {
      if (
        cells[row][col] === value &&
        cells[row - 1][col] === value &&
        cells[row - 2][col] === value &&
        cells[row - 3][col] === value
      ) {
        return 1;
      }
    }
    return 0;
  };

  verGanador = (row, col) => {
    return (
      this.verificaFichasDiagonal(row, col) || this.verificaFichasEjeX(row, col) || this.verificaFichasEjeY(row, col)

    );
  };

  verificaFichasDiagonal(row, col) {
    var cells = this.state.cells;
    var value = this.state.player ? 2 : 1;
    var rR = row;
    var cR = col;
    while (rR < 5 && cR < 6) {
      rR++;
      cR++;
    }
    while (rR >= 3 && cR >= 3) {
      if (
        cells[rR][cR] === value &&
        cells[rR - 1][cR - 1] === value &&
        cells[rR - 2][cR - 2] === value &&
        cells[rR - 3][cR - 3] === value
      ) {
        return 1;
      }
      rR--;
      cR--;
    }

    var rL = row;
    var cL = col;

    while (rL < 5 && cL > 0) {
      rL++;
      cL--;
    }

    while (rL >= 3 && cL <= 3) {
      if (
        cells[rL][cL] === value &&
        cells[rL - 1][cL + 1] === value &&
        cells[rL - 2][cL + 2] === value &&
        cells[rL - 3][cL + 3] === value
      ) {
        return 1;
      }
      rL--;
      cL++;
    }
    return 0;
  }

  render() {

    let status = "";
    if (this.state.winner > 0) {
      if (this.state.winner === 1) {
        status = <p>{this.props.t('ganador2.gano2')}</p>;
      } else {
        status = <p>{this.props.t('ganador1.gano1')}</p>;
      }
    } else if (this.state.player) {
      status = <p>{this.props.t('turno2.display2')}</p>;
    } else if (!this.state.winner && this.state.tie) {
      status = <p>{this.props.t('empate.tie')}</p>;
    } else {
      status = <p> {this.props.t('turno1.display1')}</p>;
    }

    return (
      <div>
        <p className="status">{status}</p>
        <Cuadricula
          cells={this.state.cells}
          onClickHandler={this.onClickHandler}
        />
          <button className="reiniciaJuego" onClick={() => this.restartGame()}>
            {this.props.t('button.restartGame')}
         </button>
      </div>
    );
  }
}

export default withTranslation('global')(Tablero);
