const router = require("express").Router();
const { Session } = require("../db.js");

router.get("/google/User", async (req, res) => {
    try {
        let response = await Session.findAll();
        await Session.destroy({ truncate: true });
        res.json(response[0].user);
    } catch (error) {
        res.json({ error: "No hay usuario de google" });
    }    
});

module.exports = router;
