const { Router } = require('express');
const {
   testFunction,
   createArticle,
   getAllArticle,
   detailArticle,
   getAticleByName,
   createArticleUserRating,
   editArticle,
   getAllCommentsByIdArticle

} = require('../Controllers/ArticleControl.js');

const RouteArticle = Router();

RouteArticle.get('/', getAticleByName);
RouteArticle.get('/all', getAllArticle); // Trae todos los artículos de la BD
RouteArticle.post('/create', createArticle);
RouteArticle.post('/edit', editArticle);
RouteArticle.get('/:id', detailArticle);
RouteArticle.post('/rating', createArticleUserRating);
RouteArticle.get('/ratings_article/:idArticle', getAllCommentsByIdArticle);




module.exports = RouteArticle;