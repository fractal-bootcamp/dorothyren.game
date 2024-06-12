
type Cell = string | null

type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

type Game = {
    board: Board
}

type Player = string

type WinCondition = {
    outcome: 'win' | 'draw' | null,
    winner?: Player
}


// [0, 1]
// [2, 2]
type Position = number

// [0, 1, 2], [1, 4, 7]
type WinPosition = [Position, Position, Position]

const game = {
    board: [null, null, null, null, null, null, null, null, null],
}


function checkWinCondition(game: Game): WinCondition {

    // insert computer vision win detection.
    const possibleWinPositions: WinPosition[] = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]

    function isWinningPosition(winPosition: WinPosition): boolean {

        const isWin = winPosition.every(index => {
            // this is the actual X or O or null at the position
            const firstValue = game.board[winPosition[0]]
            const boardValue = game.board[index]
            const boardValueExists = boardValue != null
            const boardValueMatches = boardValue === firstValue
            if (boardValueExists && boardValueMatches) return true
            return false
        })

        return isWin
    }

    const winningPosition = possibleWinPositions.find(isWinningPosition)

    if (winningPosition) {
        // THESE ARE WINS
        return { outcome: 'win', winner: game.board[winningPosition[0]] as string }
    }

    const isStillPlaying = game.board.find(cell => cell == null)
    const isDraw = !isStillPlaying

    if (isDraw) return { outcome: 'draw' }


    return { outcome: null }
}