import { useState, useEffect, use } from "react";
import "./testtest.css";
function App() {
  const [lastKey, setLastKey] = useState("");
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const speed = 30;

  const keyPressed = (event) => {
    setLastKey(event.key);
    let key = event.key;
    console.log(key);
    if (key === "w") {
      if (top != 0) {
        setTop((top) => top - speed);
      }
      console.log(top);
    } else if (key === "a") {
      setLeft((left) => left - speed);
    } else if (key === "s") {
      setTop((top) => top + speed);
    } else if (key === "d") {
      setLeft((left) => left + speed);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPressed);

    return () => {
      window.removeEventListener("keydown", keyPressed);
    };
  }, []);

  return (
    <div
      className="box"
      id="box"
      style={{ left: left + "px", top: top + "px" }}
    ></div>
  );
  // }

  //     window.addEventListener("keydown", keyPressed);

  //     return () => {
  //       window.removeEventListener("keydown", keyPressed);
  //     };
  //   }, []);

  //   return <>input: {lastkey}</>;
  // }

  // if (input == "q") {
  //   input.style.color: "red";
  // }
  // if (input == "w") {
  //     color: "red";
}

export default App;
