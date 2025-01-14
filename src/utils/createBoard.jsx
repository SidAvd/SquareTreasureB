import { createCell } from "./createCell";

export function createBoard(numberOfRows, numberOfColumns){
    // Check if the device is mobile
    const isMobile = window.innerWidth <= 768; // Threshold for mobile devices

    // Random position for the treasure
    const treasureRow = Math.floor(Math.random() * numberOfRows);
    const treasureCol = Math.floor(Math.random() * numberOfColumns);
    const matrix = [];

    // Board creation
    for(let row = 0; row < numberOfRows; row++){
        const newRow = [];
        for(let col = 0; col < numberOfColumns; col++){
            // Calculate the text to display on the square
            let thisSquareInfoText = (Math.abs(treasureRow - row) + Math.abs(treasureCol - col));
            
            if (thisSquareInfoText === 0) {
                thisSquareInfoText = "T";  // Treasure
            } //else if (thisSquareInfoText > 8) 
            else if (isMobile ? thisSquareInfoText > 5 : thisSquareInfoText > 8){
                thisSquareInfoText = "?";  // Far away from treasure
            }

            // Create the cell
            newRow.push(createCell(row, col, false, thisSquareInfoText));
        }
        matrix.push(newRow);
    }

    return matrix;
}

