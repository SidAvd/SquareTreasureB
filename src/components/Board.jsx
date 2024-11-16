import React, { useReducer } from 'react';
import { createBoard } from '../utils/createBoard';
import { gameReducer } from '../reducers/gameReducer';
import Cell from './Cell';

const NUMBER_OF_ROWS = 10;
const NUMBER_OF_COLUMNS = 15;

export default function Board() {
    const [gameState, dispatch] = useReducer(gameReducer, {
        board: createBoard(NUMBER_OF_ROWS, NUMBER_OF_COLUMNS),
        isWin: false,
        counterMoves: 0
    });

    function handlePress(row, col) {
        dispatch({ type: "HANDLE_CELL", row, col });
    }

    function handleRestartButton() {
        dispatch({ type: "HANDLE_RESTART_BUTTON" });
    }

    return (
        <div style={styles.containerBoard}>
            <div style={styles.containerOuterUpper}>
                <div style={styles.containerUpper}>
                    <div><p style={styles.text}>Square Treasure</p></div>
                    <div style={styles.horizontalLine}></div>
                    <p style={styles.text2}>{whatTheMessageShows(gameState.isWin)}</p>
                </div>
            </div>
            <div style={styles.containerOuterArray}>
                <div style={styles.containerArray}>
                    {gameState.board.map((row, rowIdx) => (
                        <div key={rowIdx} style={styles.rowStyle}>
                            {row.map((cell, cellIdx) => (
                                <Cell key={cellIdx} handlePress={handlePress} {...cell} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div style={styles.containerOuterDown}>
                <div style={styles.containerDown}>
                    <button
                        style={styles.button}
                        onClick={handleRestartButton}
                    >
                        <p style={styles.text2}>Restart</p>
                    </button>
                    <div style={styles.verticalLine}></div>
                    <div style={styles.movesCounter}>
                        <p style={styles.text2}>Moves: {gameState.counterMoves}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function whatTheMessageShows(isWin) {
    return isWin ? '💎 You Win 💎' : 'Find the 💎';
}

const styles = {
    containerBoard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100vh', // Καταλαμβάνει όλο το ύψος της σελίδας
    },

    containerOuterUpper: {
        width: '100%', // Για να είναι το ίδιο το πλάτος με τα άλλα πλαίσια
        maxWidth: '1500px', // Περιορίζουμε το πλάτος, να είναι σταθερό
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px', // Προσθέτουμε λίγο χώρο από κάτω
    },
    containerUpper: {
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: '4px solid black',
        padding: '10px',
        width: '100%', // Πλάτος ίδιο με το πάνω container
        maxWidth: '1500px',
        height: 'auto', // Το ύψος να προσαρμόζεται στο περιεχόμενο
    },
    text: {
        fontWeight: '900',
        fontSize: '36px',
        color: 'black',
        textAlign: 'center',
    },

    containerOuterArray: {
        flex: 1, // Αυτό το container θα πάρει το διαθέσιμο ύψος
        width: '100%', // Ιδιότυπο πλάτος
        maxWidth: '1500px', // Περιορίζουμε το πλάτος
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    },
    containerArray: {
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: '4px solid black',
        width: '100%',
        maxWidth: '1500px',
    },
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '2px 0',
    },

    containerOuterDown: {
        width: '100%', // Ιδιότυπο πλάτος
        maxWidth: '1500px', // Περιορίζουμε το πλάτος
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // containerDown: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'orange',
    //     borderRadius: '10px',
    //     border: '4px solid black',
    //     padding: '10px',
    //     width: '100%',
    //     maxWidth: '1500px',
    // },
    containerDown: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around', // Δίνει κενό ανάμεσα στα στοιχεία
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: '10px',
        border: '4px solid black',
        padding: '10px',
        width: '100%',
        maxWidth: '1500px',
    },
    text2: {
        fontWeight: '700',
        fontSize: '26px',
        color: 'blue',
        textAlign: 'center',
    },
    // button: {
    //     flex: 1,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'transparent',
    //     border: 'none',
    //     cursor: 'pointer',
    // },
    button: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '5px 15px', // Κανονικό padding
        height: 'auto',
        width: 'auto',
        textAlign: 'center',
    },
    // verticalLine: {
    //     height: '90%',
    //     borderLeft: '2px solid black',
    //     margin: '0 10px',
    // },
    verticalLine: {
        height: '80px', // Σταθερό ύψος για τη γραμμή
        borderLeft: '2px solid black',
        margin: '0 20px', // Προσαρμογή κενών γύρω της
    },
    // movesCounter: {
    //     flex: 1,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    movesCounter: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    horizontalLine: {
        width: '90%',
        borderTop: '2px solid black',
        margin: '10px 0',
    },
};
