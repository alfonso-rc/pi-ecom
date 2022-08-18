const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CategoryRouter = require('./RouteCategory.js');
const RouteArticle = require('./RouteArticle.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/category', CategoryRouter);
router.use('/article',RouteArticle);

module.exports = router;
