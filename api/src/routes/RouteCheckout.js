const { Router } = require('express');
const {  
    testFunction,
    paymentCheck
} = require('../Controllers/CheckoutControl.js');

const PaymentRouter = Router();


PaymentRouter.get('/', testFunction);
PaymentRouter.post('/', paymentCheck);




module.exports = PaymentRouter;