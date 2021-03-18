//arquivo raíz, chama os métodos a partir do app.use('/api/marcas', roteador)

const express = require ('express'); //instancia express
const bodyParser = require ('body-parser'); //instancia body parser
const roteador = require('./rotas/marcas')

const app = express(); // cria app usando o express
app.use(bodyParser.json()); //usa body-parser para converter para json

app.use('/api/marcas', roteador)
app.listen(3000, ()=> console.log("Ok, funcionando, pronto para gerenciar coleção de esmaltes")) //api rodando na porta 3000 (localhost:3000)
