
const { User } = require('../db');
const axios = require('axios')
const { createUser } = require('../db')

const {
   DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
} = process.env;

const BASE_URL = process.env.REACT_APP_API_URL;
const URL_POST_CREATE_USERS = process.env.NODE_ENV === "production" ?
   BASE_URL + "/user" : "http://localhost:3001/user"


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
      "userType": "2"
   }
]

async function createDefaulUsers() {
   const usersFound = await User.findAll()
   if (usersFound.length > 0) {
      console.log("Usuarios creados previamente")
      return
   }

   usersToCreate.forEach(async user => {
      await axios.post(URL_POST_CREATE_USERS, user)
         .then(e => console.log("Usuario", user.userName, "agregado"))
         .catch(e => console.log(e))
   })
}

module.exports = createDefaulUsers 