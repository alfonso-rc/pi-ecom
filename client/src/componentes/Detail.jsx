import {useEffect, useState} from "react";

import axios from "axios";
import {Link, useHistory, useParams} from "react-router-dom";
import "../App.css";
import {IoAdd, IoRemove} from "react-icons/io5";
import NavBarDetail from "./NavBarDetail";
import Carrito from "./Carrito";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, addComment, addRating, getUsers} from "../store/actions";
import Footer from "./Footer";
import NotFound from "./NotFound";
import loading from "../imagenes/loading2.gif";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {increment, decrement} from "../store/actions/index";
import RatingStars from "./RatingStars/RatingStars";
import verifyIsLogged from "./helpers/verifyIsLogged";
import showToast from "./helpers/showToast.js";

const BASE_URL = process.env.REACT_APP_API_URL;
const URL_GET_DETAIL_BY_ID =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/article/"
		: "http://localhost:3001/article/";

const URL_ADD_FAVORITE =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/user/add_favorite/"
		: "http://localhost:3001/user/add_favorite/";

const URL_ASK_FAVORITE =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/user/ask_favorite/"
		: "http://localhost:3001/user/ask_favorite/";

const URL_ASK_BOUGHT =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/myShoppings/get"
		: "http://localhost:3001/myShoppings/get";

const URL_USER_RATING_ARTICLE =
	process.env.NODE_ENV === "production"
		? BASE_URL + "/article/rating"
		: "http://localhost:3001/article/rating";

const styleCommentsBox = {
	zIndex: 0,
	padding: "0 2rem",
};

