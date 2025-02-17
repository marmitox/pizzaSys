'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        productName: 'Portuguesa',
        description: null,
        type: 'savory',
        code: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Frango com Catupiry',
        description: null,
        type: 'savory',
        code: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Brigadeiro',
        description: null,
        type: 'sweet',
        code: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Coca Cola 2L',
        description: null,
        type: 'drink',
        code: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Borda Catupiru',
        description: null,
        type: 'extra',
        code: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});

  }
};
