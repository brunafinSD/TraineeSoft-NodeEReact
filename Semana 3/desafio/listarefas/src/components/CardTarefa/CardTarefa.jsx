import React, { Component } from "react";
import "./estilo.css";

class CardTarefa extends Component {
  atualizarStatus(id) {
    const idTarefa = this.props.id;
    this.props.atualizarStatus(idTarefa);
  }

  //função extra
  deletarTarefa(id) {
    const idTarefa = this.props.id;
    this.props.deletarTarefa(idTarefa);
  }

  render() {
    return (
      <div className="card-tarefa_box">
      <section className="card-tarefa">
        <header>
          <h3>{this.props.id}</h3>
        </header>
        <p className="card-tarefa_descricao">{this.props.descricao}</p>
        <p>finalizada:</p>
        <p>{this.props.status ? "Sim" : "Não"}</p>
        <button
          type="submit"
          className="card-tarefa_btn"
          onClick={this.atualizarStatus.bind(this)}
        >
          finalizar
        </button>
        {/* Extra */}
        <button
          type="submit"
          className="card-tarefa_btn_del"
          onClick={this.deletarTarefa.bind(this)}
        >
          deletar
        </button>
      </section>
      </div>
    );
  }
}

export default CardTarefa;
