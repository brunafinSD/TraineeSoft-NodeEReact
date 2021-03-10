"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Produtos",
      [
        {
          nome: "Balde",
          preco: 5.99,
          categoria_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Post-it",
          preco: 7.99,
          categoria_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Tomate",
          preco: 3.99,
          categoria_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Mouse",
          preco: 19.90,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Quadro",
          preco: 12.90,
          categoria_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Detergente",
          preco: 2.99,
          categoria_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Barraca",
          preco: 149.90,
          categoria_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Lanterna",
          preco: 29.90,
          categoria_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Agenda",
          preco: 15.90,
          categoria_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Calculadora",
          preco: 24.90,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Produtos', null, {});
  },
};
