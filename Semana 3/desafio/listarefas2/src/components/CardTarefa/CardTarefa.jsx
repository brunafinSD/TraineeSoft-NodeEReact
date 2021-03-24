import React from "react";
import Button from "@material-ui/core/Button";
import "./estilo.css";

//sempre receber valor dentro de chaves
const CardTarefa = ({ descricao, status, id, atualizarTarefa, apagarTarefa }) => {
  const atualizarStatus = (id) => {
    atualizarTarefa(id);
  };

  const deletarTarefa = (id) => {
    apagarTarefa(id);
  };

  return (
    <section className="card-tarefa_box">
      <header>
        <h1>{id}</h1>
      </header>
      <p>{descricao}</p>
      <div className="card-tarefa_status">
        <p>finalizada:</p>
        <p>{status ? "Sim" : "Não"}</p>
      </div>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => atualizarStatus(id)}
      >
        Finalizar
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => deletarTarefa(id)}
      >
        Deletar
      </Button>
    </section>
  );
};

export default CardTarefa;
