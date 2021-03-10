const database = require('../models')

class CategoriaController{
    static async buscaTudo(requisicao, resposta){
        try{
        const todasAsCategorias = await database.Categorias.findAll()
        return resposta.status(200).json(todasAsCategorias)
        }catch(error){
            return resposta.status(500).json(error.message)
        }
    }
}
module.exports = CategoriaController