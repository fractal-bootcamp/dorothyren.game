import { Board, checkWinCondition } from "./src/game"


const testBoard = [
    '', '', '',
    '', '', '',
    '', '', ''
] satisfies Board;

const draw = [
    'X', 'O', 'X',
    'O', 'X', 'O',
    'o', 'X', 'O'
] satisfies Board;

const win = [
    'X', 'O', 'X',
    'O', 'X', 'O',
    'X', 'X', 'O'
] satisfies Board;


const winState = checkWinCondition({ board: testBoard })
const expectedDraw = checkWinCondition({ board: draw })
const expectedWin = checkWinCondition({ board: win })

console.log(winState)
console.log(expectedDraw)
console.log(expectedWin)