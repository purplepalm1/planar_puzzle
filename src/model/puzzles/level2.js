const puzzleInformation = {
  name: "PlanarPuzzle 4x8",
  board: {
    rows: 4,
    columns: 8,
  },
  squares: [
    {
      row: 0,
      column: 1,
      label: "R1",
      color: "red",
    },
    {
      row: 0,
      column: 2,
      label: "B1",
      color: "blue",
    },
    {
      row: 0,
      column: 5,
      label: "B2",
      color: "blue",
    },
    {
      row: 1,
      column: 1,
      label: "",
      color: "black",
      isVoid: true,
    },
    {
      row: 1,
      column: 4,
      label: "Y1",
      color: "yellow",
    },
    {
      row: 2,
      column: 4,
      label: "R2",
      color: "red",
    },
    {
      row: 3,
      column: 4,
      label: "Y2",
      color: "yellow",
    },
  ],
  winningSquares: {
    red: [
      {
        row: 0,
        column: 0,
        color: "red",
        nextTo: "R1",
      },
      {
        row: 2,
        column: 3,
        color: "red",
        nextTo: "R2",
      },
    ],
    blue: [
      {
        row: 1,
        column: 2,
        color: "blue",
        nextTo: "B1",
      },
      {
        row: 0,
        column: 4,
        color: "blue",
        nextTo: "B2",
      },
    ],
    yellow: [
      {
        row: 1,
        column: 5,
        color: "yellow",
        nextTo: "Y1",
      },
      {
        row: 3,
        column: 5,
        color: "yellow",
        nextTo: "Y2",
      },
    ],
  },
};

export { puzzleInformation };
