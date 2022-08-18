const axios = require('axios');
const { Op } = require("sequelize");
const {Article}= require ('../db');
const {
    API_URL,API_URL_ID,API_URL_NAME,API_URL_TIPO,IMG_DEFAULT
  } = process.env;

  //TEST DE FUNCIONAMIENTO
const testFunction = (req,res,next)=>{
    try {
      return res.send('Ecom Article funcionando!');
    } catch (error) {
        next(error);
    };
  };

//GET
const getArticle = async(req,res,next)=>{
    try {
      const apiDato = await axios.get('http://localhost:3002/article');
      return res.send(apiDato.data);
    } catch (error) {
        next(error);
    };
  };

  //GETDETAIL
  const detailArticle = async(req,res,next)=>{
    const {id}=req.params;
    try {
      const articleFound = await Article.findByPk(id);
      articleFound ? 
        res.status(200).send(articleFound.dataValues):
        res.status(400).send('No existe Articulo con ese Id!');
    } catch (error) {
        next(error);
    };
  };

//POST  
const createArticle = async(req,res,next)=>{
    try {
      const artcleToCreate = req.body;
      const newArticle = await Article.create(artcleToCreate);
      res.send(newArticle);
    } catch (error) {
        next(error);
    };
  };

  module.exports = {testFunction,createArticle,getArticle,detailArticle};