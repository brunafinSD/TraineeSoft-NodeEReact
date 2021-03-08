const express = require('express') //chamando o express
const app = express() // instanciando o express

const bodyParser = require ('body-parser') //chamando plugin 

app.use(bodyParser.json()) //usando plugin

app.get('/api/filmes', (requisicao, resposta)=>{ //criando rota, definindo url passando uma funçao com parâmetros requisicao e resposta
    const filmes = [ //criando objeto com os dados já inseridos
        { nome: 'Procurando o Nemo 2' },
        { nome: 'Assalto ao Banco Central' },
        { nome: 'O jogo da imitação' }
      ]
      resposta.send(JSON.stringify(filmes))//retornando a lista de filmes em formado JSON
})


app.listen(3000, ()=>console.log('A API está funcionando corretamente e aceitando requisições')) // definindo porta e exibindo mensagem
