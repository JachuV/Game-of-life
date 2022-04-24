function newBoard (width = 5, height = 5) {
    this.width = width;
    this.height = height;
    let generatedBoard = [];
    for (let h = 0; h < this.height; h++) {
        generatedBoard[h] = [];
        for (let w = 0; w < this.width; w++) {
            generatedBoard[h][w] = false;
        }
    }
    return generatedBoard;
}
generateCell = (isAlive) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if (isAlive) {
        return cell;
    } else {
        cell.classList.add('alive');
        return cell;
    }
}

renderBoard = boolBoard => {
    const htmlBoard = document.createElement('div');
    htmlBoard.classList.add('htmlBoard');

    for (let h = 0; h < boolBoard.length; h++) {
        let row = document.createElement('div');
        row.classList.add(`row`);

        for (let w = 0; w < boolBoard[0].length; w++) {
            row.appendChild(generateCell(boolBoard[h[w]]));
        }
        htmlBoard.appendChild(row);
    }
    return htmlBoard;
}

let board = newBoard();
renderBoard(board);
