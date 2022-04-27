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
        this.copyBoard = JSON.parse(JSON.stringify(this.board));
    }

    restoreBoard = () => {
        this.board = JSON.parse(JSON.stringify(this.copyBoard));
    }

    checkNeighborhood = (height, width) => {
        let count = 0;
        for(let h = -1; h <= 1; h++ ) {
            for (let w = -1; w <= 1; w++) {
                if (h+height < 0 || h+height > this.maxHeight || w + width < 0 || w + width > this.maxWidth || (h === 0 && w === 0)) {
                    count += 0;
                } else {
                    count += this.addNeighbor(height+h, width+w);
                }
            }
        }
        console.log('count', count)
        if (this.board[height][width]) {
            this.copyBoard[height][width] = (2 <= count && count <= 3);
        } else {
            this.copyBoard[height][width] = (count === 3);
        }
    }

    addNeighbor = (h, w) => {
        if (this.board[h][w]) {
            return 1;
        }
        return 0;
    }

    changeStatus = () => {

        for (let height = 0; height < this.maxWidth; height+=1) {
            for (let width = 0; width < this.maxHeight; width+=1) {
                this.checkNeighborhood(height, width);
            }
        }
        this.restoreBoard();
        console.log(this.board)
        console.log(this.copyBoard)
    }

    check = (height, width) => {
        this.addNeighbor(height,width);
        console.log('board:', this.board);
        console.log('copy', this.copyBoard);
    }

    // renderGame(time) {
    async renderGame(time) {
        let renderCounter=0
        do{
            renderBoard(this.board);
            // console.log(this.addNeighbor(1,2));

            addEventListeners(this.board);
            // console.log('copyBoard before', this.copyBoard);
            // console.log('board before', this.board);
            // this.check(1,1);
            // console.log('copyBoard after', this.copyBoard);
            // console.log('board after', this.board);
            renderCounter += 1;
            await this.timeout(time);
            this.changeStatus();
        } while (renderCounter !== 130)

    }

    timeout = async time => await new Promise(resolve => setTimeout(() => resolve(), time));
}