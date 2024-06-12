type Board = string[]

//design the board
const board = [
    "", "", "", "", "", "", "", "", "",
]

//what are the possible win positions?
const possibleWinPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const possibleWinValues = [
    ["X", "X", "X"],
    ["O", "O", "O"]
]

type Outcome = {
    outcome: "win" | "draw" | "keepgoing",
    winner?: "X" | "O"
}

//for each (function) possible win position (data) is there a current win inside of it (function -> yes/no)?

//is there a win inside of "this current win position"? | is this a winning position? 

//checkWinPosition checks the position of the board, and allows you the programmer to end the game
function checkWinPosition(board): Outcome {

    //get the indexed values of the current position
    //map index values to actual values 



    //Win is defined as if every value is "X" | "O" then the winner is "X" | "O"
    //otherwise, no winner
    return (

    )
}