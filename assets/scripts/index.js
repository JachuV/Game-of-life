import {GameController} from "./gameController.js";

function changeValue(classList) {
    if (classList.contains('alive')) {
        classList.remove('alive');
        return false;
    } else {
        classList.add('alive');
        return true;
    }
}

function addEventListenerToCell(width, height, board) {
    let cell = document.querySelector(`.W-${width}H-${height}`);
    cell.addEventListener('click', () => {
        board[width][height]=changeValue(cell.classList);
    });
}

function addEventListeners(board) {
    for (let h = 0; h < board.length; h++) {
        for (let w = 0; w < board[0].length; w++) {
            addEventListenerToCell(w, h, board);
        }
    }
}

const generateCell = (isAlive, width, height) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', `W-${width}H-${height}`);
    if (isAlive) {
        cell.classList.add('alive');
    }
    return cell;
}

const renderBoard = boolBoard => {
    const htmlBoard = document.createElement('div');
    const boardWrapper = document.querySelector('#table');
    boardWrapper.innerHTML = ``;
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

function gameInit() {
    let board = new GameController();
    board.newBoard(5, 5);
    board.board[1][1] = true;
    board.board[1][2] = true;
    board.board[1][3] = true;
    renderBoard(board);
    addEventListeners(board);
    board.changeStatus(board);
    renderBoard(board);
    addEventListeners(board);
}

gameInit();