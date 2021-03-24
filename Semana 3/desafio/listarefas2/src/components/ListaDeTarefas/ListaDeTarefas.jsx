import React from "react";
import CardTarefa from "../CardTarefa/CardTarefa";
import "./estilo.css";

function ListaDeTarefas({ tarefas, atualizarTarefa, apagarTarefa }){
  return (
    <ul className="lista-de-tarefas_lista">
      {tarefas.map((tarefa, index) => {
        return (
          <li className="lista-de-tarefas_item" key={index}>
            <CardTarefa
              apagarTarefa={apagarTarefa}
              atualizarTarefa = {atualizarTarefa}
              descricao={tarefa.descricao}
              status={tarefa.status}
              id={tarefa.id}
            ></CardTarefa>
          </li>
        );
      })}
    </ul>
  );
};

export default ListaDeTarefas;
