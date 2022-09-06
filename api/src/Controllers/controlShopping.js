const { Shopping } = require("../db.js");

// Si recibe solo el id (usuario) retorna todas sus compras
// Si recibe el id (usuario) y el idArticle retorna un booleano que nos dice si ese usuario compró ese artículo
const getAllShopping = async (req, res, next) => {
    try {
        const { idUser, idArticle } = req.query
        console.log(req.query)
        // Buscamos todas las compras de ese usuario
        let myShoppings = await Shopping.findAll({
            where: {
                idUser: idUser
            }
        });

        myShoppings = myShoppings.map((shop) => {
            return {
                id: shop.infoArticle.id,
                title: shop.infoArticle.title,
                image: shop.infoArticle.image,
                price: shop.infoArticle.price,
                date: shop.createdAt
            };
        });

        // Si solo llega el id de usuario retornamos todas sus compras
        if (idUser && !idArticle) return res.json(myShoppings)

        // Si llegan ambos parámetros buscamos si el usuario ya compró ese artículo
        if (idUser && idArticle) {
            for (let index = 0; index < myShoppings.length; index++) {
                const article = myShoppings[index];
                if (article.id === idArticle) return res.status(200).json({ isBougth: true })
            }
            return res.status(404).json({ isBougth: false });
        }


    } catch (err) {
        next(err)
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


// Debo decir algo, y es que los quiero a todos. A todos chicos, un abrazo 🖤 son unos tesos!