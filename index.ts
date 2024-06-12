import { checkWinCondition } from "./src/App"


const testBoard = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];


const winState = checkWinCondition(testBoard)

console.log(winState)