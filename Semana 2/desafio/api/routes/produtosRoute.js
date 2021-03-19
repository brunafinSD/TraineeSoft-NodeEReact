const { Router } = require("express");
const ProdutoController = require("../controllers/ProdutoController");

const router = Router();

//C
router.post("/produtos", ProdutoController.criarProduto);
//R
router.get("/produtos", ProdutoController.buscarTudo);
router.get("/produtos/nome/:nome", ProdutoController.buscarPorNome);
router.get("/produtos/:id", ProdutoController.buscarPorID);
//U
router.put("/produtos/:id", ProdutoController.atualizarProduto);
//D
router.delete("/produtos/:id", ProdutoController.deletarProduto);

///////FAZENDO/////
//router.get('/produtos/categoriaAtiva', ProdutoController.buscarPorCategoriaAtiva)
////////////////
module.exports = router;
