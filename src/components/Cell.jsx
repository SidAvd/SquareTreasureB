import React from 'react';

export default function Cell({
    row,
    col,
    isFlipped,
    squareText,
    handlePress,
}) {
    return (
        <div style={styles.outerCellStyle}>
            <button
                onClick={() => handlePress(row, col)}
                style={styles.innerCellStyle}
            >
                <span style={styles.cellTextStyle}>
                    {whatTheCellShows(isFlipped, squareText)}
                </span>
            </button>
        </div>
    );
}

function whatTheCellShows(isFlipped, squareText) {
    if (isFlipped && squareText === "T") return '💎';
    if (isFlipped) return squareText;
    return "";
}

const styles = {
    outerCellStyle: {
        display: 'flex',
        flex: 0.2,
        justifyContent: 'center',
        padding: '5px',
    },
    innerCellStyle: {
        backgroundColor: '#A8DADC', // Soft green-blue
        height: '50px',
        width: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: '10px',
        border: '2px solid black',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer', // Makes it visually clickable
    },
    cellTextStyle: {
        alignSelf: 'center',
        fontSize: '25px',
        fontWeight: 'bold',
        color: '#333333', // Dark anthracite
    },
};
