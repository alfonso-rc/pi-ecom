const { Router } = require('express');
const {testFunction} = require('../Controllers/CategoryControl.js');

const articleRouter = Router();

articleRouter.get('/',testFunction);

module.exports = articleRouter;