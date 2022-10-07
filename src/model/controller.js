import Puzzle, { Square } from "./model.js";

export default class Controller {
  // info is going to be json encoded puzzle
  constructor(info) {
    this.info = info;
    this.puzzle = new Puzzle(info);
    this.trail = {};
    this.handleSquareSelect = this.handleSquareSelect.bind(this);
    this.handleSquareGeneration = this.handleSquareGeneration.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
  }

  compareSquares(square1, square2) {
    return square1.row === square2.row && square1.column === square2.column;
  }

  checkForWin() {
    //check if all squares are filled
    const { winningSquares } = this.puzzle;

    //will be -1 if all squares are filled
    const filledCheck = this.puzzle.squaresArray.findIndex((rows, index) => {
      const rowCheck = rows.findIndex((square, index) => {
        return square.isFilled === false;
      });
      return rowCheck !== -1;
    });
    if (filledCheck === -1) {
      let x = 0;
      for (let color in this.trail) {
        if (
          (
            (this.compareSquares(
              this.trail[color][1],
              winningSquares[color][0]
            ) &&
              this.trail[color][0].label === winningSquares[color][0].nextTo &&
              this.compareSquares(
                this.trail[color][this.trail[color].length - 1],
                winningSquares[color][1]
              )) ||
            (this.compareSquares(
              this.trail[color][1],
              winningSquares[color][1]
            ) &&
              this.trail[color][0].label === winningSquares[color][1].nextTo &&
              this.compareSquares(
                this.trail[color][this.trail[color].length - 1],
                winningSquares[color][0]
              ))
          )) {
          x++;
        }
      }

      return x === Object.keys(this.trail).length;
    }
    return false;
  }

  handleSquareSelect(square, event = { type: "buttonpress" }) {
    //make sure a square is meant to be clickable i.e. has color and isnt a void square
    if (square.isFilled && !square.isVoid) {
      if (this.puzzle.selected && event.type === "click") {
        //check color of current selection, then check color or target square
        const { row, column } = this.puzzle.selected;
        if (this.puzzle.squaresArray[row][column].color === square.color) {
          return this;
        }
      }

      //if a selection already exists
      if (this.puzzle.selected) {
        //deselect that selection in the puzzle object/property
        const { row, column } = this.puzzle.selected
        this.puzzle.squaresArray[row][column].toggleSelection();
      }

      //if you click on the same square twice, you need to nullify the selected property in the puzzle object
      if (
        this.puzzle.selected &&
        square.row === this.puzzle.selected.row &&
        square.column === this.puzzle.selected.column
      ) {
        this.puzzle.selected = null; // null means completely empty 
      } else {
        //otherwise it will be our new selected property
        this.puzzle.squaresArray[square.row][square.column].toggleSelection();
        this.puzzle.selected = { row: square.row, column: square.column };
      }
    }

    return this; // returning entire controller as an object
  }

  handleSquareGeneration(direction) {
    const { selected } = this.puzzle;

    if (selected) {
      const targetSquareCoords = { // coordinates of selected squre but to change to new coordinates of new square
        row: selected.row,
        column: selected.column,
      };

      if (direction === "up") {
        targetSquareCoords.row = selected.row - 1;
      } else if (direction === "down") {
        targetSquareCoords.row = selected.row + 1;
      } else if (direction === "left") {
        targetSquareCoords.column = selected.column - 1;
      } else if (direction === "right") {
        targetSquareCoords.column = selected.column + 1;
      }

      let { row, column } = targetSquareCoords;

      //check if coords are out of bounds
      if (
        row < 0 ||
        row >= this.puzzle.rows ||
        column < 0 ||
        column >= this.puzzle.columns
      ) {
        return this;
      }

      if (this.puzzle.squaresArray[row][column].isFilled) { // target square collides into another block that has color already
        return this;
      } else {
        const { color } =
          this.puzzle.squaresArray[selected.row][selected.column];
        if (!this.trail[color]) {
          this.trail[color] = [
            this.puzzle.squaresArray[selected.row][selected.column],
            { row: row, column: column },
          ];
        } else {
          this.trail[color].push({ row: row, column: column });
        }

        this.puzzle.squaresArray[row][column] = new Square(
          row,
          column,
          this.trail[color].length - 1,
          color,
          false,
          true,
          false
        );

        //check for win?
        if (this.checkForWin()) {
          this.puzzle.winFlag = true;
        }
        return this.handleSquareSelect(this.puzzle.squaresArray[row][column]);
      }
    }
    return this;
  }

}
