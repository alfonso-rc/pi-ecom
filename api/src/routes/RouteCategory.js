const { Router } = require('express');
const {testFunction,getCategories} = require('../Controllers/CategoryControl.js');

const CategoryRouter = Router();

CategoryRouter.get('/',getCategories);

module.exports = CategoryRouter;