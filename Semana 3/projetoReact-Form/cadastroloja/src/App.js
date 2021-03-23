import { Component, Fragment } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <Fragment>
        <p>Formulário de cadastro</p>
        <FormularioCadastro></FormularioCadastro>
      </Fragment>
    );
  }
}
export default App;
