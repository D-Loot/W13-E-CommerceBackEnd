const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// -- * `ProductTag`
// --   * `id`
// --     * Integer.
// --     * Doesn't allow null values.
// --     * Set as primary key.
// --     * Uses auto increment.
// --   * `product_id`
// --     * Integer.
// --     * References the `Product` model's `id`.
// --   * `tag_id`
// --     * Integer.
// --     * References the `Tag` model's `id`.

// CREATE TABLE ProductTag (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//    INT NOT NULL,
//    INT NOT NULL,

// -- REF: https://www.cockroachlabs.com/docs/stable/foreign-key.html
//   product_id INT NOT NULL,
//   INDEX role_index (role_id),
//   CONSTRAINT fk_role_id FOREIGN KEY (role_id)
//   REFERENCES roles(id),

//   tag_id INT,
//   INDEX manager_index (manager_id),
//   CONSTRAINT fk_manager_id FOREIGN KEY (manager_id)
//   REFERENCES employee(id)
// );


ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true,
    },
    product_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
