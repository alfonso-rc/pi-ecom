const { Router } = require('express');
const {testFunction,createArticle,getArticle,detailArticle} = require('../Controllers/ArticleControl.js');

const RouteArticle = Router();

RouteArticle.get('/',getArticle);
RouteArticle.post('/',createArticle);
RouteArticle.get('/:id',detailArticle);

module.exports = RouteArticle;