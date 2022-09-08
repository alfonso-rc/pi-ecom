const { Router } = require("express");
const createGoogleUser = require("../Controllers/auxUserLogin/createGoogleUser.js");

const loginRouter = Router();

const URL_TO_REDIRECT = process.env.NODE_ENV === "production" ?
    "https://client-ecom-07-henry.netlify.app/home" : "http://localhost:3000/home"

// loginRouter.get("/google/callback", (req, res) => res.send(req.user));

loginRouter.get("/google/callback", async (req, res) => {

    await createGoogleUser(req.user._json);

    res.redirect(URL_TO_REDIRECT);
});

module.exports = { loginRouter };
