const { User } = require("../db.js");
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

const getUsers = async(req,res,next)=>{
   try {
      const allUser = await User.findAll();
      res.status(200).send(allUser);
   } catch (error) {
      next(error);
   }

}

const updateUser = async (req, res, next) => {
   try {
      await User.update(req.body,{
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



module.exports = { createUser, addFavoriteToUser, loginUser, infoUser,getUsers, updateUser };
