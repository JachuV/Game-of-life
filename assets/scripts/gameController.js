import {renderBoard, addEventListeners} from "./index.js";

export class GameController {
    constructor(height = 5, width = 5) {
        this.width = width;
        this.height = height;
        this.board = [];
        this.copyBoard = [];
        this.maxHeight = this.width - 1;
        this.maxWidth = this.height - 1;
    }

    newBoard = () => {
        for (let height = 0; height < this.height; height++) {
            this.board[height] = [];
            for (let width = 0; width < this.width; width++) {
                this.board[height][width] = false;
            }
        }
        this.copyTheBoard();
    };

    copyTheBoard = () => {
        this.copyBoard = this.board;
    }

    restoreBoard = () => {
        this.board = this.copyBoard;
    }

    checkNeighborhood = (height, width) => {
        let count = 0;
        for(let h = -1; h <= 1; h++ ) {
            for (let w = -1; w <= 1; w++) {
                if (h+height < 0 || h+height > this.maxHeight || w + width < 0 || w + width > this.maxWidth) {
                    count += 0;
                } else {
                    count += this.addNeighbor(h, w);
                }

            }
        }

        if (this.board[height][width]) {
            this.copyBoard[height][width] = (1 < count && count < 4);
        } else {
            this.copyBoard[height][width] = (count === 3);
        }
    }

    addNeighbor = (h, w) => {
        let alive;
        try {
            if (this.board[h][w]) {
                alive = 1;
            } else {
                alive = 0;
            }
        } catch {
            alive = 0;
        }
        return alive;
    }

    changeStatus = () => {

        for (let height = 0; height < this.maxWidth; height+=1) {
            for (let width = 0; width < this.maxHeight; width+=1) {
                this.checkNeighborhood(height, width);
            }
        }
        this.restoreBoard();
    }

    // static changeOnClick(width, height) {
    //     let cell = document.querySelector(`.W-${width}H-${height}`);
    //     cell.addEventListener('click', () => {
    //         this.board[width][height]=changeValue(cell.classList);
    //         return board[width][height];
    //     });
    // }

    // renderGame(time) {
    async renderGame(time) {
        let renderCounter=0
        do{
            renderBoard(this.board);
            // console.log(this.addNeighbor(1,2));

            addEventListeners(this.board);
            // console.log('copyBoard before', this.copyBoard);
            // console.log('board before', this.board);
            this.changeStatus();
            // console.log('copyBoard after', this.copyBoard);
            // console.log('board after', this.board);
            renderCounter += 1;
            await this.timeout(time);
        } while (renderCounter !== 3)

    }

    timeout = async time => await new Promise(resolve => setTimeout(() => resolve(), time));
}