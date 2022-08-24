const axios = require('axios');
const {Category, Article} = require('../db');
const { Op } = require("sequelize");
const {
    API_URL,API_URL_ID,API_URL_NAME,API_URL_TIPO,IMG_DEFAULT
  } = process.env;
  const {
    createArticle,
   
    detailArticle,
    getAticleByName, 
   
    getArticle
    } = require('./ArticleControl.js');
  //TEST DE FUNCIONAMIENTO
const testFunction = (req,res,next)=>{
    try {
      return res.send('Ecom Category funcionando!');
    } catch (error) {
        next(error);
    };
  };

  //GETCATEGORIES
const getCategories = async(req,res,next)=>{
  try {
    let getAllCategories = await Category.findAll({
      attributes:["id","name"]
    });
    res.status(200).send(getAllCategories);
  } catch (error) {
      next(error);
  };
}

const getArticleByCategory = async (req, res, next) => {
  let {category}= req.params;
  console.log(category);
  try {
    let allArticle= await getArticle();
    const articleCategory = await Article.findAll({
      include:{
        where: {name: category},
        model: Category, 
        attribute: ["name"]
      } 
    });
    res.status(200).send(articleCategory)
  } catch (error) {
    next(error);
  }
};

  module.exports = {testFunction,getCategories,getArticleByCategory}