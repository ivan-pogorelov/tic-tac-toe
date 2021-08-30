const firstPlayer = 'x';
const secondPlayer = 'o';
const nextPlayer = {
    [firstPlayer]: secondPlayer,
    [secondPlayer]: firstPlayer,
};

class TicTacToe {
    constructor() {
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
    };

    currentPlayer = firstPlayer;

    getCurrentPlayerSymbol() {
        return this.currentPlayer
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] != null) {
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = nextPlayer[this.currentPlayer];
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        const size = this.gameField.length;

        for (let i = 0; i < size; i++) {
            const firstChar = this.gameField[i][0];
            let flag = true;

            for (let j = 1; j < size; j++) {
                if (firstChar !== this.gameField[i][j]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return firstChar;
            }
        }

        for (let i = 0; i < size; i++) {
            const firstChar = this.gameField[0][i];
            let flag = true;

            for (let j = 1; j < size; j++) {
                if (firstChar !== this.gameField[j][i]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return firstChar;
            }
        }

        let firstChar = this.gameField[0][0];
        let flag = true;

        for (let i = 1; i < size; i++) {
            if (firstChar !== this.gameField[i][i]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            return firstChar;
        }

        firstChar = this.gameField[0][size - 1];
        flag = true;

        for (let i = 1, j = size - 2; i < size && j >= 0; i++, j--) {
            if (firstChar !== this.gameField[i][j]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            return firstChar;
        }

        return null;

    }

    noMoreTurns() {
        return this.gameField.every(row => row.every(col => col));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex] ? this.gameField[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
