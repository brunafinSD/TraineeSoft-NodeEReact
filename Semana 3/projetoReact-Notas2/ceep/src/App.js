import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import ListaDeCategorias from "./components/ListaDeCategorias/"
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.notas.push(novaNota);
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ nota: arrayNotas });
    console.log("deletar");
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarNota={this.criarNota.bind(this)}
        ></FormularioCadastro>
        <main className="conteudo-principal">
          <ListaDeCategorias></ListaDeCategorias>
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          ></ListaDeNotas>
        </main>
      </section>
    );
  }
}

export default App;
