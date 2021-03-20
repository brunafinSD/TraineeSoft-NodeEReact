import React, { Component } from "react";
import "./estilo.css";

class FormularioDeCadastro extends Component {
  constructor() {
    super();
    this.descricao = "";
  }

  handleMudancaDescricao(evento) {
    this.descricao = evento.target.value;
    console.log(this.descricao);
  }

  render() {
    return (
      <form>
        <input
          type="textarea"
          placeholder="digite a descrição da tarefa"
          className="form-cadastro_input_texto"
          maxLength="50"
          onChange={this.handleMudancaDescricao.bind(this)}
        ></input>
        <p>finalizada?</p>
        <label>Sim</label>
        <input type="radio" id="sim" name="status" value="sim"></input>
        <label>Não</label>
        <input
          type="radio"
          id="nao"
          name="status"
          value="nao"
          defaultChecked="checked"
        ></input>
        <button type="submit" className="form-cadastro_btn_submit">
          add tarefa
        </button>
      </form>
    );
  }
}
export default FormularioDeCadastro;
