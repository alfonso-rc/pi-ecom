const { Router } = require('express');
const verification = require('../Controllers/auxUserLogin/validateToken.js');
const { askFavorite, createUser, addFavoriteToUser, loginUser, infoUser, getUsers, updateUser, subscribeUserToNewsLetter, deleteUsers, putDeleteUser } = require("../Controllers/UserControl.js")
const userRouter = Router();

// CREAR USUARIO
userRouter.post('/create', createUser);
userRouter.post('/ask_favorite', askFavorite);
userRouter.post('/add_favorite', addFavoriteToUser);
userRouter.post('/subscribe', subscribeUserToNewsLetter);
userRouter.post('/login', loginUser);
userRouter.get('/info', verification, infoUser);
userRouter.get('/', getUsers);
userRouter.get('/all', getUsers);
userRouter.post('/update', updateUser);
userRouter.delete('/delete/:id', deleteUsers);
userRouter.put('/ban/:id', putDeleteUser);
module.exports = userRouter;