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
      attributes: ["id", "porcent", "validity","articleId"],
      through: { attributes: [] }
    });
    res.status(200).send(getAllComment);
  } catch (error) {
    next(error);
  };
};


// CREATE ARTICLE USER RATING
const createComment = async (req, res, next) => {
  const { idUser, articleId, texto } = req.body;
  console.log(req.body)
  try {
    // Verificar si el idUser existe
    const userComment = await User.findByPk(idUser)
    if (!userComment) {
      console.log("El usuario no existe en la base de datos")
      res.status(404).send("El usuario no existe en la base de datos"); return
    }

    // Verificar si el artículo existe
    const articleFound = await Article.findByPk(articleId)
    if (!articleFound) {
      console.log("El artículo no existe en la base de datos")
      res.status(404).send("El artículo no existe en la base de datos"); return
    }

    // Verificar que el usuario no haya hecho ya un comentario a ese producto
    const commentFound = await Comment.findOne({
      where: {
        userId: idUser,
        articleId: articleId,
      }
    })
    if (commentFound) {
      console.log("El usuario ya ha hecho un comentario a este artículo")
      res.status(400).send("El usuario ya ha hecho un comentario a este artículo"); return
    }

    // Verificar que el score se encuentre en el rango 1-5 y creamos el rating
    if (texto) {
      // Creamos el rating
      const createdComment = await Comment.create({
        texto: texto,
        userId: idUser,
        articleId: articleId
      })

      { res.status(200).send(createdComment.dataValues); return }
    } else {
      console.log("No hay texto para comentar")
      res.status(400).send("No hay texto para comentar")
    }

  } catch (error) {
    next(error);
  };
};

module.exports = { testFunction, getAllOffers, createComment }