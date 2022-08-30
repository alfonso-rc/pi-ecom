const { Router } = require("express");
const createGoogleUser = require("../Controllers/auxUserLogin/createGoogleUser.js");

const loginRouter = Router();


// loginRouter.get("/google/callback", (req, res) => res.send(req.user));

loginRouter.get("/google/callback", async (req, res) => {

    await createGoogleUser(req.user._json);

    res.redirect("http://localhost:3000/home");
});

module.exports = { loginRouter };
