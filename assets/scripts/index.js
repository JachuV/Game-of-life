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

function changeValue(classList) {
    if (classList.contains('alive')) {
        classList.remove('alive');
    } else {
        classList.add('alive');
    }
}

function changeCell(width, height) {
    let cell = document.querySelector(`.W${width}H${height}`);
    cell.addEventListener('click', () => {
        changeValue(cell.classList);
    });
}

function changeCells(board) {
    for (let h = 0; h < board.length; h++) {
        for (let w = 0; w < board[0].length; w++) {
            changeCell(w, h);
        }
    }
}

// function countNeighbors() {
//     if ()
// }

generateCell = (isAlive, width, height) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', `W${width}H${height}`);
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

    return boardWrapper.appendChild(htmlBoard);
}



let counter = 0;

do{
    counter ++;
    let board = newBoard(40, 20);
    renderBoard(board);
    changeCells(board);



} while (counter === 5)
