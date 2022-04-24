function newBoard (width = 5, height = 5) {
    this.x = width;
    this.y = height;
    let generatedBoard = [];
    for (let h = 0; h < height; h++) {
        generatedBoard[h] = [];
        for (let w = 0; w < width; w++) {
            generatedBoard[h][w] = false;
        }
    }
    return generatedBoard;
}

function generateBoardOnPage(boolBoard){
    const htmlBoard = document.createElement('div');
    htmlBoard.classList.add('htmlBoard');
    const cell = document.createElement('div');
    cell.classList.add('cell');
    const row = document.createElement('div');
    row.classList.add(`row`);
    for (let h = 0; h < boolBoard.length + 1; h++) {
        // console.log(`Row: ${h}\n`);
        // row.classList.add(`row-${h}`);
        for (let w = 0; w < boolBoard[0].length; w++) {

            if (boolBoard[h][w] === false) {
                row.appendChild(cell);
            } else {
                cell.classList.add('alive');
                row.appendChild(cell);
                cell.classList.remove('alive')
            }
            // console.log(`Cell: ${w}`);
        }
    }
}

let board = newBoard();
generateBoardOnPage(board);
