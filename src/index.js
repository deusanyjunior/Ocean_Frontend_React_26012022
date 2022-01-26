import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld";

ReactDOM.render(
  <HelloWorld 
    nome={"Antonio Deusany"} 
    sobrenome={"de Carvalho Junior"}
    />
  ,
  document.getElementById('root')
)