import React, { Component } from "react";
import "./estilo.css";

class FormularioDeCadastro extends Component {
  constructor(props) {
    super(props);
    this.descricao = "";
    this.status = false;
    this.id = 0;
  }

  handleMudancaDescricao(evento) {
    this.descricao = evento.target.value;
    //console.log(this.descricao);
  }

  handleMudancaStatus(evento) {
    this.status = evento.target.value;
    //console.log(evento.target.value);
    if (evento.target.value === "sim") {
      this.status = true;
    } else if (evento.target.value === "nao") {
      this.status = false;
    }
  }

  criarTarefa(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    const contador = this.id + 1
    this.id = contador
    this.props.criarTarefa(this.descricao, this.status, this.id);
    //console.log(this.id)
  }

  render() {
    return (
      <form onSubmit={this.criarTarefa.bind(this)}>
        <input
          type="textarea"
          placeholder="digite a descrição da tarefa"
          className="form-cadastro_input_texto"
          maxLength="50"
          onChange={this.handleMudancaDescricao.bind(this)}
        ></input>
        <p>finalizada?</p>
        <label>Sim</label>
        <input
          type="radio"
          id="sim"
          name="status"
          value="sim"
          onChange={this.handleMudancaStatus.bind(this)}
        ></input>
        <label>Não</label>
        <input
          type="radio"
          id="nao"
          name="status"
          value="nao"
          defaultChecked="checked"
          onChange={this.handleMudancaStatus.bind(this)}
        ></input>
        <button type="submit" className="form-cadastro_btn_submit">
          add tarefa
        </button>
      </form>
    );
  }
}
export default FormularioDeCadastro;
