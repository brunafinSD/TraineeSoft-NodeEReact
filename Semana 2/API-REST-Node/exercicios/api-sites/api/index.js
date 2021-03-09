const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const sitesAcessados = [];

app.post("/api/sites", (requisicao, resposta) => {
  if ((!requisicao.body.url) || (!requisicao.body.dataAcesso)) {
    resposta.status(400);
    resposta.send(
      JSON.stringify({
        mensagem: "Por favor, preencha url e dataAcesso",
      })
    );
    resposta.end();
    return;
  }
  
  const site = {
    url: requisicao.body.url,
    dataAcesso: requisicao.body.dataAcesso,
  };

  sitesAcessados.push(site);
  resposta.status(201);
  resposta.send(JSON.stringify(site));
});

app.listen(3000, () => console.log("API Sites Favoritos está funcionando"));
