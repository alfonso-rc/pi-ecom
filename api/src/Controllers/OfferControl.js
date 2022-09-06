const axios = require('axios');
const { Op } = require("sequelize");
const { Offer } = require('../db');
const { Category, User, Article } = require('../db');
const {
  API_URL, API_URL_ID, API_URL_NAME, API_URL_TIPO, IMG_DEFAULT
} = process.env;

//TEST DE FUNCIONAMIENTO
const testFunction = (req, res, next) => {
  try {
    return res.send('Ecom Offer funcionando!');
  } catch (error) {
    next(error);
  };
};

//GET ALL Offer
const getAllOffers = async (req, res, next) => {
  try {
    let getAllOffers = await Offer.findAll({
      include: {
        model: Article,
        attributes: ["title"],
        through: { attributes: [] }
      }
    });
    res.status(200).send(getAllComment);
  } catch (error) {
    next(error);
  };
};


// CREATE ARTICLE USER RATING
const createOffer = async (req, res, next) => {
  const { idUser, articleId, texto } = req.body;
  console.log(req.body)
  try {


  } catch (error) {
    next(error);
  };
};

module.exports = { testFunction, getAllOffers, createComment }