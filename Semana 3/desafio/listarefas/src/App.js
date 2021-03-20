import React, { Component } from "react";
import ListaDeTarefas from "./components/ListaDeTarefas";
import FormularioDeCadastro from "./components/FormularioDeCadastro";
class App extends Component {
  render() {
    return (
      <section className="form-cadastro">
        <FormularioDeCadastro></FormularioDeCadastro>
        <ListaDeTarefas></ListaDeTarefas>
      </section>
    );
  }
}

export default App;
