//arquivo da classe Marca com seus atributos e métodos particulares
//construtor define o que a marca tem
//pega esses atributos e passa para os métodos do sequelize

const tabelaMarca = require("./tabelaMarca");

class Marca {
  constructor({ id, nome, email, dataCriacao, dataAtualizacao, versao }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.dataCriacao = dataCriacao;
    this.dataAtualizacao = dataAtualizacao;
    this.versao = versao;
  }

  async criar() {
    const resultado = await tabelaMarca.inserir({
      nome: this.nome,
      email: this.email,
    });
    this.id = resultado.id;
    this.dataCriacao = resultado.dataCriacao;
    this.dataAtualizacao = resultado.dataAtualizacao;
    this.versao = resultado.versao;
  }

  async carregar() {
    const encontrado = await tabelaMarca.buscarID(this.id);
    this.nome = encontrado.nome;
    this.email = encontrado.email;

    this.dataCriacao = encontrado.dataCriacao;
    this.dataAtualizacao = encontrado.dataAtualizacao;
    this.versao = encontrado.versao;
  }

  async atualizar() {
    await tabelaMarca.buscarID(this.id);
    const campos = ["nome", "email"];
    const dadosParaAtualizar = {};

    campos.forEach((campo) => {
      const valor = this[campo];
      if (typeof valor === "string" && valor.length > 0) {
        dadosParaAtualizar[campo] = valor;
      }
    });

    if (Object.keys(dadosParaAtualizar).length === 0) {
      throw new Error("Não foram fornecidos dados para atualizar");
    }
    await tabelaMarca.atualizar(this.id, dadosParaAtualizar);
  }

  deletar(){
    return tabelaMarca.deletar(this.id)
  }
}

module.exports = Marca;
