const axios = require('axios');
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

  module.exports = {testFunction}