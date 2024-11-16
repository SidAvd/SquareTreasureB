import { createCell } from "./createCell";

export function createBoard(numberOfRows, numberOfColumns){
    // Τυχαία θέση για το θησαυρό (treasure)
    const treasureRow = Math.floor(Math.random() * numberOfRows);
    const treasureCol = Math.floor(Math.random() * numberOfColumns);
    const matrix = [];

    // Δημιουργία του πίνακα
    for(let row = 0; row < numberOfRows; row++){
        const newRow = [];
        for(let col = 0; col < numberOfColumns; col++){
            // Υπολογισμός του κειμένου που θα εμφανίζεται στο τετράγωνο
            let thisSquareInfoText = (Math.abs(treasureRow - row) + Math.abs(treasureCol - col));
            
            if (thisSquareInfoText === 0) {
                thisSquareInfoText = "T";  // Θησαυρός
            } else if (thisSquareInfoText > 3) {
                thisSquareInfoText = "?";  // Σημάδι για έρευνα
            }

            // Δημιουργία του κελιού (αντικαταστήστε με το δημιουργημένο Cell για web αν χρειάζεται)
            newRow.push(createCell(row, col, false, thisSquareInfoText));
        }
        matrix.push(newRow);
    }

    return matrix;
}
