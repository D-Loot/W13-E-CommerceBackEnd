const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
//-----------------------------------------------
// 13 - 28 main/routes/api/locationRoutes.js
//-----------------------------------------------
// TODO:
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll(
    {
      include:[{model:Product}]
    });
    res.status(200).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // TODO:
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include:[{model: Product}]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No categories found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // TODO:
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
    // TODO:
  // update a category by its `id` value  (req.body.id)
// --------------------------------------------------------------------------
// 13 - 08 solved/routes/api/bookRoutes
// --------------------------------------------------------------------------
  try{
    const categoryData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
    // TODO:
  // delete a category by its `id` value

  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
