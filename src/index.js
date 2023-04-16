import React from "react";
import ReactDOM from "react-dom";
import * as pi from "./math";
console.log(pi);
ReactDOM.render(
  <ul>
    <li>{pi.pi}</li>
    <li>{pi.doublePI}</li>
    {/* as defult contains a function  */}
    <li>{pi.default()}</li>
  </ul>,
  document.getElementById("root")
);

// import triplePI, { doublePI, pi } from "./math";
// ReactDOM.render(
//   <ul>
//     <li>{pi}</li>
//     <li>{doublePI}</li>
//     {/* as triplePI is a function  */}
//     <li>{triplePI()}</li>
//   </ul>,
//   document.getElementById("root")
// );
