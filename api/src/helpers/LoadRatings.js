const axios = require('axios')
const { Rating, User, Article } = require('../db')

const {
   DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
} = process.env;
const URL_POST_CREATE_RATINGS = process.env.NODE_ENV === "production" ?
   "https://api-ecom-07.herokuapp.com" + "/article/rating" : "http://localhost:3001/article/rating"

// Esta funcion me crea ratings aleatorios (1-5) de 3 artículos por parte de los 3 usuarios creados previamente
async function loadRatings() {
   function getRandomRating() {
      return Math.ceil(Math.random() * 5)
   }

   const userList = await User.findAll()  // Traemos los usuarios que son 3
   const { count, rows } = await Article.findAndCountAll({ limit: 3 }) // Traemos solo los 3 primeros 3 artículos

   let arrayUsersId = userList.map(user => user.id) // Un array con los ids de los usuarios
   let arrayArticlesId = rows.map(article => article.id)

   let con = 0
   // Por cara usuario del array vamos a calificar los 3 artículos de nuestro array
   arrayUsersId.forEach(async userId => {
      arrayArticlesId.forEach(async articleId => {
         con++
         await axios.post(URL_POST_CREATE_RATINGS, {
            "idArticle": articleId,
            "idUser": userId,
            "score": getRandomRating(), // Genera un número alatorio de 1-5
            "comment": "muy bueno bro, cómpralo x" + con
         }).then()
            .catch(e => null)
      })
   })


}

module.exports = loadRatings 