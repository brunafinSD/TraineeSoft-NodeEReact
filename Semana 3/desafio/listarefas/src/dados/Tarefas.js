export default class ArrayTarefas {
  constructor() {
    this.tarefas = [];
  }
  criarTarefa(descricao, status, id) {
    const novaTarefa = new Tarefa(descricao, status, id);
    this.tarefas.push(novaTarefa);
  }
}
class Tarefa {
  constructor(descricao, status, id) {
    this.descricao = descricao;
    this.status = status;
    this.id = id;
  }
}
