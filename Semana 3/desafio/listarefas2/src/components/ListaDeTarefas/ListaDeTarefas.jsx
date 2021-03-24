import React from "react";
import CardTarefa from "../CardTarefa/CardTarefa";
import "./estilo.css"

function ListaDeTarefas() {
  return (
    <ul className="lista-de-tarefas_lista">
      <li className="lista-de-tarefas_item">
        <CardTarefa></CardTarefa>
      </li>
    </ul>
  );
}

export default ListaDeTarefas;
