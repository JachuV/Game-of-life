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
cell = document.querySelector('.cell');
function changeCell() {
    cell.addEventListener('click', () => {
        console.log()
    })
}

generateCell = (isAlive, width, height) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', `width:${width}`, `height:${height}`);
    if (isAlive) {
        cell.classList.add('alive');
    }
    return cell;

}

renderBoard = boolBoard => {
    const htmlBoard = document.createElement('div');
    const boardWrapper = document.querySelector('#table');
    htmlBoard.classList.add('htmlBoard');

    for (let h = 0; h < boolBoard.length; h++) {
        let row = document.createElement('div');
        row.classList.add(`row`);

        for (let w = 0; w < boolBoard[0].length; w++) {
            row.appendChild(generateCell(boolBoard[h][w], w, h));
        }
        htmlBoard.appendChild(row);
    }
    console.log(htmlBoard)
    // return htmlBoard;
    return boardWrapper.appendChild(htmlBoard);
}


let board = newBoard(40, 20);
board[2][2]=true;
renderBoard(board);
