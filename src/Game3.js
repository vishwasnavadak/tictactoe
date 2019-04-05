import React from "react";

import Square from "./Square";
import { calculateWinner } from "./winner";
import { Footer } from "./footer";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      moves: 0
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    // console.log("TCL: Board -> handleClick -> state", this.state);

    if (calculateWinner(squares, 3) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      moves: this.state.moves + 1
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares, 3);
    let status;
    console.log("TCL: Board -> render -> moves", this.state.moves);
    if (winner) {
      status = "Winner: " + winner;
    } else if (this.state.moves === 9) {
      status = "Draw";
    } else {
      status = (this.state.xIsNext ? "X" : "O") + "'s Turn";
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default class Game3 extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
          <Footer />
        </div>
      </div>
    );
  }
}
