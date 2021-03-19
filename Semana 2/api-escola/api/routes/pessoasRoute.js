const { Router } = require("express");
const PessoaController = require("../controller/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.pegarTodasAsPessoas);
router.get("/pessoas/:id", PessoaController.pegarUmaPessoa);
router.post("/pessoas", PessoaController.criarPessoa);
router.put("/pessoas/:id", PessoaController.atualizarPessoa);
router.delete("/pessoas/:id", PessoaController.apagarPessoa);

router.get("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.pegarUmaMatricula);
router.post("/pessoas/:estudanteId/matriculas", PessoaController.criarMatricula)
router.put("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.atualizarMatricula);
router.delete("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.apagarMatricula);
module.exports = router;
