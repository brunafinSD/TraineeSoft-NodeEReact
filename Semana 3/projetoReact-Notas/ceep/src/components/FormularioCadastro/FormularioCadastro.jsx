import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="formulario-cadastro">
        <input
          className="formulario-cadastro_input"
          type="text"
          placeholder="título"
        ></input>
        <textarea
          rows="15"
          className="formulario-cadastro_mensagem"
          placeholder="escreva a sua nota"
        ></textarea>
        <button className="formulario-cadastro_input formulario-cadastro_botao">
          criar nota
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
