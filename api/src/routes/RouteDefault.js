const { Router } = require('express');

defaultRouter = Router()

defaultRouter.get("/", async (req, res, next) => {
   const body = {
      "message": "bienvenido a la api del grup 07 del PF de HENRY"
   }
   try {

      res.status(200).send(body);
   } catch (error) {
      next(error);
   };
})

module.exports = defaultRouter