const { Router } = require('express');
const {testFunction,getOffers, createOffers,deleteOffer,editOffer,validityOffer} = require('../Controllers/OfferControl');

const OfferRouter = Router();

// CommentRouter.get('/',testFunction);
OfferRouter.get('/',getOffers);
OfferRouter.post('/create',createOffers);
OfferRouter.post('/edit/:id',editOffer);
OfferRouter.put('/validate/:id',validityOffer);
OfferRouter.delete('/delete/:id', deleteOffer);

module.exports = OfferRouter;