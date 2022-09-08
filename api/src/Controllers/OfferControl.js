const axios = require("axios");
const { Op } = require("sequelize");
const { Offer, Article } = require("../db");
const { API_URL, API_URL_ID, API_URL_NAME, API_URL_TIPO, IMG_DEFAULT } =
  process.env;

//TEST DE FUNCIONAMIENTO
const testFunction = (req, res, next) => {
  try {
    return res.send("Ecom Offer funcionando!");
  } catch (error) {
    next(error);
  }
};

//GET ALL Offer
const getOffers = async (req, res, next) => {
  try {
    let getAllOffers = await Offer.findAll({
      include: {
        model: Article,
        attributes: ["title","price","stock","detail","image"],
        through: { attributes: [] },
      },
    });
    let response = []
    for (const offer of getAllOffers) {
        let n = offer.articles.length;
      
        for (let i = 0; i < n; i++) {
            let artic = {
                id: offer.id,
                validity: offer.validity,
                title: offer.articles[i].title,
                price: offer.articles[i].price,
                porcent: offer.porcent,
                stock: offer.articles[i].stock,
                expiration: offer.expiration,
            }
            response.push(artic)
        }
    }
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

//POST  OFFERS
const createOffers = async (req, res, next) => {
  try {
    const { porcent, validity, expiration, articleId } = req.body;
    const newOffer = await Offer.create({ porcent, validity, expiration });

    const articleAll = await Article.findAll({
      where: {
        id: articleId
      }
    });
    newOffer.addArticle(articleAll);
    res.status(200).send(newOffer);
  } catch (error) {
    next(error);
  };
};

//DELETE Offer
const deleteOffer = async (req, res, next) => {
  try {
    const {id} = req.params;
    let destro = await Offer.destroy(
      {where:{id:id}})
      destro===1
      ?res.status(200).send("Oferta eliminada con exito")
      :res.status(404).send("No existe")
  } catch (error) {
    next(error);
  }
};

//Edit Offer
const editOffer = async (req, res, next) => {
  try {
    await Article.update(req.body, {
      where: {
        id: req.body.id
      }
    });
    let response = await Article.findByPk(req.body.id);
    res.json(response);
  } catch (error) {
    console.log(error);
  };
};

//Borrado logico
const validityOffer = async (req, res, next) => {
	try {
		const {id} = req.params;
		let response = await Offer.findByPk(id);
		if (!response.validity) {
			await Offer.update({validity: true}, {where: {id}});
		} else {
			await Offer.update({validity: false}, {where: {id}});
		}
		res.json(response);
	} catch (error) {
		next(error);
	}
};

module.exports = { testFunction, getOffers, createOffers, deleteOffer,editOffer, validityOffer }
