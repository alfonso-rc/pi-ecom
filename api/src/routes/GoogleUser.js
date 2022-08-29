const router = require("express").Router();
const { Session } = require("../db.js");


router.get("/del/googleUser", async (req, res) => {
    try {
        await Session.destroy({
            truncate: true
        });
        res.json({ message: "Elemento eliminado"});
    } catch (err) {
        res.json({ error: "No se eliminó"});
    }
});

router.get("/google/User", async (req, res) => {
    try {
        let response = await Session.findAll();
        res.json(response[0].user);
    } catch (error) {
        res.json({ error: "No hay usuario de google" });
    }
    
});

module.exports = router;
