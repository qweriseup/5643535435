import { useState, useEffect, use } from "react";
import "./circle.js";
import Circle from "./circle.js";

function Game() {
  return (
    <>
      <Circle leftx={Math.random() * (window.innerWidth - 100)} />
      <Circle leftx={Math.random() * (window.innerWidth - 100)} />
      <Circle leftx={Math.random() * (window.innerWidth - 100)} />
      <Circle leftx={Math.random() * (window.innerWidth - 100)} />
      <Circle leftx={Math.random() * (window.innerWidth - 100)} />
    </>
  );
}

export default Game;
