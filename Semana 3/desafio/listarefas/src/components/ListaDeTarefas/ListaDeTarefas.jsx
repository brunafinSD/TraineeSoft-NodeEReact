import React, { Component } from "react";
import CardTarefa from "../CardTarefa";

class ListaDeTarefas extends Component {
  render() {
    return (
      <ul>
        {Array.of("a fazer", "feito").map((card, index) => {
          return (
            <li key={index}>
              <div>{card}</div>
              <CardTarefa></CardTarefa>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeTarefas;
