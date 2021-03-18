//esse arquivo tem acesso ao conteúdo da tabela do arquivo modeloTabelaMarca
// e usa os métodos do sequelize
//findAll: encontrar Todos
//findOne: encontrar Um
//create: criar
//update: atualizar
//destroy: deletar

const Modelo = require("./modeloTabelaMarca");

module.exports = {
  listar() {
    return Modelo.findAll();
  },

  inserir(marca) {
    return Modelo.create(marca);
  },

  async buscarID(id) {
    const encontrado = await Modelo.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw new Error("Marca não encontrada");
    }
    return encontrado;
  },

  atualizar(id, dadosParaAtualizar) {
    return Modelo.update(dadosParaAtualizar, { where: { id: id } });
  },

  deletar(id) {
    return Modelo.destroy({ where: { id: id } });
  },
};
