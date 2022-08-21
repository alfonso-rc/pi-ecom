const { User } = require("../db.js")
const validateUser = require("./auxUserLogin/getUser.js");

const createUser = async (req, res, next) => {
   const userToCreate = req.body
   console.log(userToCreate)
   try {
      // Verificar si el mail ya está registrado
      const userFound1 = await User.findOne({
         where: { mail: userToCreate.mail }
      })
      // Verificar si el userName ya está registrado
      const userFound2 = await User.findOne({
         where: { userName: userToCreate.userName }
      })

      if (userFound1) {
         res.status(400).send("El mail de usuario ya está registrado")
         return
      }
      if (userFound2) {
         res.status(400).send("El userName de usuario ya está registrado")
         return
      }

      const userCreated = await User.create(userToCreate)
      // console.log(userCreated.dataValues)
      const response = await validateUser(userCreated.dataValues.mail, userCreated.dataValues.password);
      res.status(200).json(response);

      //res.status(200).send(userCreated.dataValues)
   } catch (error) {
      next(error)
   }
}

const addFavoriteToUser = async (req, res, next) => {
   const { idUser, idArticle } = req.body

   try {
      // Preguntar si existe el usuario
      const userFound = await User.findByPk(idUser)
      if (!userFound) {
         res.status(404).send("El usuario no existe")
         return
      }

      await userFound.addArticle(idArticle)
      res.status(200).send('Favorito añadido')
   } catch (error) {
      next(error)
   }
}

const loginUser = async (req, res, next) => {
   const { mail, password } = req.body
   try {
      const response = await validateUser(mail, password);
      res.json(response);
   } catch (error) {
      next(error);
   }
};


const infoUser = (req, res, next) => {
   res.send('DATOS ENTREGADOS CORRECTAMENTE');
};



module.exports = { createUser, addFavoriteToUser, loginUser, infoUser };
