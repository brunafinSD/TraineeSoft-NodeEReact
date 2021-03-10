const database = require('../models')

class CategoriaController{
    static async buscaTudo(requisicao, resposta){
        try{
        const todasAsCategorias = await database.Categorias.finAll()
        return resposta.status(200).json(todasAsCategorias)
        }catch(error){
            return resposta.(500).json(error.message)
        }
    }
}
module.exports = CategoriaController