// Funcion que recibe un id de un artículo y calcula su rating en base a todas
// las calificaciones de los usuarios. Retorna un número decimal ej: 1.3, 3.6
const { Rating } = require('../db');

async function getRaitingArticleById(idArticle) {
   // Buscamos todos las calificaciones del artículo mediante su id
   const ratingsArticle = await Rating.findAll({
      where: {
         articleId: idArticle,
      }
   })

   // Calculamos el promedio sumando todas las calificaciones y dividiendolas por la cantidad total de calificaciones
   if (ratingsArticle) {
      let sum = 0
      ratingsArticle.forEach(rating => {
         sum = sum + rating.score
      })
      return (sum / (ratingsArticle.length)).toFixed(1);
   }
   return 0
}

module.exports = { getRaitingArticleById }