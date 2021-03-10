const {Router} = require ('express')
const ProdutoController = require('../controllers/ProdutoController')

const router = Router()

router.get('/produtos', ProdutoController.buscarTudo)
router.get('/produtos/nome/:nome', ProdutoController.buscarPorNome)
///////FAZENDO/////
//router.get('/produtos/categoriaAtiva', ProdutoController.buscarPorCategoriaAtiva)
////////////////
router.post('/produtos', ProdutoController.criarProduto)

module.exports = router