import { useState } from 'react';
import './App.css'

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

export default function Board() {
  //this declares a state variable named squares that defaults to an array of 9 nulls corresponding to the 9 squares
  const [squares, setSquares] = useState(Array(9).fill(null))

  //The handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method. 
  //Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        < Square value={squares[0]} onSquareClick={handleClick} />
        < Square value={squares[1]} />
        < Square value={squares[2]} />
      </div>
      <div>
        < Square value={squares[3]} />
        < Square value={squares[4]} />
        < Square value={squares[5]} />
      </div>
      <div>
        < Square value={squares[6]} />
        < Square value={squares[7]} />
        < Square value={squares[8]} />
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





