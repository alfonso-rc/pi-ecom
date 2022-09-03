const { User, Subscribers } = require("../db.js");
const { bcrypt } = require("./auxUserLogin/bcrypt.js");
const validateUser = require("./auxUserLogin/getUser.js");
const generateToken = require("./auxUserLogin/generateToken.js");


const createUser = async (req, res, next) => {
   const userToCreate = req.body
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
         res.json({ error: "El mail de usuario ya está registrado" });
         return
      }
      if (userFound2) {
         res.json({ error: "El userName de usuario ya está registrado" });
         return
      }

      //contraseña inicial
      const passwordIn = userToCreate.password;
      //se encripta la contraseña del nuevo usuario
      userToCreate.password = bcrypt(userToCreate.password);

      const userCreated = await User.create(userToCreate)
      // console.log(userCreated.dataValues)
      const response = await validateUser(userCreated.dataValues.mail, passwordIn);
      res.status(200).json(response);

      // res.status(200).send(userCreated.dataValues)
   } catch (error) {
      next(error)
   }
}

// Añade un artículo favorito al usuario, 
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

const getUsers = async (req, res, next) => {
   try {
      const allUser = await User.findAll();
      res.status(200).send(allUser);
   } catch (error) {
      next(error);
   }

}

const updateUser = async (req, res, next) => {
   try {
      await User.update(req.body, {
         where: {
            id: req.body.id
         }
      });

      let response = await User.findByPk(req.body.id);

      const token = generateToken(req.body.id);

      response.dataValues.token = token;
      delete response.dataValues.password;

      res.json(response);
   } catch (err) {
      return res.json({ error: err });
   }
};

// Función que suscribe un usuario al newsletter de ofertas
const subscribeUserToNewsLetter = async (req, res, next) => {
   try {
      const { nombre, email } = req.body;
      console.log("Usuario a suscribir", req.body);

      // Verificamos si el email ya está registrado como usuario
      const userFound = await User.findOne({ where: { mail: email } });
      if (userFound) { res.status(400).send({ isUserAlreadyRegistered: true }); return };

      // Verificarmos si el email ya está suscrito al newsletter
      const subcriberFound = await Subscribers.findByPk(email)
      if (subcriberFound) { res.status(400).send({ isUserAlreadySubscribed: true }); return };

      // De lo contrario creamos el recurso en la tabla Subscribers
      const newSubscriber = await Subscribers.create({ nombre, email });
      res.status(201).send({ isUserAlreadyRegistered: false, userCreated: newSubscriber });

   } catch (error) {
      next(error)
   }
}


module.exports = { createUser, addFavoriteToUser, loginUser, infoUser, getUsers, updateUser, subscribeUserToNewsLetter };
