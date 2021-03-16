import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  criarNota(titulo, texto) {
    console.log(`uma nova nota foi criada ` + titulo + texto)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}></FormularioCadastro>
        <ListaDeNotas ></ListaDeNotas>
      </section>
    );
  }
}

export default App;
