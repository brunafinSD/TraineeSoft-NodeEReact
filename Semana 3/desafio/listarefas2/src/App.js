import React, { useState } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container } from "@material-ui/core";
import ListaDeTarefas from "./components/ListaDeTarefas/ListaDeTarefas";

function App() {
  const [tarefas, setTarefas] = useState([]);
  console.log(tarefas);

  const criarTarefa = (dados) => {
    const tarefaNova = dados;
    const novaTarefa = [...tarefas, tarefaNova];
    setTarefas(novaTarefa);
  };

  const atualizarTarefa = (id) => {
    const atualizaTarefa = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.status = true;
        return tarefa;
      } else {
        return tarefa;
      }
    });
    setTarefas(atualizaTarefa);
  };

  const apagarTarefa = (id) => {
    const listaAtualizada = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(listaAtualizada);
  };

  return (
    <Container component="article" maxWidth="sm">
      <FormularioCadastro criarTarefa={criarTarefa}></FormularioCadastro>
      <ListaDeTarefas
        tarefas={tarefas}
        atualizarTarefa={atualizarTarefa}
        apagarTarefa={apagarTarefa}
      ></ListaDeTarefas>
    </Container>
  );
}

export default App;
