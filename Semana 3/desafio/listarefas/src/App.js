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

  render() {
    return (
      <section className="form-cadastro">
        <FormularioDeCadastro
          criarTarefa={this.criarTarefa.bind(this)}
        ></FormularioDeCadastro>
        <ListaDeTarefas
          atualizarStatus={this.atualizarStatus.bind(this)}
          tarefas={this.state.tarefas}
        ></ListaDeTarefas>
      </section>
    );
  }
}

export default App;
