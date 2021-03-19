const {Router} = require('express')
const NivelController = require ('../controller/NivelController')

const router = Router();

router.get("/niveis", NivelController.pegarTodosOsNiveis);
router.get("/niveis/:id", NivelController.pegarUmNivel)
router.post("/niveis", NivelController.criarNivel)
router.put("/niveis/:id", NivelController.atualizarNivel)
router.delete("/niveis/:id", NivelController.apagarNivel)
module.exports = router;