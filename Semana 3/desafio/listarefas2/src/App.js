import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container} from "@material-ui/core";
import ListaDeTarefas from "./components/ListaDeTarefas/ListaDeTarefas";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <FormularioCadastro></FormularioCadastro>
        <ListaDeTarefas></ListaDeTarefas>
      </Container>
    );
  }
}

export default App;
