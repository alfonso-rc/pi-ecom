const { Router } = require('express');
const {testFunction,getCategories,filterByCategory} = require('../Controllers/CategoryControl.js');

const CategoryRouter = Router();

CategoryRouter.get('/',filterByCategory);

module.exports = CategoryRouter;