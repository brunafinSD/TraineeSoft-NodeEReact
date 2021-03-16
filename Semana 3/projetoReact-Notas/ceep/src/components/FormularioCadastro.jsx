import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="título"></input>
        <textarea placeholder="escreva a sua nota"></textarea>
        <button>criar nota</button>
      </form>
    );
  }
}
export default FormularioCadastro;
