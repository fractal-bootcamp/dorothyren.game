
type Cell = '' | "X" | "O"

type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

//start by creating the game board
const initialBoard: Board = [
    "", "", "", "", "", "", "", "", "",
]

//create the list of win positions
const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

type Outcome = {
    // these states are mutually exclusive
    outcome: 'win' | 'draw' | 'keepgoing'
    // need the winner 
    winner?: 'X' | 'O',
}

//evaluate the board to see if it satisfies any of the win conditions
function evaluateBoardForWinState(board: Board): Outcome {



    return { outcome: 'keepgoing' }
}



//how do I determine a winner?




//using .find to call the isWinningPosition function to return the first possibleWinPositions that matches the winPosition

//if there is a win, respond "win" and the string winning play

