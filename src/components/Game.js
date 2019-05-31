import React, { Component } from 'react';
import Board from './Board';

class Game extends React.Component {
  // setting up past moves Array
  constructor(props) {
    super(props);
     this.state = {
        history: [{
        squares: Array(48).fill(null) // history array starts with empty values
      }],
      // adding the initial game state
      stepNumber: 0,
      xIsNext: true,
      // ships location
      lines: [[
      ]]
    };
  }

  componentDidMount() {
    const arr = [];
    for (let i  = 0; i < 48; i++) {
        arr.push(i);
    }
    console.log('arr: ', arr);

    let rand = Math.floor(Math.random() * 45);
    console.log('rand: ', rand);

    let position = arr.indexOf(rand);

    const location = [position, position + 1, position + 2];
    console.log('location: ', location);
    
    this.state.lines = [location];
    
    console.log('lines: ', this.state.lines);

    this.setState({ lines: this.state.lines });

  }


  calculateWinner(squares) {

    for (let i = 0; i < this.state.lines.length; i++) {
      const [a, b, c] = this.state.lines[i];

    console.log('[a, b, c]: ', [a, b, c]);

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

        console.log('squares[a]: ', squares[a]);

        return squares[a];
      }
    }
    return null;
  }

    handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // lets me start game over from first state
    const current = history[history.length - 1];
    const squares = current.squares.slice(); 

    if (this.calculateWinner(squares) || squares[i]) {
      return; // game ends as squares array has been filled
    }

    squares[i] = "missiles";

    const firstHit = i;

    console.log('i: ', i);

     switch(true) {
      case (i === this.state.lines[0][0]):
            squares[i] = "HIT";
            console.log('first hit: ', firstHit);
            break;
      case (i === this.state.lines[0][1]):
           squares[i] = "HIT";
           console.log('second hit: ', firstHit);
           break;
      case (i === this.state.lines[0][2]):
           squares[i] = "HIT";
           console.log('third hit: ', firstHit);
           break;
      default:
            squares[i] = "MISS";
    } 

    this.setState({
       history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step, // empties my board
      xIsNext: (step % 2) === 0,
    });
  }

  render() {

    // updating to use most recent history
    const history = this.state.history; // undefined
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    // displayling a list of past moves as buttons
      const moves = history.map((step, move) => {
      const desc =  move ?
       'Missiles fired #' + move :
      'Find that ship!';

      return (
        <div key={move}>
          <button className="restartButton" onClick={() => this.jumpTo(move)}>{desc}</button>
        </div>

      );
});

    let status;
    if (winner) {
      status = 'Good shot! You sank the battleship with ' + this.state.stepNumber + ' missiles! Hit Restart Game to play again' /*+ winner */;
    } else {
      status = 'Click on the squares to sink the battleship';
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className="game-headline">{status}</div>
            <p>{moves}</p>

            <button className="restartButton" onClick={() => window.location.reload()}>Restart Game</button>
        </div>
        
      </div>
    );
  }
}

export default Game;