const database = require("../models");

class CategoriaController {
  static async criarCategoria(requisicao, resposta) {
    const novaCategoria = requisicao.body;
    try {
      const novaCategoriaCriada = await database.Categorias.create(
        novaCategoria
      );
      return resposta.status(201).json(novaCategoriaCriada);
    } catch (error) {
      return resposta.status(500).json(error.message);
    }
  }
  static async buscarTudo(requisicao, resposta) {
    try {
      const todasAsCategorias = await database.Categorias.findAll();
      return resposta.status(200).json(todasAsCategorias);
    } catch (error) {
      return resposta.status(500).json(error.message);
    }
  }

  static async buscarPorID(requisicao, resposta) {
    const { id } = requisicao.params;
    try {
      const encontrada = await database.Categorias.findOne({
        where: {
          id: Number(id),
        },
      });
      return resposta.status(200).json(encontrada);
    } catch (error) {
      return resposta.status(500).json(error.message);
    }
  }

  static async atualizarCategoria(requisicao, resposta) {
    const { id } = requisicao.params;
    const novasInfos = requisicao.body;
    try {
      await database.Categorias.update(novasInfos, {
        where: { id: Number(id) },
      });
      const categoriaAtualizada = await database.Categorias.findOne({
        where: { id: Number(id) },
      });
      return resposta.status(200).json(categoriaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletarCategoria(requisicao, resposta) {
    const { id } = requisicao.params;
    try {
      await database.Categorias.destroy({ where: { id: Number(id) } });
      return resposta.status(200).json({ mensagem: `Categoria ${id} foi apagada` });
    } catch (error) {
      return resposta.status(500).json(error.message);
    }
  }
}
module.exports = CategoriaController;
