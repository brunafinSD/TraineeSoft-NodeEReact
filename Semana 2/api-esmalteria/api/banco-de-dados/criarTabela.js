const modeloTabela = require('../rotas/marcas/modeloTabelaMarcas')

modeloTabela
.sync()
.then(()=>console.log('Tabela de Marcas criada'))
.catch(console.log())