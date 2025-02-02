import React, { useState } from "react";
import "./test.css";
// function App() {
//   return (
//     <div>
//       <p>Test</p>
//     </div>
//   );
// }

// export default App;

function Box() {
  const [boxposition, position] = useState(0);
  const [reverseboxposition, reverseposition] = useState(0);
  return (
    //
    //   <div
    //     className="box"
    //     id="box"
    //     style={{ width: boxsize + "px", height: boxsize + "px" }}
    //   ></div>
    //   ;
    //   <button
    //     onClick={() => {
    //       size(boxsize + 100);
    //     }}
    //   >
    //     click
    //   </button>
    // </>
    <>
      <div
        className="box"
        id="box"
        style={{ left: boxposition + "px", top: reverseboxposition + "px" }}
      ></div>
      <button
        id="right"
        onClick={() => {
          position(boxposition + 10);
        }}
      >
        right
      </button>
      <button
        id="left"
        onClick={() => {
          position(boxposition - 10);
        }}
      >
        left
      </button>
      <button
        id="up"
        onClick={() => {
          reverseposition(reverseboxposition - 10);
        }}
      >
        up
      </button>
      <button
        id="down"
        onClick={() => {
          reverseposition(reverseboxposition + 10);
        }}
      >
        down
      </button>
    </>
  );
}

export default Box;
