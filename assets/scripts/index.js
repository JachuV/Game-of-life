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

function changeOnClick(height = 0, width = 0, board) {
    let cell = document.querySelector(`.H-${height}W-${width}`);
    cell.addEventListener('click', () => {
        board[height][width]=changeValue(cell.classList);
        return board[height][width];
    });
}

export function addEventListeners(board = []) {
    for (let h = 0; h < board.length; h++) {
        for (let w = 0; w < board[0].length; w+=1)  {
            changeOnClick(h, w, board);
        }
    }
}

const generateCell = (isAlive = false, height, width) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', `H-${height}W-${width}`);
    if (isAlive) {
        cell.classList.add('alive');
    }
    return cell;
}

export const renderBoard = board => {
    const htmlBoard = document.createElement('div');
    const boardWrapper = document.querySelector('#table');
    boardWrapper.innerHTML = ``;
    htmlBoard.classList.add('htmlBoard');

    for (let h = 0; h < board.length; h++) {
        let row = document.createElement('div');
        row.classList.add(`row`);
        for (let w = 0; w < board[0].length; w++) {
            row.appendChild(generateCell(board[h][w], h, w));
        }
        htmlBoard.appendChild(row);
    }
    return boardWrapper.appendChild(htmlBoard);
}

async function gameInit() {
    let gameBoard = new GameController(20,20);
    gameBoard.newBoard();

    //glider:
    gameBoard.board[5][5] = true;
    gameBoard.board[5][6] = true;
    gameBoard.board[5][7] = true;
    gameBoard.board[6][5] = true;
    gameBoard.board[7][6] = true;
    await gameBoard.renderGame(1000);
}


await gameInit();