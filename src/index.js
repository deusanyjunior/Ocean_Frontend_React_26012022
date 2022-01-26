import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  return (
    <p>Hello World!</p>
  )
}

ReactDOM.render(
  <HelloWorld />
  ,
  document.getElementById('root')
)