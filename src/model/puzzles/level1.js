const puzzleInformation = {
  name: "PlanarPuzzle 2x4",
  board: {
    rows: 2,
    columns: 4,
  },
  squares: [
    {
      row: 0,
      column: 0,
      label: "R1",
      color: "red",
    },
    {
      row: 0,
      column: 2,
      label: "R2",
      color: "red",
    },
    {
      row: 0,
      column: 3,
      label: "O1",
      color: "orange",
    },
    {
      row: 1,
      column: 2,
      label: "O2",
      color: "orange",
    },
  ],
  winningSquares: {
    red: [
      {
        row: 0,
        column: 1,
        color: "red",
        nextTo: "R2",
      },
      {
        row: 1,
        column: 0,
        color: "red",
        nextTo: "R1",
      },
    ],
    orange: [
      {
        row: 1,
        column: 3,
        color: "orange",
        nextTo: "O1",
      },
      {
        row: 1,
        column: 3,
        color: "orange",
        nextTo: "O2",
      },
    ],
  },
};

export { puzzleInformation };
