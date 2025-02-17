'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('prices', [
      {
        product_id: 1,
        type_price: 'default',
        price: 44.00,
        start_date: null,
        end_date: null,
        weekday: null,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 1,
        type_price: 'sales monday to thursday',
        price: 38.00,
        start_date: '2025-02-09',
        end_date: '2025-03-09',
        weekday: '1,2,3,4',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 2,
        type_price: 'default',
        price: 50.00,
        start_date: null,
        end_date: null,
        weekday: null,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 2,
        type_price: 'sales monday to thursday',
        price: 44.00,
        start_date: '2025-02-09',
        end_date: '2025-03-09',
        weekday: '1,2,3,4',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 3,
        type_price: 'default',
        price: 30.00,
        start_date: null,
        end_date: null,
        weekday: null,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 4,
        type_price: 'default',
        price: 10.00,
        start_date: null,
        end_date: null,
        weekday: null,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 5,
        type_price: 'default',
        price: 10.00,
        start_date: null,
        end_date: null,
        weekday: null,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('prices', null, {});
  }
};
