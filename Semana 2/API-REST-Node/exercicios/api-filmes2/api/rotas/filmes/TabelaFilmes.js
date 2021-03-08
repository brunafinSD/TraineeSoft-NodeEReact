const Modelo = require('./ModeloTabelaFilmes');

module.exports = {
    listar(){
        return Modelo.findAll();
    }
}