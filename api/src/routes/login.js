const { Router } = require("express");

const loginRouter = Router();


// loginRouter.get("/google/callback", (req, res) => res.send(req.user));

loginRouter.get("/google/callback", (req, res) => {
    console.log(req.user._json);
    //res.send(req.user);
    console.log("LLEGUE");
    res.redirect("http://localhost:3000/home");
});

module.exports = { loginRouter };
