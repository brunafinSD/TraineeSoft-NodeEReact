//esse arquivo contém o conteúdo para criar a tabela.
//modeloTabela vai ter acesso ao conteúdo de modeloTabelaMarcas que é o arquivo que contém os dados
// da tabela usando sequelize, esse manda executar aquele.

const modeloTabela = require('../rotas/marcas/modeloTabelaMarcas')

modeloTabela
.sync()
.then(()=>console.log('Tabela de Marcas criada'))
.catch(console.log())