import React, { Component } from "react";
import ListaDeTarefas from "./components/ListaDeTarefas/";
import FormularioDeCadastro from "./components/FormularioDeCadastro/";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tarefas: [],
    };
  }

  criarTarefa(descricao, status, id) {
    const novaTarefa = { descricao, status, id };
    const novoArrayTarefas = [...this.state.tarefas, novaTarefa];
    const novoEstado = {
      tarefas: novoArrayTarefas,
    };
    this.setState(novoEstado);
  }

  atualizarStatus(id) {
    const tarefaAtualizada = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.status = true;
      }
    });
    this.setState(tarefaAtualizada);
  }

  //função extra
  deletarTarefa(id) {
    const arrayTarefaDeletada = this.state.tarefas
    var indice = arrayTarefaDeletada.findIndex(tarefa=>tarefa.id === id) //findIndex pega o index do array
    arrayTarefaDeletada.splice(indice, 1)
    this.setState(arrayTarefaDeletada)
  }

  render() {
    return (
      <section className="form-cadastro">
        <FormularioDeCadastro
          criarTarefa={this.criarTarefa.bind(this)}
        ></FormularioDeCadastro>
        <ListaDeTarefas
          deletarTarefa={this.deletarTarefa.bind(this)}
          atualizarStatus={this.atualizarStatus.bind(this)}
          tarefas={this.state.tarefas}
        ></ListaDeTarefas>
      </section>
    );
  }
}

export default App;
