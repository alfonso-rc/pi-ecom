const axios = require('axios');
const { Op } = require("sequelize");
const { Comment } = require('../db');
const { Category } = require('../db');
const {
  API_URL, API_URL_ID, API_URL_NAME, API_URL_TIPO, IMG_DEFAULT
} = process.env;

//TEST DE FUNCIONAMIENTO
const testFunction = (req, res, next) => {
    try {
      return res.send('Ecom Comment funcionando!');
    } catch (error) {
      next(error);
    };
  };

//GETCOMMENT
const getAllComments = async(req,res,next)=>{
    try {
      let getAllComment = await Comment.findAll({
        attributes:["id","texto","userId"],
        through:{attributes:[]}
      });
      res.status(200).send(getAllComment);
    } catch (error) {
        next(error);
    };
  };

//POSTCOMMENT
  const createComment = async (req, res, next) => {
    const {userId,texto,articleId} = req.body;
    try {
      const userComment = await Comment.findAll({
        where: {userId:userId}
      });
      if(userComment.length>0){
        res.status(404).send('Ya comentaste este articulo!')
      }else{
        const newComment = await Comment.create({userId,texto,articleId});
        res.status(200).send(newComment);        
      }
    } catch (error) {
      next(error);
    };
  };

  module.exports = {testFunction,getAllComments,createComment}