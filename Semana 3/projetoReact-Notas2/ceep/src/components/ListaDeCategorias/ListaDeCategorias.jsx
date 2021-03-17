import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
      if(e.key === "Enter"){
          console.log("add categoria")
      }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
        </ul>
        <input
          type="text"
          placeholder="Digite uma nova categoria"
          className="lista-categorias_input"
          onKeyUp={this._handleEventoInput.bind(this)}
        ></input>
      </section>
    );
  }
}

export default ListaDeCategorias;
