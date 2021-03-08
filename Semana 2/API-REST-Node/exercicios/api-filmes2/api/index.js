const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const roteador = require('./rotas/filmes')

app.use('/api/filmes', roteador)

app.use(bodyParser.json());
app.listen(3000, ()=> console.log("API funcioando, tudo certo!"));