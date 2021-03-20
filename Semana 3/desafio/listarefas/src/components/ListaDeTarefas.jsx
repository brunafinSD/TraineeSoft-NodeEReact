import React, { Component } from "react";
import CardTarefa from "./CardTarefa";

class ListaDeTarefas extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardTarefa></CardTarefa>
        </li>
        <li>
          <CardTarefa></CardTarefa>
        </li>
        <li>
          <CardTarefa></CardTarefa>
        </li>
      </ul>
    );
  }
}
export default ListaDeTarefas;
