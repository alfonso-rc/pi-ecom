const { Router } = require('express');
const {testFunction,createArticle} = require('../Controllers/ArticleControl.js');

const RouteArticle = Router();

RouteArticle.get('/',testFunction);
RouteArticle.post('/',createArticle);

module.exports = RouteArticle;