import React, { useState } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container } from "@material-ui/core";
import ListaDeTarefas from "./components/ListaDeTarefas/ListaDeTarefas";

function App() {
  const [tarefas, setTarefas] = useState([]);
  console.log(tarefas);

  const criarTarefa = (dados) => {
    const tarefaNova = dados
    const novaTarefa = [...tarefas, tarefaNova]
    setTarefas(novaTarefa);


  };
  return (
    <Container component="article" maxWidth="sm">
      <FormularioCadastro criarTarefa={criarTarefa}></FormularioCadastro>
      <ListaDeTarefas tarefas={tarefas}></ListaDeTarefas>
    </Container>
  );
}



export default App;
