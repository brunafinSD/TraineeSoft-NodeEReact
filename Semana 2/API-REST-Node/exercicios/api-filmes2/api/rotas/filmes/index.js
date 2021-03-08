const TabelaFilmes = require('./TabelaFilmes');

const roteador = require('express').Router();

roteador.get('/', async (requisicao, resposta)=>{
    const resultados = await TabelaFilmes.listar();
    resposta.send(
        JSON.stringify(resultados)
    )
})

module.exports = roteador;