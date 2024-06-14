
type Row = [string, string, string]

type Board = Row[]

const board = [
    '', '', '',
    '', '', '',
    '', '', ''
] satisfies Board;

const otherBoard = [
    'x', '', 'x',
    '', 'x', '',
    'o', 'o', 'x'
] satisfies Board;

const row1 = ['x', '', 'x'];
const row2 = ['', 'x', ''];
const row3 = ['o', 'o', 'o']

const otherboard = [row1, row2, row3] satisfies Board;
//check rows
//check columns
//check diagonals

// const checkRows = () => {

// };


// const checkColumns = () => {

// };


// const checkDiagonals = () => {

// };

//an Item is an array of 3 strings
type Item = [string, string, string]

//[string, string, string][] => this is a list of items, each item is a list of three strings
const Check = (array: Item[]) => {
    // go through each item and check for all equivalent and not empty, then return win + winning player 
    // if all strings, check the next item in the check 

    for (let i = 0; i < array.length; i++) {
        const threeStrings = array[i]
        if (threeStrings[0] === threeStrings[1] &&
            threeStrings[1] === threeStrings[2] &&
            threeStrings[0] !== ""
        ) {
            return { winner: threeStrings[0], outcome: 'win' };
        }

    };
}


const getColumns = (b: typeof board): Item[] => {
    const column1: Item = [b[0][0], b[1][0], b[2][0]]
    const column2: Item = [b[0][1], b[1][1], b[2][1]]
    const column3: Item = [b[0][2], b[1][2], b[2][2]]
    return [column1, column2, column3]
}

const getDiagonals = (b: typeof board): Item[] => {
    const diag1: Item = [b[0][0], b[1][1], b[2][2]]
    const diag2: Item = [b[2][0], b[1][1], b[0][2]]
    return [diag1, diag2]
}

const checkBoard = (b: typeof board) => {
    const allpossibleWinConditions = [
        ...rows,...columns,...diagonals
    ]
    Check(allpossibleWinConditions);
    
    const rows = b
    const rowsOutcomes = Check(rows)

    if (rowsOutcomes.outcome == 'win') {
        return rowsOutcome;
    }

    const columns = getColumns(b)
    const columnOutcomes = Check(columns)

    if (columnOutcomes.outcome == "win") {
        return columnOutcomes;
    }

    const diagonals = getDiagonals(b)
    const diagonalOutcomes = Check(diagonals)

    if (diagonalOutcomes.outcome == "win") {
        return diagonalOutcomes;
    }



    //check rows
    //if winner, return
    //if no winner in rows, check columns
    //check columns
    //if winner, return
    //if no winner in columns, check diagonals
    // check diagonals
    //if winner, return
    // else, continue game

    //possible winner outcomes: "x", "o", none
    //game state: a win, tie, or continue
    //end return state: {}
    return { winner: null, outcome: 'continue' }
};

console.log(checkBoard(board));
console.log(checkBoard(otherBoard)); 