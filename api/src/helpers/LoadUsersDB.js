const { bcrypt } = require("../Controllers/auxUserLogin/bcrypt");
const { User } = require('../db');
const axios = require('axios')
const { createUser } = require('../db')

const {
   DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
} = process.env;

const URL_POST_CREATE_USERS = process.env.NODE_ENV === "production" ?
   "https://api-ecom-07.herokuapp.com" + "/user/create" : "http://localhost:3001/user/create"

const usersToCreate = [
   {
      "name": "alejandro",
      "lastName": "silva",
      "address": "calle falsa 123",
      "mail": "alejoyodax@gmail.com",
      "userName": "alejoyodax",
      "password": "12345678",
      "userType": "1"
   },
   {
      "name": "cosme",
      "lastName": "fulanito",
      "address": "calle falsa 123",
      "mail": "fulanito99@gmail.com",
      "userName": "cosmelanito",
      "password": "12345678",
      "userType": "1"
   },
   {
      "name": "Admin",
      "lastName": "Admin",
      "address": "Calle 44F 38-27",
      "mail": "admin@gmail.com",
      "userName": "admin",
      "password": "admin",
      "userType": "3"
   }
]

async function createDefaulUsers() {
   const usersFound = await User.findAll()
   if (usersFound.length > 0) {
      console.log("Usuarios creados previamente")
      return
   }

   usersToCreate.forEach(async user => {
      user.password = bcrypt(user.password);
      await User.create(user)
         .then(e => console.log("Usuario", user.userName, "agregado"))
         .catch(e => console.log("Rating ya agregado"))
   })
}

module.exports = createDefaulUsers 