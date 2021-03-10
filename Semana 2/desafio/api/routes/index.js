const bodyParser = require("body-parser");
const categorias = require('./categoriasRoute')
const produtos = require('./produtosRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(categorias)
    app.use(produtos)
}