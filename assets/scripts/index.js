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

function changeStatus(board) {
    let maxHeight = board.length;
    let maxWidth = board[0].length;
    for (let width = 0; width < maxWidth; width++){
        for (let height = 0; height < maxHeight; height++) {
            board[width][height] = checkNeighbor(board,width,height);
        }
    }
    return board;
}

function changeValue(classList, board, width, height) {
    if (classList.contains('alive')) {
        classList.remove('alive');
        board[height][width] = false;
    } else {
        classList.add('alive');
        board[height][width] = true;
    }
}

function changeCell(width, height, board) {
    let cell = document.querySelector(`.W${width}H${height}`);
    cell.addEventListener('click', () => {
        changeValue(cell.classList, board, width, height);
    });
}

function changeCells(board) {
    for (let h = 0; h < board.length; h++) {
        for (let w = 0; w < board[0].length; w++) {
            changeCell(w, h, board);
        }
    }
}

function addAliveNeighbor(w, h) {

    try {
        if (board[w][h]) {
            console.log(1);
            return 1;
        }
        console.log(0);
        return 0;
    } catch {
        console.log(-1);
        return 0;
    }
}

function checkNeighbor(board, width, height) {
    let count = 0;
    const value = board[width][height];
    count += addAliveNeighbor(width - 1, height - 1);
    count += addAliveNeighbor(width - 1, height);
    count += addAliveNeighbor(width - 1, height + 1);
    count += addAliveNeighbor(width, height - 1);
    count += addAliveNeighbor(width, height + 1);
    count += addAliveNeighbor(width + 1, height - 1);
    count += addAliveNeighbor(width + 1, height);
    count += addAliveNeighbor(width + 1, height + 1);
    if (value === true){
        return (2 <= count && count <= 3);
    } else {
        return (count === 3);
    }
}

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



let board = newBoard(40, 20);
board[5][5] = true;
board[5][6] = true;
board[5][7] = true;


renderBoard(board);
changeCells(board);
board = changeStatus(board);
renderBoard(board);

