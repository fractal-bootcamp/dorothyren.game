import { useState } from 'react';
import './App.css'

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

export default function Board() {
  //keep track of the state by adding another state to the Board
  const [xisNext, setXIsNext] = useState(true);
  //this declares a state variable named squares that defaults to an array of 9 nulls corresponding to the 9 squares
  const [squares, setSquares] = useState(Array(9).fill(null))

  //The handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method. 
  //Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
  //state handling is now in the parent Board component, and the Board passes props to the child Square components so they 
  //display correctly. When clicking on a Square, the child square component asks the parent Board component to update
  //the state of the board. When the Board's state changes, both the Board component and every child Square re-renders automatically

  function handleClick(i) {

    // || is an Or
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xisNext) {
      nextSquares[i] = "X";
    }
    else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xisNext)

  }

  function calculateWinner(squares) {
    const winOptions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winOptions.length; i++) {
      const [a, b, c] = winOptions[i]
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    //check for draw and return "draw"
    //if squares are full, return "draw"

    if (squares.every(square => square !== null)) {
      return "draw";
    }
    return null;
  }

  //creating a status section to the Board component
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Move: " + (xisNext ? "X" : "O");
  }


  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        < Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        < Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        < Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        < Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        < Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        < Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        < Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        < Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        < Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}



// const checkRow = (row: string[]) => {
//   const winner = row.reduce((prev, curr) => {

//     if (prev === "") {
//       return null;
//     }

//     if (prev === curr) {
//       return curr
//     }
//     return null
//   })

//   return winner;
// }

//return X, O, null


// export const checkWinCondition = (b: typeof board): WinState => {
//   //check rows for equivalence

//   for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
//     const winner = checkRow(b[rowIndex])
//     if (winner) {
//       return { outcome: !!winner ? "win" : null, winner: winner }
//     }
//   }

//   return (
//     outcome: null,
//     winner: null
//   )



//check columns for equivalence
//check diagonals for equivalence


// return { outcome: null, winner: null }
//   //X, O, null
//   // game conditions: win, tie, or neither 
//   // if it's a win, who won? (X/O)

// }





