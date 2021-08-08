// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}


// -- * `Product`
// --   * `id`
// --     * Integer.
// --     * Doesn't allow null values.
// --     * Set as primary key.
// --     * Uses auto increment.
// --   * `product_name`
// --     * String.
// --     * Doesn't allow null values.
// --   * `price`
// --     * Decimal.
// --     * Doesn't allow null values.
// --     * Validates that the value is a decimal.
// --   * `stock`
// --     * Integer.
// --     * Doesn't allow null values.
// --     * Set a default value of `10`.
// --     * Validates that the value is numeric.
// --   * `category_id`
// --     * Integer.
// --     * References the `Category` model's `id`.
// CREATE TABLE Product (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   product_name VARCHAR(50) NOT NULL,
//   price DECIMAL(10,2) NOT NULL,
//   stock INT NOT NULL DEFAULT 10,

//   category_id INT NOT NULL,
//   INDEX category_index (category_id),
//   CONSTRAINT fk_category_id FOREIGN KEY (category_id)
//   REFERENCES category(id)
// );

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate:{
        isDecimal:true,
      },
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate:{
        isNumeric:true,
      },
    },
    category_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
