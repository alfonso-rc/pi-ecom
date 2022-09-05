//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const loadArticle = require("./src/helpers/LoadArticleDB.js");
const loadRatings = require("./src/helpers/LoadRatings.js");
const loadCategoriesBD = require("./src/helpers/LoadCategory.js");
const loadBrandDb = require("./src/Controllers/BrandControl");
const createDefaulUsers = require("./src/helpers/LoadUsersDB");
const { conn } = require("./src/db.js");
const portToUse = process.env.PORT || 3001; // Al hacer deploy el puerto no lo manejamos nosotros

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
	server.listen(portToUse, async () => {
		try {
			//await loadBrandDb();
			await createDefaulUsers();
			await loadCategoriesBD();
			await loadArticle();
			await loadRatings();
		} catch (error) {
			console.log("Error al cargar datos:", error.message);
		}
		console.log("** Listening at 3001 **"); // eslint-disable-line no-console
	});
});
