//esse arquivo cria uma instancia de sequelize com os dados do nosso banco

const Sequelize = require("sequelize"); //chama sequelize
const config = require("config");

//cria uma "variavel que vai usar o sequelize (instancia)"
const instancia = new Sequelize(
  config.get("mysql.banco-de-dados"),
  config.get("mysql.usuario"),
  config.get("mysql.senha"),

  {
    host: config.get("mysql.host"),
    dialect: "mysql",
  }
);

module.exports = instancia;
