import React from "react";
import Button from "@material-ui/core/Button";
import "./estilo.css";

function CardTarefa() {
  return (
    <section className="card-tarefa_box">
      <header>
        <h1>id</h1>
      </header>
      <p>descrição</p>
      <div className="card-tarefa_status">
      <p>finalizada:</p>
      <p>Sim</p>
      </div>
      <Button variant="contained" color="secondary" size="small">
        Finalizar
      </Button>
      <Button variant="contained" color="secondary" size="small">
        Deletar
      </Button>
    </section>
  );
}

export default CardTarefa;
