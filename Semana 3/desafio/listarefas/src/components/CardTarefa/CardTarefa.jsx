import React, { Component } from "react";
import "./estilo.css"

class CardTarefa extends Component {
  render() {
    return (
      <section className="card-tarefa">
        <header>
          <h3>ID</h3>
          <button type="submit" className="card-tarefa_btn">
            finalizar
          </button>
        </header>
        <p>Exemplo de card de tarefa</p>
        <p>finalizada:</p>
        <label>não</label>
      </section>
    );
  }
}

export default CardTarefa;
