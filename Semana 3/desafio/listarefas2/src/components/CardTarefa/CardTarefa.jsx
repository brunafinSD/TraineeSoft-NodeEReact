import React from "react";
import Button from "@material-ui/core/Button";
import "./estilo.css";

const CardTarefa = ({descricao, status, id}) => { //sempre receber valor dentro de chaves
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
      <Button variant="contained" color="secondary" size="small">
        Finalizar
      </Button>
      <Button variant="contained" color="secondary" size="small">
        Deletar
      </Button>
    </section>
  );
};

export default CardTarefa;
