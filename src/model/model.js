

export class Square {
  constructor(row, column, label, color, isStartingPoint = false, isFilled = false, isVoid = false) {
    this.row = row;
    this.column = column;
    this.label = label;
    this.color = color;
    this.isStartingPoint = isStartingPoint;
    this.isFilled = isFilled;
    this.isVoid = isVoid;
    this.isSelected = false;
  }

  toggleSelection() {
    this.isSelected = !this.isSelected;
  }

}

export default class Puzzle {
  constructor(puzzle) {
    this.rows = puzzle.board.rows;
    this.columns = puzzle.board.columns;
    this.selected = null;
    this.winningSquares = puzzle.winningSquares;
    this.squaresArray = this.generateSquares(puzzle.squares);
    this.isWon = false;
  }

  //setters
  set changeSelected(selection) {
    this.selected = selection;
  }

  set changeRows(rows) {
    this.rows = rows;
  }

  set winFlag(flag) {
    this.isWon = flag;
  }

  generateSquares(squaresArray) {
    const arrayOfSquares = [];
    for (let i = 0; i < this.rows; i++) {
      const rowOfSquares = [];
      for (let j = 0; j < this.columns; j++) {
        const num = squaresArray.findIndex( // find coordinates of the squares in the array provided in the puzzle file
          (square) => square.row === i && square.column === j
        );
        if (num !== -1) { // if you get -1, index found nothing, if not -1 it found something and has info related to that coordinate and will generate square using information in puzzle file, and if not it will produce blank squares
          const { row, column, label, color, isVoid } = squaresArray[num];
          const startingSquare = new Square(
            row,
            column,
            label,
            color,
            true,
            true,
            isVoid
          );
          rowOfSquares.push(startingSquare);// array that represents row of squares
        } else {
          rowOfSquares.push(new Square(i, j, null, null));
        }
      }
      arrayOfSquares.push(rowOfSquares); // array of rows
    }
    return arrayOfSquares;
  }

}


