const axios = require('axios');
const { Op } = require("sequelize");
const { Category, Comment, Article, Rating, User } = require('../db');
const { API_URL, API_URL_ID, API_URL_NAME, API_URL_TIPO, IMG_DEFAULT } = process.env;
const { getRaitingArticleById } = require('../helpers/getRaitingArticleById.js')

//TEST DE FUNCIONAMIENTO
const testFunction = (req, res, next) => {
  try {
    return res.send('Ecom Article funcionando!');
  } catch (error) {
    next(error);
  };
};

//CARGA DB
const getAllToDB = (req, res, next) => {
  try {
    return res.send('Ecom Article funcionando!');
  } catch (error) {
    next(error);
  };
};

//GET Visualiza TODOS LOS ARTICULOS ----> (disable: true && false)
const getAllArticle = async (req, res, next) => {
  try {
    let articlesFound = await Article.findAll({
      include: {
        model: Category,
        attributes: ["name"],
        through: { attributes: [] }
      }
    });

    const mappedArticles = await articlesFound.map( el => {
      // const articleRating = 

      return {
        id: el.id,
        title: el.title,
        rating: el.rating,
        detail: el.detail.detail,
        marca: el.detail.marca,
        modelo: el.detail.modelo,
        so: el.detail.so,
        cpu: el.detail.cpu,
        ram: el.detail.ram,
        color: el.detail.color,
        pantalla: el.detail.pantalla,
        image: el.image,
        stock: el.stock,
        disable: el.disable,
        price: el.price,
        conectividad: el.conectividad,
        category: el.categories.name,
      }
    })
    res.status(200).send(mappedArticles);
  } catch (error) {
    next(error)
  }
};


//GET Solo Visualiza los que tenga disable=false
const getArticle = async () => {

  let articlesFound = await Article.findAll({
    include: {
      model: Category,
      attributes: ["name"],
      through: { attributes: [] }
    }
  });
  const articlesFiltered = articlesFound.filter((el) => el.disable == false);
  let articlesWithRating = [];

  for (let i = 0; i < articlesFiltered.length; i++) {
    const article = articlesFiltered[i];
    article.rating = await getRaitingArticleById(article.id);
    articlesWithRating.push(article)

  }

  return [...articlesWithRating]
  // Este código comentado no funciona como se espera, debido al "map"
  //
  // const articlesWithRating = articlesFiltered.map(async el => {
  //   const idArticle = el.id;
  //   return {
  //     id: el.id,
  //     title: el.title,
  //     rating: await getRaitingArticleById(idArticle),
  //     detail: el.detail.detail,
  //     marca: el.detail.marca,
  //     modelo: el.detail.modelo,
  //     so: el.detail.so,
  //     cpu: el.detail.cpu,
  //     ram: el.detail.ram,
  //     color: el.detail.color,
  //     pantalla: el.detail.pantalla,
  //     image: el.image,
  //     stock: el.stock,
  //     disable: el.disable,
  //     price: el.price,
  //     conectividad: el.conectividad,
  //     category: el.categories.name,
  //   }
  // })
  // return (articlesWithRating);
};

// GET DETAIL ARTICLE BY ID
const detailArticle = async (req, res, next) => {
  const { id } = req.params;
  // console.log(typeof (id))
  try {
    let articleFound = await Article.findByPk(id, {
      include: {
        model: Rating,
        include: {
          model: User,
        }
      }
    });

    articleFound.dataValues.rating = await getRaitingArticleById(id)

    //Visualiza los disable = false
    // console.log(articleFound);
    articleFound.disable === false ?
      res.status(200).send(articleFound.dataValues) :
      res.status(404).send('No existe Articulo con ese Id!'); // Status 404 cuando el recurso no existe
  } catch (error) {
    next(error);
  };
};

