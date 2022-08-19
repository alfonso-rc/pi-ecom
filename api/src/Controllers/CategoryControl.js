const axios = require('axios');
const {Category} = require('../db');
const { Op } = require("sequelize");
const {
    API_URL,API_URL_ID,API_URL_NAME,API_URL_TIPO,IMG_DEFAULT
  } = process.env;

  //TEST DE FUNCIONAMIENTO
const testFunction = (req,res,next)=>{
    try {
      return res.send('Ecom Category funcionando!');
    } catch (error) {
        next(error);
    };
  };

  //GETCATEGORIES
const getCategories = async()=>{
  try {
    let getAllCategories = await Category.findAll({
      attributes:["id","name"],
      through:{attributes:[]}
    });
    return(getAllCategories);
  } catch (error) {
      console.log(error);
  };
};

//GET-FOR-CATEGORY
const filterByCategory = async(req,res,next)=>{
  const { name } = req.query;
  try {
    let getNameTotal = await getCategories();
    if (name) {
      let categoryName = await getNameTotal.filter(n => n.name.toLowerCase().includes(name.toLowerCase()));
      categoryName.length
        ? res.status(200).send(categoryName) :
        res.status(400).send('No Existe la categoria');
    }
    else {
      res.status(200).send(getNameTotal);
    }
  } catch (error) {
    next(error);
  };
};

  module.exports = {testFunction,getCategories,filterByCategory}