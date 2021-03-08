
const Sequelize = require ('sequelize')
const instancia = require ('../../banco-de-dados')

const colunas ={
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria:{
        type: Sequelize.ENUM('acao', 'aventura', 'documentario'),
        allowNull: false
    }
}

const opcoes = {
    freezeTable : true,
    tableName: 'filmes',
    timestamps: true,
    createdAt: 'dataCadastro',
    updatedAt: 'dataAtulizacao',
    version: 'versao'
}

module.exports = instancia.define('filmes', colunas, opcoes)