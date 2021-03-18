//arquivo que tem todas as rotas para fazer o crud

const roteador = require("express").Router();
const tabelaMarcas = require("./tabelaMarca.js");
const Marca = require("./Marca");

roteador.post("/", async (req, res) => {
  const dadosRecebidos = req.body;
  const marca = new Marca(dadosRecebidos);
  await marca.criar();
  res.status(201);
  res.send(JSON.stringify(marca));
});

roteador.get("/", async (req, res) => {
  const resultados = await tabelaMarcas.listar();
  res.status(200);
  res.send(JSON.stringify(resultados));
});

roteador.get("/:idMarca", async (req, res) => {
  try {
    const id = req.params.idMarca;
    const marca = new Marca({ id: id });
    await marca.carregar();
    res.status(200);
    res.send(JSON.stringify(marca));
  } catch (error) {
    res.status(404);
    res.send(JSON.stringify({ mensagem: error.message }));
  }
});

roteador.put("/:idMarca", async (req, res) => {
  try {
    const id = req.params.idMarca;
    const dadosRecebidos = req.body;
    const dados = Object.assign({}, dadosRecebidos, { id: id });
    const marca = new Marca(dados);
    await marca.atualizar();
    res.status(204);
    res.end();
  } catch (error) {
    res.status(400);
    res.send(JSON.stringify({ mensagem: error.message }));
  }
});

roteador.delete("/:idMarca", async (req, res) => {
  try {
    const id = req.params.idMarca;
    const marca = new Marca({ id: id });
    await marca.carregar();
    await marca.deletar();
    res.status(204);
    res.end();
  } catch (error) {
    res.status(404);
    res.send(
      JSON.stringify({
        mensagem: error.message,
      })
    );
  }
});

module.exports = roteador;
