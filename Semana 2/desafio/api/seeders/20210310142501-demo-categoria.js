"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categorias",
      [
        {
          nome: "alimentos",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "eletronicos",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "decoracao",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categorias", null, {});
  },
};
