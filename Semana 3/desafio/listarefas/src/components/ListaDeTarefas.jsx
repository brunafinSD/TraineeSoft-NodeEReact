import React, { Component } from "react";

export default class ListaDeTarefas extends Component {
  render() {
    return (
      <ul>
        <li>
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
        </li>
      </ul>
    );
  }
}
