"use client";
import { useState } from "react";
import "./page.css";
import Square from "./Square";

export default function Board() {
  const [clickCount, setClickCount] = useState(0);
  const [boardValues, setBoardValues] = useState(Array(9).fill(null));

  const winner = calculateWinner(boardValues);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (boardValues.every((x) => x != null)) {
    status = "Game Over";
  } else {
    status = "Next player: " + (clickCount % 2 === 0 ? "X" : "O");
  }

  const handleClick = (position) => {
    const array = [...boardValues];
    if (array[position] || calculateWinner(boardValues)) return;
    setClickCount(clickCount + 1);
    array[position] = clickCount % 2 === 0 ? "X" : "O";

    setBoardValues(array);
  };

  function calculateWinner(boardValues) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        boardValues[a] &&
        boardValues[a] === boardValues[b] &&
        boardValues[a] === boardValues[c]
      ) {
        return boardValues[a];
      }
    }
    return null;
  }

  return (
    <>
      <h1 className="heading">Tic Tac Toe</h1>
      <div className="board-row">
        <Square
          position={boardValues[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          position={boardValues[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          position={boardValues[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          position={boardValues[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          position={boardValues[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          position={boardValues[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          position={boardValues[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          position={boardValues[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          position={boardValues[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
      <h2 className="result">{status}</h2>
    </>
  );
}
