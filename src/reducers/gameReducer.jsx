import { createBoard } from "../utils/createBoard";

export function gameReducer(state, action) {
    const { type, row, col } = action;

    switch (type) {
        case "HANDLE_CELL": {
            if (state.board[row][col].isFlipped || state.isWin) return { ...state };
            
            const newBoard = flipCell(row, col, state.board);
            const newIsWin = winCheck(newBoard); // Immediately check if the game is won with the new board
    
            return {
                ...state,
                board: newBoard,
                isWin: newIsWin,
                counterMoves: state.counterMoves + 1
            };
        }
        case "HANDLE_RESTART_BUTTON": {
            return {
                ...state,
                board: restartGame(state.board),
                isWin: false,
                counterMoves: 0
            };
        }
        default: {
            console.log('error, unknown action!');
            return state;  // The state must be returned in the default case to avoid undefined state
        }
    }
}

// Uses `createBoard` to restart the game
function restartGame(board) {
    return createBoard(board.length, board[0].length);
}

// Checks if the game has been won
function winCheck(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col].squareText === 'T' && board[row][col].isFlipped)
                return true;
        }
    }
    return false;
}

// Updates the board with the flipped cell
function flipCell(row, col, board) {
    const newBoard = board.map(row => row.slice()); // Creates copy
    const cell = newBoard[row][col];
    newBoard[row][col] = {
        ...cell,
        isFlipped: true
    };
    return newBoard;
}
