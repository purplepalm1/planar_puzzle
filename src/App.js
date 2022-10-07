import { useState, useEffect } from "react";
import Controller from "./model/controller.js";
import { puzzleInformation as level1 } from "./model/puzzles/level1.js";
import { puzzleInformation as level2 } from "./model/puzzles/level2.js";
import { puzzleInformation as level3 } from "./model/puzzles/level3.js";

const puzzles = [
  JSON.parse(JSON.stringify(level1)),
  JSON.parse(JSON.stringify(level2)),
  JSON.parse(JSON.stringify(level3)),
];
let puzzleIndex = 2;

function App() {
  // Initial instantiation of the model
  const [controller, setController] = useState(
    new Controller(puzzles[puzzleIndex])
  );

  function handleLevelChange(number) {
    if (number < 0) {
      console.log("already at level 1");
    } else if (number > 2) {
      console.log("already at level 3");
    } else {
      puzzleIndex = number;
      setController(new Controller(puzzles[number]));
    }
  }

  return (
    <main>
      <div id="puzzle">
        {controller.puzzle.squaresArray.map((row, rowIndex) => {
          return (
            <div className="row" key={rowIndex}>
              {row.map((square, squareIndex) => {
                return (
                  <div
                    className="square"
                    style={
                      square.isSelected
                        ? {
                          borderColor: "purple",
                          backgroundColor: square.color,
                        }
                        : {
                          borderColor: square.white,
                          backgroundColor: square.color,
                        }
                    }
                    key={`${rowIndex}${squareIndex}`}
                    onClick={(event) => setController({ ...controller.handleSquareSelect(square, event), })} // make new object with everything in controller class
                  >{square.label}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div id="moveButtons">
        <button onClick={() => setController({ ...controller.handleSquareGeneration("up") })}>Up</button>
        <button onClick={() => setController({ ...controller.handleSquareGeneration("left") })}>Left</button>
        <button onClick={() => setController({ ...controller.handleSquareGeneration("right") })}>Right</button>
        <button onClick={() => setController({ ...controller.handleSquareGeneration("down") })}>Down</button>
      </div>
      <div id="levelSelect">
        <button onClick={() => { handleLevelChange(puzzleIndex - 1); }}>Previous Level</button>
        <button onClick={() => { handleLevelChange(puzzleIndex); }}>Reset Level</button>
        <button onClick={() => { handleLevelChange(puzzleIndex + 1); }}>Next Level</button>
      </div>
      {
        controller.puzzle.isWon ? (<div id="win message" style={{ color: "white" }}>
          <h1>Congrats! You Won!</h1> </div>
        ) : (<></>)}
    </main >
  );
}

export default App;
