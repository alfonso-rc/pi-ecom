const { Router } = require('express');
const {  
    getAticleByName,
    loadArticle
} = require('../Controllers/BrandControl.js');

const BrandRouter = Router()

BrandRouter.get('/', getAticleByName);

module.exports = BrandRouter