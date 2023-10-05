import React from "react";
import ReactDOM from "react-dom";

const luckyNumber = 1;
const fname = "ola";
const lname = "wale";
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p>your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
