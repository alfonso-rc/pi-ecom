require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// SSL necesario en production
const sslConn =
    process.env.NODE_ENV === "production"
        ? { ssl: { require: true, rejectUnauthorized: false } }
        : {};

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        // const sequelize = new Sequelize(`postgres://postgres:2722@localhost/ecom`, {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed

        dialectOptions: sslConn,
    }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
    Article,
    Category,
    Comment,
    Orders,
    User,
    Favorites,
    Cards,
    Rating,
    Session,
    Shopping,
    Offer,
} = sequelize.models;

// RELACIONES DE MODELOS

Article.belongsToMany(Category, { through: "article_category" });
Category.belongsToMany(Article, { through: "article_category" });

// UN USUARIO TIENE MUCHOS ARTÍCULOS COMO FAVORITOS
// UN ARTÍCULO PUEDE SER FAVORITO DE MUCHOS USUARIOS
User.belongsToMany(Article, { through: "user_favorites" });
Article.belongsToMany(User, { through: "user_favorites" });

// UN USUARIO TIENE MUCHOS COMENTARIOS
// UN ARTÍCULO TIENE MUCHOS COMENTARIOS
// UN COMENTARIO PERTENECE A UN USUARIO
User.hasMany(Comment);
Article.hasMany(Comment);
Comment.belongsTo(User);

// UN USUARIO TIENE MUCHAS CALIFICACIONES
// UN ARTÍCULO TIENE MUCHAS CALIFICACIONES
// UN RATING PERTENECE A UN USUARIO
User.hasMany(Rating);
Article.hasMany(Rating);
Rating.belongsTo(User);

// UN ARTÍCULO TIENE MUCHAS OFERTAS
// UN OFERTA PERTENECE A UN ARTICULO
Offer.belongsToMany(Article, { through: "offer_article" });
Article.belongsToMany(Offer, { through: "offer_article" });


module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
