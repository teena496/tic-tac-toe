import React from "react";
import "./page.css";

export default function Square({ position, onSquareClick }) {
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        <h1> {position}</h1>
      </button>
    </>
  );
}
