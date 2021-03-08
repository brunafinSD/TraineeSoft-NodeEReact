const TabelaFilmes = require('../rotas/filmes/ModeloTabelaFilmes');

TabelaFilmes.sync().then(()=>console.log('Tabela de Filmes criada!')).catch(console.log);