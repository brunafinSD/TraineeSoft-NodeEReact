//arquivo com as caracteristicas da nossa tabela, colunas: nome e email, opções são adicionais do sequelize.
const Sequelize = require ('sequelize')
const instancia = require ('../../banco-de-dados')

const colunas ={
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

const opcoes = {
    freezeTable : true,
    tableName: 'marcas',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtulizacao',
    version: 'versao'
}

module.exports = instancia.define('marcas', colunas, opcoes)