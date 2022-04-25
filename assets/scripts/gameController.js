export class GameController {
    constructor(width = 5, height = 5) {
        this.width = width;
        this.height = height;
        this.board = this.newBoard;
        this.maxHeight = this.width - 1;
        this.maxWidth = this.height - 1;
    }

    newBoard = () => {
        let generatedBoard = [];
        for (let h = 0; h < this.height; h++) {
            generatedBoard[h] = [];
            for (let w = 0; w < this.width; w++) {
                generatedBoard[h][w] = false;
            }
        }
        return generatedBoard;
    };

    checkNeighbor(width, height) {
        let count = 0;
        let value = this.board[width][height];
        count += this.addAliveNeighbor(width - 1, height - 1);
        count += this.addAliveNeighbor(width - 1, height);
        count += this.addAliveNeighbor(width - 1, height + 1);
        count += this.addAliveNeighbor(width, height - 1);
        count += this.addAliveNeighbor(width, height + 1);
        count += this.addAliveNeighbor(width + 1, height - 1);
        count += this.addAliveNeighbor(width + 1, height);
        count += this.addAliveNeighbor(width + 1, height + 1);
        if (value === true) {
            return (2 <= count && count <= 3);
        } else {
            return (count === 3);
        }
    }

    addAliveNeighbor(w, h) {
        try {
            if (this.board[w][h]) {
                return 1;
            }
            return 0;
        } catch {
            return 0;
        }
    }

    changeStatus() {
        let newBoard = this.board;
        for (let width = 0; width < this.maxWidth; width++) {
            for (let height = 0; height < this.maxHeight; height++) {
                newBoard[width][height] = this.checkNeighbor(width, height);
            }
        }
        return newBoard;
    }

    async renderGame(time, board) {
        await this.timeout(300);
    }

    timeout = async time => await new Promise(resolve => setTimeout(() => resolve(), time));
}