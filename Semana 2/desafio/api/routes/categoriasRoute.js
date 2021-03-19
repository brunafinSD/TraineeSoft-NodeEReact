const { Router } = require("express");
const CategoriaController = require("../controllers/CategoriaController");

const router = Router();

//C
router.post("/categorias", CategoriaController.criarCategoria);
//R
router.get("/categorias", CategoriaController.buscarTudo);
router.get("/categorias/:id", CategoriaController.buscarPorID);
//U
router.put("/categorias/:id", CategoriaController.atualizarCategoria);
//D
router.delete("/categorias/:id", CategoriaController.deletarCategoria);

module.exports = router;
