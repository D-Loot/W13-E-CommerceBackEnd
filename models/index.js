// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// -- * `Product`
// --   * `category_id`
// --     * Integer.
// --     * References the `Category` model's `id`.

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});


// Categories have many Products

// ----------------------------------------------------
// 13 - 23/24 one to many
// ----------------------------------------------------

Category.hasMany(Product, {
  foreignKey: 'category_id',
});



// Products belongToMany Tags (through ProductTag)

// ----------------------------------------------------
// 13 - 28 - mini project
// ----------------------------------------------------
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: ProductTag
});


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
