import React, { useReducer, useState, useEffect } from 'react';
import { createBoard } from '../utils/createBoard';
import { gameReducer } from '../reducers/gameReducer';
import Cell from './Cell';

const NUMBER_OF_ROWS = 10;
// const NUMBER_OF_COLUMNS = 12;

export default function Board() {
    // const [gameState, dispatch] = useReducer(gameReducer, {
    //     board: createBoard(NUMBER_OF_ROWS, NUMBER_OF_COLUMNS),
    //     isWin: false,
    //     counterMoves: 0
    // });

    const [numberOfColumns, setNumberOfColumns] = useState(getNumberOfColumns());

    // Calculate number of columns on initialization
    useEffect(() => {
        function handleResize() {
            setNumberOfColumns(getNumberOfColumns());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [gameState, dispatch] = useReducer(gameReducer, {
        board: createBoard(NUMBER_OF_ROWS, numberOfColumns),
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

// Function to calculate number of columns
function getNumberOfColumns() {
    const isMobile = window.innerWidth <= 768; // Threshold for mobile
    return isMobile ? 6 : 12;
}

const styles = {
    containerBoard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100vh',
    },

    containerOuterUpper: {
        width: '100%',
        maxWidth: '1500px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    containerUpper: {
        backgroundColor: '#D7E9F7', // Soft blue
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: '4px solid black',
        padding: '10px',
        width: '100%',
        maxWidth: '1500px',
        height: 'auto',
    },
    text: {
        fontWeight: '900',
        fontSize: '36px',
        color: '#333333', // Dark charcoal
        textAlign: 'center',
    },

    containerOuterArray: {
        flex: 1,
        width: '100%',
        maxWidth: '1500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        marginBottom: '10px',
    },
    containerArray: {
        backgroundColor: '#D7E9F7', // Soft blue
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: '4px solid black',
        width: '100%',
        maxWidth: '1500px',
        overflow: 'hidden', // Prevent overflow
    },
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '2px 0',
    },

    containerOuterDown: {
        width: '100%',
        maxWidth: '1500px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerDown: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#D7E9F7', // Soft blue
        borderRadius: '10px',
        border: '4px solid black',
        padding: '10px',
        width: '100%',
        maxWidth: '1500px',
    },
    text2: {
        fontWeight: '700',
        fontSize: '26px',
        color: '#333333', // Dark charcoal
        textAlign: 'center',
    },
    button: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '5px 15px',
        height: 'auto',
        width: 'auto',
        textAlign: 'center',
    },
    verticalLine: {
        height: '80px',
        borderLeft: '2px solid black',
        margin: '0 20px',
    },
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
