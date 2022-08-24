const { Router } = require('express');
const {  detailArticle,
         getAticleByName, 
         putDeleteArticle,
         deleteArticle
} = require('../Controllers/DeleteArticle.js');



const DeleArticle = Router();


DeleArticle.get('/', getAticleByName);
DeleArticle.put('/:id', putDeleteArticle);
DeleArticle.delete('/:id', deleteArticle);
DeleArticle.get('/:id', detailArticle);




module.exports = DeleArticle;