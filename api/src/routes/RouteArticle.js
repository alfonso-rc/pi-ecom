const { Router } = require('express');
const {testFunction,createArticle,getArticle} = require('../Controllers/ArticleControl.js');

const RouteArticle = Router();

RouteArticle.get('/',getArticle);
RouteArticle.post('/',createArticle);

module.exports = RouteArticle;