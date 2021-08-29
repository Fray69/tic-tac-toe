class TicTacToe {
    constructor() {
      this.matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];
      this.winner = null;
      this.player = "x";
    }
  
    getCurrentPlayerSymbol() {
      return this.player;
    }
  
    nextTurn(rowIndex, columnIndex) {
      if (this.matrix[rowIndex][columnIndex] == null) {
        this.matrix[rowIndex][columnIndex] = this.player;
        this.player == "x" ? (this.player = "o") : (this.player = "x");
      }
    }
  
    isFinished() {
      if (this.getWinner() || this.isDraw()) return true;
      return false;
    }
  
    getWinner() {
      if (
        (this.matrix[0][0] == "x" &&
          this.matrix[0][1] == "x" &&
          this.matrix[0][2] == "x") ||
        (this.matrix[1][0] == "x" &&
          this.matrix[1][1] == "x" &&
          this.matrix[1][2] == "x") ||
        (this.matrix[2][0] == "x" &&
          this.matrix[2][1] == "x" &&
          this.matrix[2][2] == "x") ||
        (this.matrix[0][0] == "x" &&
          this.matrix[1][0] == "x" &&
          this.matrix[2][0] == "x") ||
        (this.matrix[0][1] == "x" &&
          this.matrix[1][1] == "x" &&
          this.matrix[2][1] == "x") ||
        (this.matrix[0][2] == "x" &&
          this.matrix[1][2] == "x" &&
          this.matrix[2][2] == "x") ||
        (this.matrix[0][0] == "x" &&
          this.matrix[1][1] == "x" &&
          this.matrix[2][2] == "x") ||
        (this.matrix[0][2] == "x" &&
          this.matrix[1][1] == "x" &&
          this.matrix[2][0] == "x")
      ) {
        this.winner = "x";
        return "x";
      } else if (
        (this.matrix[0][0] == "o" &&
          this.matrix[0][1] == "o" &&
          this.matrix[0][2] == "o") ||
        (this.matrix[1][0] == "o" &&
          this.matrix[1][1] == "o" &&
          this.matrix[1][2] == "o") ||
        (this.matrix[2][0] == "o" &&
          this.matrix[2][1] == "o" &&
          this.matrix[2][2] == "o") ||
        (this.matrix[0][0] == "o" &&
          this.matrix[1][0] == "o" &&
          this.matrix[2][0] == "o") ||
        (this.matrix[0][1] == "o" &&
          this.matrix[1][1] == "o" &&
          this.matrix[2][1] == "o") ||
        (this.matrix[0][2] == "o" &&
          this.matrix[1][2] == "o" &&
          this.matrix[2][2] == "o") ||
        (this.matrix[0][0] == "o" &&
          this.matrix[1][1] == "o" &&
          this.matrix[2][2] == "o") ||
        (this.matrix[0][2] == "o" &&
          this.matrix[1][1] == "o" &&
          this.matrix[2][0] == "o")
      ) {
        this.winner = "o";
        return "o";
      } else {
        return this.winner;
      }
    }
  
    noMoreTurns() {
      let ind = 0;
      for (let col = 0; col < this.matrix.length; col++) {
        for (let row = 0; row < this.matrix[col].length; row++) {
          if (this.matrix[col][row] == null) {
            ind++;
          }
        }
      }
      if (ind > 0) {
        return false;
      } else {
        return true;
      }
    }
  
    isDraw() {
      return this.noMoreTurns() && this.getWinner() == null ? true : false;
    }
  
    getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
    }
  }
  module.exports = TicTacToe;
