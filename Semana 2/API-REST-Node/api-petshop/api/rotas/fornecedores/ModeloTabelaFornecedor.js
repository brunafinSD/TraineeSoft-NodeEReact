const Sequelize = require ('sequelize')
const instancia = require ('../../banco-de-dados')

const colunas ={
    empresa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria:{
        type: Sequelize.ENUM('racao','brinquedos'),
        allowNull: false
    }
}

const opcoes = {
    freezeTable : true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtulizacao',
    version: 'versao'
}

module.exports = instancia.define('fornecedor', colunas, opcoes)