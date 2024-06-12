import './App.css'

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

type WinState = {
  outcome: "WIN" | "TIE" | null;
  winner: "X" | "O" | null;
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



function App() {
  return (
    <>
      <div>
        insert tic-tac-toe here
      </div>

    </>
  )
}

export default App
