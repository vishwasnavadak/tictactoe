import React from "react";

import Square from "./Square";
import { calculateWinner } from "./winner";
import { Footer } from "./footer";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill(null),
      xIsNext: true,
      moves: 0
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    // console.log("TCL: Board -> handleClick -> state", this.state);

    if (calculateWinner(squares, 4) || squares[i]) {
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
    const winner = calculateWinner(this.state.squares, 4);
    let status;
    console.log("TCL: Board -> render -> moves", this.state.moves);
    if (winner) {
      status = "Winner: " + winner;
    } else if (this.state.moves === 16) {
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
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    );
  }
}

export default class Game4 extends React.Component {
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
