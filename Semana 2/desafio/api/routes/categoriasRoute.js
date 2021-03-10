const {Router} = require ('express')
const CategoriaController = require('../controllers/CategoriaController')

const router = Router()

router.get('/categorias', CategoriaController.buscaTudo)

module.exports = router