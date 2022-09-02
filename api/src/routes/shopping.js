const { Router } = require('express');
const verification = require('../Controllers/auxUserLogin/validateToken.js');
const { getAllShopping, addShoping } = require("../Controllers/controlShopping.js");
const userRouter = Router();

userRouter.get("/get", getAllShopping);
userRouter.post("/add", addShoping);

module.exports = userRouter;
