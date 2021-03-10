const bodyParser = require("body-parser");

module.exports = app => {
    app.use(bodyParser.json())
    app.get('/', (requisicao, resposta)=>
        resposta.send('OLA')
    )
}