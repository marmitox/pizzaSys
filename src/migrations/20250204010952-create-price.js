'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      type_price: {
        type: Sequelize.STRING,
        allowNull:false
      },
      price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull:false
      },
      start_date: {
        type: Sequelize.DATEONLY
      },
      end_date: {
        type: Sequelize.DATEONLY
      },
      weekday: {
        type: Sequelize.STRING,
        allowNull:true
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('prices');
  }
};