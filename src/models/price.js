'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Price.belongsTo(models.Product, {
        foreignKey: 'product_id'
      })
    }
  }
  Price.init({
    product_id: DataTypes.INTEGER,
    type_price: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    weekday: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Price',
    tableName: 'prices'
  });
  return Price;
};