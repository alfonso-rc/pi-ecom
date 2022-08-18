const { Router } = require('express');
const {testFunction,createArticle,getArticle,detailArticle,getAticleByName} = require('../Controllers/ArticleControl.js');

const RouteArticle = Router();

// RouteArticle.get('/',getArticle);
RouteArticle.get('/',getAticleByName);
RouteArticle.post('/',createArticle);
RouteArticle.get('/:id',detailArticle);

module.exports = RouteArticle;