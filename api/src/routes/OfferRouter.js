const { Router } = require('express');
const {testFunction,getOffer,createOffer,deleteOffer} = require('../Controllers/OfferControl');

const OfferControl = Router();

// CommentRouter.get('/',testFunction);
OfferControl.get('/',getOffer);
OfferControl.post('/create',createOffer);
OfferControl.post('/create',deleteOffer);

module.exports = OfferControl;