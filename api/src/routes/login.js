const { Router } = require("express");
const { Session } = require("../db.js");

const loginRouter = Router();


// loginRouter.get("/google/callback", (req, res) => res.send(req.user));

loginRouter.get("/google/callback", async (req, res) => {
    await Session.create({ user: req.user._json});
    res.redirect("http://localhost:3000/home");
});

module.exports = { loginRouter };
