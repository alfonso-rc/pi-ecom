const { Shopping } = require("../db.js");

const getAllShopping = async (req, res, next) => {
    try {
        const { id } = req.query
        let myShoppings = await Shopping.findAll({
            where: {
                idUser: id
            }
        });
        // console.log('mu shop');
        // console.log(myShoppings);
        myShoppings = myShoppings.map((shop) => {
            return {
                id: shop.infoArticle.id,
                title: shop.infoArticle.title,
                image: shop.infoArticle.image
            };
        });
        return res.json(myShoppings)
    } catch (err) {
        return res.status(404).json({ error: "No hay compras" });
    }
};

const addShoping = async (req, res, next) => {
    try {
        await Shopping.create(req.body); // que recibe por body? solo dios sabra XD
        return res.json({ message: "Tu compra ha sido guardada" })
    } catch (err) {
        return res.json({ error: err })
    }

};

module.exports = {
    getAllShopping,
    addShoping
};
