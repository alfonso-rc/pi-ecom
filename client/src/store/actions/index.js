import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = process.env.REACT_APP_API_URL;
const URL_GET_ALL_ARTICLES =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/article"
		: "http://localhost:3001/article";

export function toggleCart() {
	return function (dispatch) {
		dispatch({
			type: "TOOGLE_CART",
		});
	};
}

export function getArticles() {
	return function (dispatch) {
		return axios(URL_GET_ALL_ARTICLES)
			.then((articles) => {
				dispatch({
					type: "GET_ARTICLES",
					payload: articles.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

export function orderByAZ(order) {
	try {
		return {
			type: "ORDER_BY_ARTICLES",
			payload: order,
		};
	} catch (error) {
		console.log(error);
	}
}
export function orderByPrice(payload) {
	try {
		return {
			type: "ORDER_BY_PRICE",
			payload,
		};
	} catch (error) {
		console.log(error);
	}
}

export function orderByRating(payload) {
	try {
		return {
			type: "ORDER_BY_RATING",
			payload,
		};
	} catch (error) {
		console.log(error);
	}
}

const URL_GET_ALL_ARTICLES_DB =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/article/all"
		: "http://localhost:3001/article/all";

export function getAllArticles() {
	return function (dispatch) {
		return axios(URL_GET_ALL_ARTICLES_DB)
			.then((articles) => {
				dispatch({
					type: "GET_ALL_ARTICLES",
					payload: articles.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

const URL_GET_TITLE =
	process.env.NODE_ENV === "production"
		? BASE_URL + `/article?title=`
		: `http://localhost:3001/article?title=`;

export function getName(title) {
	return async function (dispatch) {
		try {
			var json = await axios.get(`${URL_GET_TITLE}${title}`);
			return dispatch({
				type: "GET_NAME",
				payload: json.data,
			});
		} catch (error) {
			Swal.fire({
				text: `No se ha encontrado el producto ${title}`,
				icon: "info",
			});
		}
	};
}

/* export function getbrands() {
	////////////////////////
	return async function (dispatch) {
		var info = await axios.get("http://localhost:3001/brand");
		return dispatch({
			type: "GET_BRAND",
			payload: info.data,
		});
	};
} */
export function orderBrand2(brand) {
	////////////////////////
	return {
		type: "ORDER_BY_BRAND2",
		payload: brand,
	};
}
const URL_GET_SMARTPHONE =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/category/smartphones"
		: `http://localhost:3001/category/smartphones`;

export function getSmartphones() {
	return async function (dispatch) {
		var json = await axios(URL_GET_SMARTPHONE);
		return dispatch({
			type: "GET_SMARTPHONES",
			payload: json.data,
		});
	};
}
const URL_GET_TABLETS =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/category/tablets"
		: `http://localhost:3001/category/tablets`;

export function getTablets() {
	return async function (dispatch) {
		var json = await axios(URL_GET_TABLETS);
		return dispatch({
			type: "GET_TABLETS",
			payload: json.data,
		});
	};
}

const URL_GET_NOTEBOOKS =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/category/notebooks"
		: `http://localhost:3001/category/notebooks`;

export function getNotebooks() {
	return async function (dispatch) {
		var json = await axios(URL_GET_NOTEBOOKS);
		return dispatch({
			type: "GET_NOTEBOOKS",
			payload: json.data,
		});
	};
}

const URL_GET_ACCESORIES =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/category/accesories"
		: `http://localhost:3001/category/accesories`;

export function getAccesories() {
	return async function (dispatch) {
		var json = await axios(URL_GET_ACCESORIES);
		return dispatch({
			type: "GET_ACCESORIES",
			payload: json.data,
		});
	};
}

const URL_POST_ART =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/article/create/"
		: `http://localhost:3001/article/create/`;

export function postArticle(payload) {
	return async function (dispatch) {
		const json = await axios.post(URL_POST_ART, payload);
		console.log(json.data);
		return dispatch({
			type: "POST_ARTICLE",
			json,
		});
	};
}

//Edit Article
const URL_EDIT_ART =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/article/edit/"
		: `http://localhost:3001/article/edit/`;

export function editArticle(id) {
	return async function (dispatch) {
		try {
			var respuesta = await axios.put(URL_EDIT_ART + id);
			return dispatch({
				type: "EDIT_ARTICLE",
				payload: respuesta.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Borrado Fisico
const URL_DELETE_ART =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/delete/"
		: `http://localhost:3001/delete/`;

export function deleteArticle(id) {
	return async function (dispatch) {
		try {
			var respuesta = await axios.delete(URL_DELETE_ART + id);
			return dispatch({
				type: "DELETE_ARTICLE",
				payload: respuesta.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Borrado Logico
const URL_PUT_ART =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/delete/"
		: `http://localhost:3001/delete/`;

export function deleteArticleLogic(id) {
	return async function (dispatch) {
		try {
			var respuesta = await axios.put(URL_PUT_ART + id);
			return dispatch({
				type: "DELETE_ARTICLE_LOGIC",
				payload: respuesta.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

const URL_GET_CATEGORY =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/category/"
		: `http://localhost:3001/category/`;

export function getCategory() {
	return async function (dispatch) {
		var info = await axios.get(URL_GET_CATEGORY);
		return dispatch({type: "GET_CATEGORY", payload: info.data});
	};
}

// const URL_POST_USER = process.env.NODE_ENV === "production" ?
//   BASE_URL + "/user/create" : `http://localhost:3001/user/create`

// export function registerUser(user) {
//   return async function (dispatch) {
//     const json = (await axios.post(URL_POST_USER, user)).data
//     //localStorage.setItem('token', json.token);
//     return dispatch({
//       type: "RES_USER",
//       payload: json
//     });
//   }
// }
export function registerUser(user) {
	return (dispatch) => {
		dispatch({
			type: "RES_USER",
			payload: user,
		});
	};
}

const URL_GET_USER =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/user/all"
		: `http://localhost:3001/user/all`;

export function getUsers() {
	return function (dispatch) {
		return axios(URL_GET_USER)
			.then((users) => {
				dispatch({
					type: "GET_USER",
					payload: users.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

//Borrado Fisico de Usuario
const URL_DELETE_USER =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/user/delete/"
		: `http://localhost:3001/user/delete/`;

export function deleteUser(id) {
	return async function (dispatch) {
		try {
			var respuesta = await axios.delete(URL_DELETE_USER + id);
			return dispatch({
				type: "DELETE_USER",
				payload: respuesta.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Baneado de un Usuario
const URL_BAN_USER =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/user/ban/"
		: `http://localhost:3001/user/ban/`;

export function banUser(id) {
	return async function (dispatch) {
		try {
			var respuesta = await axios.put(URL_BAN_USER + id);
			return dispatch({
				type: "BAN_USER",
				payload: respuesta.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Baneado de un Usuario
const URL_TYPE_USER =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/user/type/"
		: `http://localhost:3001/user/type/`;

export function typeUser(id) {
	return async function (dispatch) {
		try {
			var respuesta = await axios.put(URL_TYPE_USER + id);
			return dispatch({
				type: "TYPE_USER",
				payload: respuesta.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function removeCart(id) {
	return (dispatch) =>
		dispatch({
			type: "REMOVE_TO_CART",
			payload: id,
		});
}

export function addToCart(payload) {
	// console.log(payload)
	return (dispatch) =>
		dispatch({
			type: "ADD_TO_CART",
			payload: payload,
		});
}

// const URL_LOGIN_USER = process.env.NODE_ENV === "production" ?
//   BASE_URL + "/user/login" : `http://localhost:3001/user/login`

// export function loginUser(user) {
//   return async function (dispatch) {
//     const json = (await axios.post(URL_LOGIN_USER, user)).data
//     //localStorage.setItem('token', json.token)
//     return dispatch({
//       type: "LOG_USER",
//       payload: json
//     });
//   }
// }
export function loginUser(user) {
	return (dispatch) => {
		dispatch({
			type: "LOG_USER",
			payload: user,
		});
	};
}

export function logOutUser(user) {
	return (dispatch) => {
		dispatch({
			type: "LOGOUT_USER",
			payload: user,
		});
	};
}

const URL_POST_COMMENT =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/comment/create"
		: `http://localhost:3001/comment/create`;

export function addComment(payload) {
	return async function (dispatch) {
		await axios
			.post(URL_POST_COMMENT, payload)
			.then((json) => {
				// Solo si es exitosa la creación del comentario, lo ponemos directamente en el DOM para que lo visualize el usuario
				window.alert("Comentario agregado");
				return dispatch({
					type: "POST_COMMENT",
					json,
				});
			})
			.catch((error) => {
				// console.log(error)
				window.alert(error.response.data);
			});
	};
}

const URL_POST_RATING =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/article/rating"
		: `http://localhost:3001/article/rating`;

export function addRating(payload) {
	return async function (dispatch) {
		const json = await axios.post(URL_POST_RATING, payload);
		console.log(json.data);
		return dispatch({
			type: "POST_RATING",
			json,
		});
	};
}

export function orderFavorite(order) {
	return {
		type: "ORDER_FAVORITE",
		order,
	};
}

// Funcion que suscribe un email a las ofertas (guarda el email en la tabla de la base de datos )
export function subscribeEmail(email) {
	return {
		type: "SUBSCRIBE_EMAIL",
		email,
	};
}
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => {
	return {
		type: INCREMENT,
		payload: 1,
	};
};
export const decrement = () => {
	return {
		type: DECREMENT,
		payload: 1,
	};
};
const URL_GET_DETAIL_BY_ID =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/article/"
		: `http://localhost:3001/myShoppings/get?id=${sessionStorage.id}`;

// export function getShopping() {
// 	return async function (dispatch) {
// 		return axios(URL_GET_DETAIL_BY_ID)
// 			.then((articles) => {
// 				dispatch({
// 					type: "GET_SHOPPING",
// 					payload: articles.data,
// 				});
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	};
// }
export function getShopping() {
	return async function (dispatch) {
		var json = await axios(URL_GET_DETAIL_BY_ID);
		return dispatch({
			type: "GET_SHOPPING",
			payload: json.data,
		});
	};
}

export function resetArticles() {
	return (dispatch) => {
		dispatch({
			type: "RESET_ARTICLES",
		});
	};
}

//Post Offer
const URL_POST_OFFER =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/offer/create/"
		: `http://localhost:3001/offer/create/`;

export function postOffer(payload) {
	return async function (dispatch) {
		const json = await axios.post(URL_POST_OFFER, payload);
		console.log(json.data);
		return dispatch({
			type: "POST_OFFER",
			json,
		});
	};
}

//Get de ofertas
const URL_GET_OFER =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/offer"
		: `http://localhost:3001/offer`;

export function getOffers() {
	return function (dispatch) {
		return axios(URL_GET_OFER)
			.then((offers) => {
				dispatch({
					type: "GET_OFFERS",
					payload: offers.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

//Borrado Fisico de una oferta
const URL_DELETE_OFFER =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/offer/delete/"
		: `http://localhost:3001/offer/delete/`;

export function deleteOffer(id) {
	return async function (dispatch) {
		try {
			var respuesta = await axios.delete(URL_DELETE_OFFER + id);
			return dispatch({
				type: "DELETE_OFFER",
				payload: respuesta.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Validar un Oferta
const URL_VALIDITY_OFFER =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/offer/validate/"
		: `http://localhost:3001/offer/validate/`;

export function validityOffer(id) {
	return async function (dispatch) {
		try {
			var respuesta = await axios.put(URL_VALIDITY_OFFER + id);
			return dispatch({
				type: "VALIDITY_OFFER",
				payload: respuesta.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Edit Offer
const URL_EDIT_OFFER =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/offer/edit/"
		: `http://localhost:3001/offer/edit/`;

export function editOffer(id) {
	return async function (dispatch) {
		try {
			var respuesta = await axios.put(URL_EDIT_OFFER + id);
			return dispatch({
				type: "EDIT_OFFER",
				payload: respuesta.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
