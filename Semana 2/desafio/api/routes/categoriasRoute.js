const {Router} = require ('express')
const CategoriaController = require('../controllers/CategoriaController')

const router = Router()

router.get('/categorias', CategoriaController.buscarTudo)
router.post('/categorias', CategoriaController.criarCategoria)

module.exports = router