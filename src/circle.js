import { useState, useEffect, use } from "react";
import "./circle.css";

function Circle({ leftx = 0 }) {
  console.log(leftx);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(leftx);
  useEffect(() => {
    const inter = setInterval(() => {
      setTop((top) => top + Math.random() * 4);
    }, 25);
    return () => clearInterval(inter);
  }, []);
  return (
    <>
      <div
        className="circle"
        id="circle"
        style={{ transform: `translateX(${leftx}px) translateY(${top}px)` }}
      ></div>
    </>
  );
}

export default Circle;
