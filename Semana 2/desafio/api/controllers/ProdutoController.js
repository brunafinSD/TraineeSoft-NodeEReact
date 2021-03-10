const database = require("../models");

class ProdutoController {
  static async criarProduto(requisicao, resposta) {
    const novoProduto = requisicao.body;
    try {
      const novoProdutoCriado = await database.Produtos.create(novoProduto);
      return resposta.status(201).json(novoProdutoCriado);
    } catch (error) {
      return resposta.status(500).json(error.message);
    }
  }

  static async buscarTudo(requisicao, resposta) {
    try {
      const todasOsProdutos = await database.Produtos.findAll();
      return resposta.status(200).json(todasOsProdutos);
    } catch (error) {
      return resposta.status(500).json(error.message);
    }
  }

  static async buscarPorNome(requisicao, resposta) {
    const { nome } = requisicao.params;
    try {
      const nomeProduto = await database.Produtos.findAll({
        where: {
          nome: nome,
        },
      });
      return resposta.status(200).json(nomeProduto);
    } catch (error) {
      return resposta.status(500).json(error.message);
    }
  }
}
module.exports = ProdutoController;
