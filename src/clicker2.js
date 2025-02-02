import React, { useState } from "react";
import "./clicker2.css";

function Clickerminus() {
  const [click, setCount] = useState(0);

  return (
    <>
      <div>clicked: {click}</div>
      <button
        onClick={() => {
          setCount(click - 1);
        }}
      >
        click
      </button>
    </>
  );
}

export default Clickerminus;
