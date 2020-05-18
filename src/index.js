import React from "react";
import ReactDOM from "react-dom";

const name = "Sakshi ";

ReactDOM.render(
  <div>
    <h1>
      {" "}
      Hello {name}, your favorite number is {Math.ceil(2 + 5)}{" "}
    </h1>
    <ul>
      <li> TEA </li>
      <li> coffeee </li>
      <li> Water </li>
    </ul>
  </div>,
  document.getElementById("root")
);
