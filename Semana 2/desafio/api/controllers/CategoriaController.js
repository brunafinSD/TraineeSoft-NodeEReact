const database = require('../models')

class CategoriaController{
    static async buscarTudo(requisicao, resposta){
        try{
        const todasAsCategorias = await database.Categorias.findAll()
        return resposta.status(200).json(todasAsCategorias)
        }catch(error){
            return resposta.status(500).json(error.message)
        }
    }

    static async criarCategoria(requisicao, resposta){
        const novaCategoria = requisicao.body
        try{
            const novaCategoriaCriada = await database.Categorias.create(novaCategoria)
            return resposta.status(201).json(novaCategoriaCriada)
        }catch(error){
            return resposta.status(500).json(error.message)
        }
    }
}
module.exports = CategoriaController