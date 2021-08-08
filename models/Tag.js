const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

// -- * `Tag`
// --   * `id`
// --     * Integer.
// --     * Doesn't allow null values.
// --     * Set as primary key.
// --     * Uses auto increment.
// --   * `tag_name`
// --     * String.

// CREATE TABLE Tag (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   tag_name VARCHAR(30)
// );

Tag.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name:{
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
