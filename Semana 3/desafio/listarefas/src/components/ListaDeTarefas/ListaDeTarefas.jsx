import React, { Component } from "react";
import CardTarefa from "../CardTarefa";

class ListaDeTarefas extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.tarefas.map((tarefa, index) => {
          return (
            <li key={index}>
              <CardTarefa
                deletarTarefa={this.props.deletarTarefa}
                atualizarStatus={thisco.props.atualizarStatus}
                descricao={tarefa.descricao}
                status={tarefa.status}
                id={tarefa.id}
              ></CardTarefa>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeTarefas;
