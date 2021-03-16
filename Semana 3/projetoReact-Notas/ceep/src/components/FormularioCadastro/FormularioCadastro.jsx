import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);

  }

  render() {
    return (
      <form className="formulario-cadastro"
      onSubmit={this._criarNota.bind(this)}
      >
        <input
          className="formulario-cadastro_input"
          type="text"
          placeholder="título"
          onChange={this._handleMudancaTitulo.bind(this)}
        ></input>
        <textarea
          rows="15"
          className="formulario-cadastro_mensagem"
          placeholder="escreva a sua nota"
          onChange={this._handleMudancaTexto.bind(this)}
        ></textarea>
        <button className="formulario-cadastro_input formulario-cadastro_botao">
          criar nota
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
