const { Router } = require('express');
const {testFunction,getCategories, getArticleByCategory} = require('../Controllers/CategoryControl.js');

const CategoryRouter = Router();

CategoryRouter.get('/',getCategories);
CategoryRouter.get('/:category', getArticleByCategory);
module.exports = CategoryRouter;