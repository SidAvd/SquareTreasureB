import { createBoard } from "../utils/createBoard";  // Το path εξαρτάται από τη δομή του project σου

export function gameReducer(state, action) {
    const { type, row, col } = action;

    switch (type) {
        case "HANDLE_CELL": {
            if (state.board[row][col].isFlipped || state.isWin) return { ...state };
            
            const newBoard = flipCell(row, col, state.board);
            const newIsWin = winCheck(newBoard); // Ελέγχουμε άμεσα αν κερδίσαμε με το νέο board
    
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
            return state;  // Πρέπει να επιστρέφεται το state στο default για να μην υπάρχει undefined state
        }
    }
}

// Χρησιμοποιεί τη `createBoard` για την επανεκκίνηση του παιχνιδιού
function restartGame(board) {
    return createBoard(board.length, board[0].length);
}

// Έλεγχος για να δούμε αν το παιχνίδι έχει κερδηθεί
function winCheck(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col].squareText === 'T' && board[row][col].isFlipped)
                return true;
        }
    }
    return false;
}

// Ενημερώνει το board με το κελί που έχει flipped
function flipCell(row, col, board) {
    const newBoard = board.map(row => row.slice()); // Creates a deep copy
    const cell = newBoard[row][col];
    newBoard[row][col] = {
        ...cell,
        isFlipped: true
    };
    return newBoard;
}
