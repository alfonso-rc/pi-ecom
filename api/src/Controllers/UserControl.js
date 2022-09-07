const { User, Subscribers, Article } = require("../db.js");
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

// Function que verifica si el id artículo es favorito del id usuario
const askFavorite = async (req, res, next) => {
   const { idUser, idArticle } = req.body
   console.log(req.body)

   try {
      // Preguntar si existe el usuario
      const userFound = await User.findByPk(idUser)
      if (!userFound) {
         res.status(404).send("El usuario no existe")
         return
      }

      // Preguntar si existe el artículo
      const articleFound = await Article.findByPk(idArticle)
      if (!articleFound) {
         res.status(404).send("El artículo no existe")
         return
      }

      // Preguntamos si el usuario tiene ese artículo en favoritos
      const isFavorite = await userFound.hasArticle(idArticle)
      isFavorite ?
         res.status(200).json({ isFavorite }) :
         res.status(400).send({ isFavorite: false })
   } catch (error) {
      next(error)
   }
}


// Function que trae todos los favoritos del usuario
const getAllUserFavorites = async (req, res, next) => {
   const { id } = req.params
   console.log("PARAMS", req.params)

   try {
      // Preguntar si existe el usuario
      const userFound = await User.findByPk(id)
      if (!userFound) {
         res.status(404).send("El usuario no existe")
         return
      }


      const favoritesFound = await User.findOne({
         where: { id: id },
         include: {
            model: Article
         }
      })


      res.status(200).json(favoritesFound)
   } catch (error) {
      console.log(error)
      next(error)
   }
}


// Añade un artículo favorito al usuario, si ya lo tiene, lo elimina de favoritos
// es como un switch
const addFavoriteToUser = async (req, res, next) => {
   const { idUser, idArticle } = req.body

   try {
      // Preguntar si existe el usuario
      const userFound = await User.findByPk(idUser)
      if (!userFound) {
         res.status(404).send("El usuario no existe")
         return
      }

      // Preguntar si existe el artículo
      const articleFound = await Article.findByPk(idArticle)
      if (!articleFound) {
         res.status(404).send("El artículo no existe")
         return
      }

      // Traemos todos los favoritos del usuario
      const favoritesFound = await userFound.getArticles()
      const listIdFavorites = favoritesFound.map(art => art.dataValues.id)
      // console.log(listIdFavorites)

      // Si el usuario ya tiene ese favorito, lo eliminamos
      if (listIdFavorites.includes(idArticle)) {
         const articleRemoved = await userFound.removeArticle(idArticle)
         // console.log(articleRemoved)
         res.status(200).json({ isFavoriteNow: false, articleRemoved })
      } else { // de lo contrario lo agregamos como su favorito
         await userFound.addArticle(idArticle)
         res.status(201).json({ isFavoriteNow: true, idArticle })
      }

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

//Borrado Fisico
async function deleteUsers(req, res, next) {
   try {
      const { id } = req.params;
      let destro = await User.destroy(
         { where: { id: id } })
      destro === 1
         ? res.status(200).send("Eliminado con exito")
         : res.status(404).send("No existe")
   } catch (error) {
      next(error);
   }
};

//Borrado logico
const putDeleteUser = async (req, res, next) => {
   try {
      const { id } = req.params;
      let response = await User.findByPk(id);
      if (!response.ban) {
         await User.update(
            { ban: true }, { where: { id } })
      } else {
         await User.update(
            { ban: false }, { where: { id } })
      }
      res.json(response);
   } catch (error) {
      next(error)
   }
};

//Cambio Type de User: De admin a Ordinario o al reves
const putTypeUser = async (req, res, next) => {
   try {
      const { id } = req.params;
      let response = await User.findByPk(id);
      if (response.userType == 1) {
         await User.update(
            { userType : 2 }, { where: { id } })
      } else {
         await User.update(
            { userType : 1 }, { where: { id } })
      }
      res.json(response);
   } catch (error) {
      next(error)
   }
};

// Función que suscribe un usuario al newsletter de ofertas NO TOCAR SIN AVISAR A ALEJO
const subscribeUserToNewsLetter = async (req, res, next) => {
   try {
      const { name, email } = req.body;
      console.log("Usuario a suscribir", req.body);

      // Verificamos si el email ya está registrado como usuario
      const userFound = await User.findOne({ where: { mail: email } });
      if (userFound) { res.status(400).json({ isUserAlreadyRegistered: true }); return };

      // Verificarmos si el email ya está suscrito al newsletter
      const subcriberFound = await Subscribers.findByPk(email)
      if (subcriberFound) { res.status(400).json({ isUserAlreadySubscribed: true }); return };

      // De lo contrario creamos el recurso en la tabla Subscribers
      const newSubscriber = await Subscribers.create(req.body);
      res.status(201).json({ isUserAlreadyRegistered: false, userCreated: newSubscriber });

   } catch (error) {
      next(error)
   }
};

module.exports = { getAllUserFavorites, createUser, addFavoriteToUser, loginUser, infoUser, getUsers, updateUser, subscribeUserToNewsLetter, deleteUsers, putDeleteUser, askFavorite, putTypeUser };
