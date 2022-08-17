const { Router } = require('express');
const {testFunction} = require('../Controllers/CategoryControl.js');

const CategoryRouter = Router();

CategoryRouter.get('/',testFunction);

module.exports = CategoryRouter;