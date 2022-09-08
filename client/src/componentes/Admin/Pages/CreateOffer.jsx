import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
	postOffer,
	getOffers,
	deleteOffer,
	validityOffer,
	editOffer,
	getArticles,
} from "../../../store/actions/index";
import {ToastContainer, toast} from "react-toastify";
import {IoAdd, IoRemove} from "react-icons/io5";
import NavBarAdmin from "../../NavBarAdmin";
import Footer from "../../Footer";
import Swal from "sweetalert2";

function validate(e) {
	const pattern = new RegExp("^[A-Z]+$", "i");
	const soloNum = new RegExp("/^[0-9]+$/");

	const urlImg = (url) => {
		return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(url);
	};
	let errors = {};
	//--------------Porcent----------------
	if (!e.porcent) {
		errors.porcent = "Ingrese porcentaje de descuento";
	} else if (e.porcent < 0 || e.porcent > 5) {
		errors.porcent = "El rango debe ser entre 0 y 100";
	}
	//--------------Expiration----------------
	if (!e.expiration) {
		errors.expiration = "Ingrese la fecha de vigencia";
	}
	//--------------Articulo---------------
	if (!e.articleId) {
		errors.articleId = "Seleccione el articulo a agregar";
	}
	return errors;
}

export default function CreateOffer() {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState({});
	const [selectArticle, setselectArticle] = useState([]);
	const history = useHistory();
	const allOffer = useSelector((state) => state.offers);
	const allArticle = useSelector((state) => state.articles);

	const [input, setInput] = useState({
		porcent: "",
		validity: true,
		expiration: "",
		articleId: [],
	});

	useEffect(() => {
		dispatch(getArticles());
		dispatch(getOffers());
	}, []);

	//   const btnDisabled = !(
	//     input.title &&
	//     input.rating &&
	//     input.detail &&
	//     input.marca &&
	//     input.modelo &&
	//     input.image &&
	//     input.stock &&
	//     input.price &&
	//     input.conectividad &&
	//     input.category
	//   );

	function handleArticleId(e) {
		const F = JSON.parse(e.target.value);
		// input.articleId=[...input.articleId,F.id];
		setselectArticle([
			...selectArticle,
			{
				title: F.title,
				price: F.price,
			},
		]);
		console.log(input.articleId);

		let exists = input.articleId.find((c) => c === e.target.value);
		if (!exists) {
			setInput({
				...input,
				[e.target.name]: [...input.articleId, F.id],
			});
		}
	}

	function handleChange(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);
		console.log(input);
	}

	function handleCheck(e) {
		console.log("target", e.target.value);
		if (e.target.checked) {
			setInput({
				...input,
				[e.target.name]: e.target.value,
			});
			setErrors(
				validate({
					...input,
					type: [input.type, e.target.value],
				})
			);
		} else {
			setInput({
				...input,
				type: input.type.filter((t) => t !== e.target.value),
			});
			setErrors(
				validate({
					...input,
					type: input.type.filter((t) => t !== e.target.value),
				})
			);
		}
	}

	const refreshPage = () => {
		window.location.reload();
	};

	function handleSubmit(e) {
		e.preventDefault();
		Swal.fire({
			text: "Oferta creada correctamente",
			icon: "success"
		}).then(response => {
			if (response) {
				dispatch(postOffer(input));
				setInput({
					porcent: "",
					validity: true,
					expiration: "",
					articleId: [],
				});
				history.push("/admin/ofertas");
				refreshPage();
			}
		});
		
	}

	const box = {
		background:
			"linear-gradient(50deg,rgba(255, 255, 255, 0.4) 12%,rgba(255, 255, 255, 0.1) 77%)",
		boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)",
		backdropFilter: "blur(5px)",
		webkitBackdropFilter: "blur(5px)",
	};
	return (
		<div>
			<NavBarAdmin />
			<div className="text-black min-h-screen font-Work">
				<form onSubmit={(e) => handleSubmit(e)} className="">
					<h1 className="text-3xl m-5 border-b-2 border-b-zinc-300 rounded-lg border font-Work font-bold shadow-2xl">
						CREAR OFERTAS
					</h1>
					<div
						className="flex flex-col lg:grid"
						style={{gridTemplateColumns: "30% 70%"}}
					>
						<div className="mr-4">
							<div className=" flex flex-col justify-start ml-4 font-Work ">
								<div className=" flex flex-col bg-slate-400 rounded-lg rounded-b-none">
									<div
										className=" m-4 flex flex-col rounded-lg"
										style={box}
									>
										{/* Datos Grales del Articulo */}
										<div className="m-2 flex flex-col ">
											<select
												className="select w-full max-w-xs bg-white"
												name="articleId"
												// value={input.articleId?? ""}
												onChange={handleArticleId}
											>
												{/* <option value="">Todos los Productos</option> */}
												{allArticle.map((art) => (
													<option
														key={art.id}
														value={JSON.stringify(
															art
														)}
													>
														{art.title}
													</option>
												))}
											</select>
											{errors.title && (
												<p className="flex text-red-700 font-bold">
													{errors.title}
												</p>
											)}
										</div>
										<div className="m-2 flex flex-col">
											<div className="flex flex-row justify-between">
												<label className="font-bold">
													Porcentaje:{" "}
												</label>
												<input
													className="bg-white w-10 h-8 rounded-md"
													type="number"
													value={input.porcent}
													name="porcent"
													min={5}
													max={90}
													onChange={(e) =>
														handleChange(e)
													}
												/>
											</div>
											{errors.rating && (
												<p className="flex text-red-700 font-bold">
													{errors.rating}
												</p>
											)}
										</div>
										<div className="m-2 flex flex-col">
											<div className="flex flex-row justify-between">
												<label className="font-bold">
													Vigencia:{" "}
												</label>
												<input
													className="bg-white w-32 h-8 w-xs rounded-md"
													type="date"
													value={input.expiration}
													name="expiration"
													onChange={(e) =>
														handleChange(e)
													}
												/>
											</div>
											{/* {errors.modelo && (
                        <p className="flex text-red-700 font-bold">
                          {errors.modelo}
                        </p>
                      )} */}
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col bg-slate-400 rounded-lg rounded-t-none ml-4">
								<div
									className="grid grid-cols-2 font-Work m-4 rounded-lg"
									style={box}
								>
									<div>
										<div className="flex flex-row justify-start pt-10 font-Work font-bold pl-2">
											<p>Porcentaje aplicado:</p>
										</div>
										<div className="flex flex-row justify-start pt-10 font-Work font-bold pl-2">
											<p>Fecha de expiración:</p>
										</div>
									</div>
									<div>
										<div className="flex flex-row justify-end pt-10">
											<p className="mr-4 font-bold bg-white rounded-md p-1">
												{input.porcent}%
											</p>
										</div>
										<div className="flex flex-row justify-end pt-6 pr-2 pb-2">
											<p className=" font-bold bg-white rounded-md p-1 ">
												{input.expiration}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-white mx-2 px-2">
							<div className="md:max-h-[calc(100vh-150px)] overflow-auto flex justify-center">
								<div className="flex flex-col">
									<p className="font-bold p-2 m-2 text-2xl pl-16">
										Articulos que se van a incluir en la
										oferta:
									</p>
									<div className="lg:m-auto xl:ml-20 pt-6">
										<div className="">
											<h3 className="font-bold">
												{selectArticle.map((a) => (
													<div className="border-y-2 border-x-4 border-opacity-50 border-gray-400 text-base flex flex-col py-4">
														<span className="p-2">
															{a.title}
														</span>
														<br />
														<div className="flex flex-row justify-center">
															<p>Precio:</p>
															<span className="text-accent">
																{" "}
																${a.price}
															</span>
														</div>
													</div>
												))}
											</h3>
										</div>
									</div>
								</div>
								<br />
								<br />
								<br />
								<br />
							</div>
						</div>
					</div>
					<div className="py-4 my-4">
						<button type="submit" className="btn btn-accent m-4">
							Crear
						</button>
						<Link to="/admin/articulos" className="">
							<button className="btn btn-warning m-4">
								Cancelar
							</button>
						</Link>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}
