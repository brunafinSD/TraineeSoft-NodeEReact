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
      const todosOsProdutos = await database.Produtos.findAll();
      return resposta.status(200).json(todosOsProdutos);
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

  static async buscarPorID(requisicao, resposta) {
    const { id } = requisicao.params;
    try {
      const encontrada = await database.Produtos.findOne({
        where: {
          id: Number(id),
        },
      });
      return resposta.status(200).json(encontrada);
    } catch (error) {
      return resposta.status(500).json(error.message);
    }
  }

  static async atualizarProduto(requisicao, resposta) {
    const { id } = requisicao.params;
    const novasInfos = requisicao.body;
    try {
      await database.Produtos.update(novasInfos, { where: { id: Number(id) } });
      const produtoAtualizado = await database.Produtos.findOne({
        where: { id: Number(id) },
      });
      return resposta.status(200).json(produtoAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletarProduto(requisicao, resposta) {
    const { id } = requisicao.params;
    try {
      await database.Produtos.destroy({ where: { id: Number(id) } });
      return resposta
        .status(200)
        .json({ mensagem: `Produto ${id} foi apagado` });
    } catch (error) {
      return resposta.status(500).json(error.message);
    }
  }
}
module.exports = ProdutoController;
