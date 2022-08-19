const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CategoryRouter = require('./RouteCategory.js');
const RouteArticle = require('./RouteArticle.js');
const RouteComment = require('./RouteComment.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/category', CategoryRouter);
router.use('/article',RouteArticle);
router.use('/comment',RouteComment);

module.exports = router;
