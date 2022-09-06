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
        attributes: ["title"],
        through: { attributes: [] },
      },
    });
    res.status(200).send(getAllOffers);
  } catch (error) {
    next(error);
  }
};

//POST  OFFERS
const createOffers = async (req, res, next) => {
  const { articleId, porcent, validity } = req.body;
  try {
    const articleOffer = await Offer.findAll({
      where: { articleId: articleId },
    });
    if (articleOffer.length > 0) {
      res.status(404).send("El articulo ya esta de oferta!");
    } else {
      const newOffer = await Offer.create({
        porcent: porcent,
        articleId: articleId,
        validity: validity,
      });
      res.status(200).send(newOffer);
    }
  } catch (error) {
    next(error);
  }
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

module.exports = { testFunction, getOffers, createOffers, deleteOffer };
