import React from "react";
import ListaDeTarefas from './components/ListaDeTarefas'
function App() {
  return (
    <section className="form-cadastro">
      <form>
        <input
          type="textarea"
          placeholder="digite a descrição da tarefa"
          className="form-cadastro_input_texto"
          maxLength="50"
        ></input>
        <p>finalizada?</p>
        <label>Sim</label>
        <input type="radio" id="sim" name="status" value="sim"></input>
        <label>Não</label>
        <input type="radio" id="nao" name="status" value="nao" checked="chekced"></input>
        <button type="submit" className="form-cadastro_btn_submit">add tarefa</button>
      </form>
      <ListaDeTarefas></ListaDeTarefas>
    </section>
  );
}

export default App;
