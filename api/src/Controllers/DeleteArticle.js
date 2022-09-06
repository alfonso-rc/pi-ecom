const {Article} = require("../db");
const {Category} = require("../db");

//GET  intermedia, mostrara solo los articulos eliminados logicamente
const getArticle = async () => {
	let apiDB = await Article.findAll({
		include: {
			model: Category,
			attributes: ["name"],
			through: {attributes: []},
		},
	});
	/* const apiFilter = apiDB.filter((el)=> el.disable == true) // */
	const api2 = apiDB.map((el) => {
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
			category: el.categories[0].name,
		};
	});
	return api2;
};

// Por ID, muestra el articulo eliminado, los activos no
const detailArticle = async (req, res, next) => {
	const {id} = req.params;
	try {
		const articleFound = await Article.findByPk(id, {
			include: Category,
		});
		articleFound.disable == false
			? res.status(404).send("No existe Articulo con ese Id!")
			: res.status(200).send(articleFound.dataValues);
	} catch (error) {
		next(error);
	}
};

// GET Muestra articulos eleminados logicamente a traves de tabla intermedia
const getAticleByName = async (req, res, next) => {
	try {
		let getNameTotal = await getArticle();
		res.status(200).send(getNameTotal);
	} catch (error) {
		next(error);
	}
};

//Borrado logico
const putDeleteArticle = async (req, res, next) => {
	try {
		const {id} = req.params;
		let response = await Article.findByPk(id);
		if (!response.disable) {
			await Article.update({disable: true}, {where: {id}});
		} else {
			await Article.update({disable: false}, {where: {id}});
		}
		res.json(response);
	} catch (error) {
		next(error);
	}
};

//Borrado Fisico
async function deleteArticle(req, res, next) {
	try {
		const {id} = req.params;
		let destro = await Article.destroy({where: {id: id}});
		destro === 1
			? res.status(200).send("Eliminado con exito")
			: res.status(404).send("No existe");
	} catch (error) {
		next(error);
	}
}

module.exports = {
	getArticle,
	detailArticle,
	getAticleByName,
	putDeleteArticle,
	deleteArticle,
};
