const { Router } = require('express');
const verification = require('../Controllers/auxUserLogin/validateToken.js');
const { createUser, addFavoriteToUser, loginUser, infoUser } = require("../Controllers/UserControl.js")
const userRouter = Router();

// CREAR USUARIO
userRouter.post('/', createUser);
userRouter.post('/add_favorite', addFavoriteToUser);
userRouter.post('/login', loginUser);
userRouter.get('/info', verification, infoUser);

module.exports = userRouter;