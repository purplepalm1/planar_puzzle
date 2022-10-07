const puzzleInformation = {
  name: "PlanarPuzzle 8x8",
  board: {
    rows: 8,
    columns: 8,
  },
  squares: [
    {
      row: 0,
      column: 7,
      label: "B1",
      color: "blue",
    },
    {
      row: 2,
      column: 4,
      label: "Y2",
      color: "yellow",
    },
    {
      row: 4,
      column: 4,
      label: "R1",
      color: "red",
    },
    {
      row: 6,
      column: 7,
      label: "Y1",
      color: "yellow",
    },
    {
      row: 7,
      column: 0,
      label: "R2",
      color: "red",
    },
    {
      row: 7,
      column: 7,
      label: "B2",
      color: "blue",
    },
  ],
  winningSquares: {
    red: [
      {
        row: 4,
        column: 5,
        color: "red",
        nextTo: "R1",
      },
      {
        row: 6,
        column: 0,
        color: "red",
        nextTo: "R2",
      },
    ],
    blue: [
      {
        row: 1,
        column: 7,
        color: "blue",
        nextTo: "B1",
      },
      {
        row: 7,
        column: 6,
        color: "blue",
        nextTo: "B2",
      },
    ],
    yellow: [
      {
        row: 2,
        column: 3,
        color: "yellow",
        nextTo: "Y2",
      },
      {
        row: 6,
        column: 6,
        color: "yellow",
        nextTo: "Y1",
      },
    ],
  },
};

export { puzzleInformation };
