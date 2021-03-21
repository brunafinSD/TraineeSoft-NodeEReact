import React, { Component } from "react";
import CardTarefa from "../CardTarefa";

class ListaDeTarefas extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <ul>
        {this.props.tarefas.map((tarefa, index) => {
          return (
            <li key={index}>
              <CardTarefa id={index+1} descricao={tarefa.descricao} status={tarefa.status}></CardTarefa>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeTarefas;
