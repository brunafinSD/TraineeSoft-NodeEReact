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
///////////FAZENDO/////////////////
//   static async buscarPorCategoriaAtiva(requisicao,resposta){
//     try {

//         }})
//         return resposta.status(200).json(produtosCategoriaAtiva);
//       } catch (error) {
//         return resposta.status(500).json(error.message + ' teste Caiu No Erro');
//       }
//   }
}
module.exports = ProdutoController;