// CREATE ARTICLE 
const createArticle = async (req, res, next) => {
  try {
    const { title, rating, detail, marca, modelo, so, cpu, ram, color, pantalla, image, stock, disable, price, conectividad, category } = req.body;
    const newArticle = await Article.create({ title, rating, detail: { detail, marca, modelo, so, cpu, ram, color, pantalla }, image, stock, disable, price, conectividad });

    const categoryAll = await Category.findAll({
      where: {
        name: category
      }
    });
    newArticle.addCategory(categoryAll);
    res.status(200).send(newArticle);
  } catch (error) {
    next(error);
  };
};

//Edit Article
const editArticle = async (req, res, next) => {
  try {
    await Article.update(req.body, {
      where: {
        id: req.body.id
      }
    });
    let response = await Article.findByPk(req.body.id);
    res.json(response);
  } catch (error) {
    console.log(error);
  };
  //   try {
  //     const { title, rating, detail, marca, modelo, so, cpu, ram, color, pantalla, image, stock, disable, price, conectividad, category } = req.body;
  //     await Article.update(
  //       {
  //         id:id,
  //         title:title,
  //         rating: rating,
  //         detail:{
  //           detail: detail.detail,
  //           marca: detail.marca,
  //           modelo:detail.modelo,
  //           so: detail.so,
  //           cpu: detail.cpu,
  //           ram: detail.ram,
  //           color: detail.color,
  //           pantalla: detail.pantalla,
  //         },
  //         image: image,
  //         stock: stock,
  //         disable: false,
  //         price: price,
  //         conectividad: conectividad,
  //       },
  //       {where:{id}
  //       }
  //     )
  //       res.send("Cambios actualizados")
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}

// buscar artículo por cadena de texto
const getAticleByName = async (req, res, next) => {
  const { title } = req.query;
  try {
    let getNameTotal = await getArticle();
    if (title) {
      let articleName = await getNameTotal.filter(n => n.title.toLowerCase().includes(title.toLowerCase()));
      articleName.length
        ? res.status(200).send(articleName) :
        res.status(400).send('No Existe el Articulo');
    }
    else {
      res.status(200).send(getNameTotal);
    }
  } catch (error) {
    next(error);
  };
};


// Crear calificación de artículo y rating (en la misma tabla "ratings")
const createArticleUserRating = async (req, res, next) => {
  const { idUser, idArticle, score, comment } = req.body;
  // console.log(req.body)
  try {
    // Verificar si el idUser existe
    const userFound = await User.findByPk(idUser)
    if (!userFound) { res.status(404).send("El usuario no existe en la base de datos"); return }

    // Verificar si el artículo existe
    const articleFound = await Article.findByPk(idArticle)
    if (!articleFound) { res.status(404).send("El artículo no existe en la base de datos"); return }

    // Verificar que el usuario no haya hecho ya un comentario a ese producto
    const ratingFound = await Rating.findOne({
      where: {
        userId: idUser,
        articleId: idArticle
      }
    })

    // Si hay un rating de ese usuario a ese atículo significa que quiere atualizarlo
    if (ratingFound) {
      // console.log(ratingFound.score)

      res.status(400).send("El usuario ya calificó a este artículo");
      return
    }

    // Verificar que el score se encuentre en el rango 1-5 y creamos el rating
    if (score >= 1 && score <= 5) {
      // Creamos el rating
      const createdRating = await Rating.create({
        score: score,
        userId: idUser,
        articleId: idArticle,
        comment: comment
      })

      { res.status(200).send(createdRating.dataValues); return }
    } else {
      res.status(404).send(":(")
    }

  } catch (error) {
    next(error);
  };
};

// Trae todos los comentarios con sus respectivos ratings de un artículo
const getAllCommentsByIdArticle = async (req, res, next) => {
  const { idArticle } = req.params;
  console.log(req.params)
  try {
    console.log("d")

    res.status(404).send("ERROR PERSONALIZADO")


  } catch (error) {
    next(error);
  };
};


module.exports = {
  testFunction,
  createArticle,
  getArticle,
  getAllArticle,
  detailArticle,
  getAticleByName,
  createArticleUserRating,
  editArticle,
  getAllCommentsByIdArticle
};