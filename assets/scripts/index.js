import {GameController} from "./gameController.js";

export function changeValue(classList) {
    if (classList.contains('alive')) {
        classList.remove('alive');
        return false;
    } else {
        classList.add('alive');
        return true;
    }
}

function changeOnClick(width, height, board) {
    let cell = document.querySelector(`.W-${width}H-${height}`);
    cell.addEventListener('click', () => {
        board[width][height]=changeValue(cell.classList);
        return board[width][height];
    });
}

function addEventListeners(board) {
    for (let h = 0; h < board.length; h++) {
        for (let w = 0; w < board[0].length; w++) {
            return changeOnClick(w, h, board);
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

const renderBoard = board => {
    const htmlBoard = document.createElement('div');
    const boardWrapper = document.querySelector('#table');
    boardWrapper.innerHTML = ``;
    htmlBoard.classList.add('htmlBoard');

    for (let h = 0; h < board.length; h++) {
        let row = document.createElement('div');
        row.classList.add(`row`);

        for (let w = 0; w < board[0].length; w++) {
            row.appendChild(generateCell(board[h][w], w, h));
        }
        htmlBoard.appendChild(row);
    }
    return boardWrapper.appendChild(htmlBoard);
}
let board = new GameController(5,5);
function gameInit() {
    let newBoard = new GameController(5,5);
    newBoard.board[1][1] = true;
    newBoard.board[1][2] = true;
    newBoard.board[1][3] = true;
    renderBoard(newBoard.board);
    addEventListeners(newBoard.board);
    board.changeStatus(newBoard.board);

    // console.log(newBoard);
}

gameInit();