const { Router } = require("express");

const loginRouter = Router();

loginRouter.get("/google", (req, res) => res.send(req.user));

module.exports = { loginRouter };
