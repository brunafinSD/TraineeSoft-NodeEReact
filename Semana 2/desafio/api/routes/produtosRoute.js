const {Router} = require ('express')
const ProdutoController = require('../controllers/ProdutoController')

const router = Router()

router.get('/produtos', ProdutoController.buscarTudo)
router.get('/produtos/nome/:nome', ProdutoController.buscarPorNome)
router.post('/produtos', ProdutoController.criarProduto)

module.exports = router