const { Router } = require('express');
const { createUser, addFavoriteToUser } = require("../Controllers/UserControl.js")
const userRouter = Router();

// CREAR USUARIO
userRouter.post('/', createUser);
userRouter.post('/add_favorite', addFavoriteToUser);


module.exports = userRouter;