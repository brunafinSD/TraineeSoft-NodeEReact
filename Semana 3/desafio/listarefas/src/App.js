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

  criarTarefa(descricao, status) {
    const novaTarefa = {descricao, status };
    const novoArrayTarefas = [...this.state.tarefas, novaTarefa];
    const novoEstado = {
      tarefas: novoArrayTarefas,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="form-cadastro">
        <FormularioDeCadastro
          criarTarefa={this.criarTarefa.bind(this)}
        ></FormularioDeCadastro>
        <ListaDeTarefas tarefas={this.state.tarefas}></ListaDeTarefas>
      </section>
    );
  }
}

export default App;