export default function ArticleDetail() {
	const dispatch = useDispatch();
	const history = useHistory();

	// Texto de comentario
	const [input, setInput] = useState("");
	const [article, setArticle] = useState(null);
	// const [stockCon, setStockCon] = useState(); // El stock se enncuentra en article
	const [count, setCount] = useState(1);
	const [isFavorite, setIsFavorite] = useState(false);
	const [isBought, setIsBought] = useState(false);
	const [userRating, setUserRaiting] = useState(4);

	// id del artículo
	let {id} = useParams();

	// NOTA IMPORTANTE
	// Cuando se monta por primera vez, se pergunta si está loggeado y trae la información de:
	// artículo a mostrar
	// si es favorito del usuario
	// si el usuario ya comentó

	// ESTE USE EFFECT TIENE EL COMPORTAMIENTO DE UN DID-MOUNTED, SOLO SE EJECUTA AL MONTAR EL COMPONENTE POR PRIMERA VEZ
	useEffect(() => {
		// Pedimos el detalle del artículo
		axios.get(URL_GET_DETAIL_BY_ID + id).then((response) => {
			// console.log(response.data)
			setArticle(response.data);
		});
	}, [id]);

	// Este useEffect se ejecuta cuando la información del artículo llega
	useEffect(() => {
		const idUser = sessionStorage.getItem("id");
		const bodyAskFavorite = {
			idUser: idUser,
			idArticle: id, // id del artículo
		};

		console.log("id usuario:", idUser);
		// Primero chequeamos que hay sesión iniciada
		if (idUser) {
			axios
				.post(URL_ASK_FAVORITE, bodyAskFavorite)
				.then((res) => {
					console.log("si es favorito");
					setIsFavorite(true);
				})
				.catch((e) => console.log(e));

			axios
				.get(URL_ASK_BOUGHT, {
					params: {
						idUser,
						idArticle: id,
					},
				})
				.then((res) => {
					console.log(res.data);
					setIsBought(res.data.isBougth);
				});
		}
	}, [article]);

	function addCart(item) {
		dispatch(addToCart(item));
	}

	// Aumentar y diminuir la cantidad de unidades del artículo a comprar
	function addIncrement(e) {
		//e.preventDefault();
		if (count < article.stock) setCount(count + 1);
		// dispatch(increment(e.target.value));
	}
	function subsDecrement(e) {
		//e.preventDefault();
		if (count >= 2) setCount(count - 1);
		// dispatch(decrement(e.target.value));
	}

	// En esta funcion le decimos a la api que queremos agregar a favoritos el artículo actual
	function handleFavoriteCLick() {
		// Primero chequeamos que hay sesión iniciada
		const id = sessionStorage.getItem("id");

		// Si no ha iniciado sesión salta mensaje y no hace nada más
		if (!id) {
			showToast("info", "Debes iniciar sesión para añadir a favoritos");
			return;
		}

		// El body que recibe la api
		const bodyAddFavorite = {
			idUser: id,
			idArticle: article.id,
		};

		axios
			.post(URL_ADD_FAVORITE, bodyAddFavorite)
			.then((res) => {
				// Si el código de estado es 201 --> añadido a favoritos
				// Si es 200 ---> eliminado de favoritos
				if (res.status === 201) {
					setIsFavorite(res.data.isFavoriteNow);
					showToast("success", "Añadido a favoritos");
					return;
				} else if (res.status === 200) {
					setIsFavorite(res.data.isFavoriteNow);
				}
			})
			.catch((res) => console.log(res.data));

		setIsFavorite(!isFavorite);
	}

	const HandleClickCommentButton = (e) => {
		e.preventDefault();

		axios
			.post(URL_USER_RATING_ARTICLE, {
				idArticle: id,
				idUser: sessionStorage.getItem("id"),
				score: userRating,
				comment: input,
			})
			.then(() => {
				showToast("success", "Comentario agregado");
				axios.get(URL_GET_DETAIL_BY_ID + id).then((response) => {
					// console.log(response.data)
					setArticle(response.data);
				});
			})
			.catch(() =>
				showToast("error", "Ya comentaste este producto compa")
			);

		// axios.get(URL_GET_DETAIL_BY_ID + id)
		//   .then((response) => {
		//     // console.log(response.data)
		//     setArticle(response.data);
		//   })
	};

	// Comentario
	const handleTextInputComment = (e) => {
		// console.log(e.target.value)
		setInput(e.target.value);
	};

	/*

  FUNCIONES QUE FUNCIONAN COMO MINI COMPONENTES ---> nótese que retornan objetos de html

  */
	function RatingToUser() {
		function handleCheckedStar(num) {
			setUserRaiting(num);
		}

		return (
			<div className="rating rating-lg mx-1 my-1">
				<input
					defaultChecked={userRating === 1}
					onClick={() => handleCheckedStar(1)}
					type="radio"
					name="rating-8"
					className="mask mask-star-2 bg-orange-400"
				/>
				<input
					defaultChecked={userRating === 2}
					onClick={() => handleCheckedStar(2)}
					type="radio"
					name="rating-8"
					className="mask mask-star-2 bg-orange-400"
				/>
				<input
					defaultChecked={userRating === 3}
					onClick={() => handleCheckedStar(3)}
					type="radio"
					name="rating-8"
					className="mask mask-star-2 bg-orange-400"
				/>
				<input
					defaultChecked={userRating === 4}
					onClick={() => handleCheckedStar(4)}
					type="radio"
					name="rating-8"
					className="mask mask-star-2 bg-orange-400"
				/>
				<input
					defaultChecked={userRating === 5}
					onClick={() => handleCheckedStar(5)}
					type="radio"
					name="rating-8"
					className="mask mask-star-2 bg-orange-400"
				/>
			</div>
		);
	}

	function ShowFavoriteButton() {
		const styleFavoriteButton = isFavorite
			? "btn gap-2 btn-error"
			: "btn btn-outline btn-info";
		return (
			<button
				onClick={handleFavoriteCLick}
				className={styleFavoriteButton}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			</button>
		);
	}

	function ShowUserCommentAndRatingBlock() {
		const articleCommentsAndRaitings = article.ratings;

		if (!articleCommentsAndRaitings.length) {
			return (
				<div className="collapse collapse-open border border-base-300 bg-base-100 bg-base-300">
					<div className="collapse-title text-xl">
						Sin calificaciones
					</div>
				</div>
			);
		}

		return (
			<div
				style={styleCommentsBox}
				className="collapse collapse-open border border-base-300 bg-base-100 bg-base-300"
			>
				<div className="collapse-title text-xl">
					Comentarios y calificaciones
				</div>
				<div className="overflow-x-auto">
					<table className="table w-full px-4">
						{/* <!-- head --> */}
						<thead>
							<tr>
								<th>Calificación</th>
								<th>Comentario</th>
								<th>Usuario</th>
							</tr>
						</thead>
						<tbody>
							{/* <!-- row 1 --> */}
							{articleCommentsAndRaitings.map((c) => {
								return (
									<tr>
										<td>
											<div
												style={{
													position: "relative",
													left: "1.8rem",
												}}
											>
												{
													<RatingStars
														rating={c.score}
													/>
												}
											</div>
										</td>
										<td>{c.comment}</td>
										<td>{`${c.user.name} ${c.user.lastName}`}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="fix fixed top-0 left-0 right-0 z-10 w-screen">
				<NavBarDetail />
			</div>
			<div>
				<button className="btn btn-circle btn-outline"></button>
			</div>
			<div className="font-Work text-lg md:text-xl bg-white text-black pt-10">
				{article ? (
					<div>
						<div className="flex flex-wrap items-center justify-center lg:grid grid-cols-2">
							<div className="justify-center">
								<img
									src={article.image}
									alt="..."
									className="lg:m-auto h-96 w-auto"
								/>
							</div>
							<div className="lg:m-auto xl:ml-20 pt-6">
								<div>
									<h3 className="font-bold text-2xl md:text-4xl">
										{article.title}
									</h3>
									<div className="flex flex-row justify-center   pt-6">
										<h1 className="font-bold mx-3">
											Calificación:{" "}
										</h1>
										{/* esta es la forma provicional del Rating */}
										<p>
											{article.rating === "NaN"
												? (article.rating =
														" sin calificaciones")
												: article.rating}
										</p>
									</div>
									<div className="flex justify-center  ">
										<RatingStars rating={article.rating} />
									</div>
								</div>
								<div>
									<div className="flex flex-row justify-center py-3 font-bold pb-6">
										<h1 className="font-bold mx-3">
											Precio:{" "}
										</h1>
										<p className="text-accent font-mono">
											{" "}
											${article.price * count}
										</p>
									</div>

									{/* BOTONES PARA AÑADIR UNIDADES DEL STOCK */}

									{/* <div className="flex justify-center  ">
                    <button onClick={ (e) => subsDecrement(e) } className="btn btn-outline btn-primary btn-sm btn-square" >
                      <IoRemove className="text-2xl" />
                    </button>
                    <p className="px-5">{ count }</p>
                    <button onClick={ (e) => addIncrement(e) } className="btn btn-primary btn-sm btn-square ">
                      <IoAdd className="text-2xl" />
                    </button>
                  </div> */}
									<div className="flex flex-row justify-center   pt-6">
										<h1 className="font-bold">Existencias:</h1>
										<p>{article.stock}</p>
									</div>
									<div className="flex flex-row justify-center  pt-6">
										<h1 className="font-bold">Color:</h1>
										<p>{article.detail.color}</p>
									</div>
									<br />

									<ShowFavoriteButton />

									<br />

									<button
										className="btn btn-accent btn-wide my-2"
										onClick={() => addCart(article)}
									>
										Agregar al carrito
									</button>
									<br />
									{/* <button className="btn btn-primary btn-wide">Comprar</button>                */}
								</div>

								<ToastContainer />
							</div>
						</div>

						<div className="mx-8 text-start lg:px-20">
							<h1 className="mt-14 font-bold text-2xl md:text-4xl">
								Descripcion
							</h1>
							<br />
							<p>{article.detail.detail}</p>
							<h1 className="mt-14 font-bold text-2xl md:text-4xl">
								Especificaciones
							</h1>
							<br />
							<div className="grid grid-cols-2">
								<h1 className="font-bold mt-2">Marca:</h1>
								<p className="mt-2">{article.detail.marca}</p>
								<h1 className="font-bold mt-8">Modelo:</h1>{" "}
								<p className="mt-8">{article.detail.modelo} </p>
								{/* Si a alguien le parece que este codigo esta muy feo cosa que a mi tambien y quiere arreglarlo con gusto lo acepto
                                Comprobamos que descripcion existe y mostramos, pasa que lo hice 1 por uno porque no queria romper el estilo,despues arreglo u.u */}
								{article.detail.so && (
									<h1 className="font-bold mt-8">SO:</h1>
								)}
								{article.detail.so && (
									<p className="mt-8">{article.detail.so}</p>
								)}
								{article.detail.cpu && (
									<h1 className="font-bold mt-8">CPU:</h1>
								)}
								{article.detail.cpu && (
									<p className="mt-8">{article.detail.cpu}</p>
								)}
								{article.detail.ram && (
									<h1 className="font-bold mt-8">RAM:</h1>
								)}
								{article.detail.ram && (
									<p className="mt-8">{article.detail.ram}</p>
								)}
								{article.detail.pantalla && (
									<h1 className="font-bold mt-8">
										Pantalla:
									</h1>
								)}
								{article.detail.pantalla && (
									<p className="mt-8">
										{article.detail.pantalla}
									</p>
								)}
								{/* <h1 className="font-bold mt-8">Categoria:</h1><p className="mt-8">{article.categories?article.categories[0].name:article.categories}</p> */}
							</div>
						</div>
						<br />
						<br />

						<ShowUserCommentAndRatingBlock />
						{/* <RatingToUser /> */}
						<br />
						<br />
						{isBought ? (
							<div>
								<RatingToUser />
								<div className="flex flex-row justify-evenly items-center flex-wrap	">
									<textarea
										onChange={(e) =>
											handleTextInputComment(e)
										}
										className="textarea textarea-accent bg-white  w-2/3 h-10 mx-1 my-1"
										placeholder="que te pareció el producto"
										name="texto"
										value={input}
									></textarea>
									<button
										disabled={
											input.length > 5 ? false : true
										}
										className="btn btn-outline btn-accent h-15 mx-1 my-1"
										type="submit"
										onClick={(e) =>
											HandleClickCommentButton(e)
										}
									>
										Comentar
									</button>
								</div>
							</div>
						) : (
							<h3>
								No puedes comentar porque no has comprado este
								producto
							</h3>
						)}
					</div>
				) : (
					/* SI NO HAY INFO DEL ARTÍCULO, SE MUESTRA UN GIF DE CARGANDO */
					<div className="flex  place-content-center">
						{<img src={loading} alt="img not found" />}
					</div>
				)}
				<br />
				<br />
				<Link to="/home">
					<button className="my-20 btn sm:btn-sm md:btn-md lg:btn-lg">
						Volver
					</button>
				</Link>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
