const express = require("express"); //chama módulo express
const app = express(); //instancia express
const bodyParser = require("body-parser"); //chama body-parser
app.use(bodyParser.json()); //usa body-parser

const jogosFavoritos = []; //cria lista vazia que vai conter os dados dos jogos

app.post("/api/jogos", (requisicao, resposta) => {
  try {
    if (!requisicao.body.nome || !requisicao.body.plataforma) {
      throw new Error("Campos inválidos!");
    }

    jogosFavoritos.push(requisicao.body);

    resposta.send(JSON.stringify(requisicao.body));
  } catch (erro) {
    resposta.send(JSON.stringify({ mensagem: erro.message }));
  }
});

app.get("/api/jogos", (requisicao, resposta)=>{
    resposta.send(JSON.stringify(jogosFavoritos))
})

app.listen(3000, () => console.log("API JOGOS está funcionando corretamente"));
