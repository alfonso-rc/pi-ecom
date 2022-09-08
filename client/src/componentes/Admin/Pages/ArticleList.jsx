import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useSelector, useDispatch} from "react-redux";
import {Link, history, useHistory} from "react-router-dom";
import s from "../Pages/articleList.module.css";
import {
	getAllArticles,
	deleteArticle,
	deleteArticleLogic,
	editArticle,
} from "../../../../src/store/actions/index.js";

export default function ArticleList() {
	const [articulo, setArticulo] = useState([]);
	const [tablaArticulo, setTablaArticulo] = useState([]);
	const [busqueda, setBusqueda] = useState("");
	const history = useHistory();

	const refreshPage = () => {
		window.location.reload();
	};
	let dispatch = useDispatch(); //
	let allArticle = useSelector((state) => state.articles);
	let user = sessionStorage;

	const BASE_URL = process.env.REACT_APP_API_URL;
	const URL_DELETE_ART =
		process.env.NODE_ENV === "production"
			? BASE_URL + "/delete/"
			: `http://localhost:3001/delete/`;

	const peticionGet = async () => {
		await axios
			.get(URL_DELETE_ART)
			.then((response) => {
				setArticulo(response.data);
				setTablaArticulo(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleChange = (e) => {
		setBusqueda(e.target.value);
		filtrar(e.target.value);
	};

	const filtrar = (terminoBusqueda) => {
		var resultadosBusqueda = tablaArticulo.filter((elemento) => {
			if (
				elemento.title
					.toString()
					.toLowerCase()
					.includes(terminoBusqueda.toLowerCase()) ||
				elemento.title
					.toString()
					.toLowerCase()
					.includes(terminoBusqueda.toLowerCase())
			) {
				return elemento;
			}
		});
		setArticulo(resultadosBusqueda);
	};

	useEffect(() => {
		peticionGet();
	}, []);

	function handleClickDelete(id) {
		try {
			Swal.fire({
				text: "¿Estas seguro que deseas eliminar el articulo?",
				icon: "warning",
				showDenyButton: true,
				denyButtonText: "Cancelar",
				denyButtonColor: "red",
				confirmButtonText: "Aceptar",
			}).then((response) => {
				if (response.isDenied) history.push("/admin/articulos");
				else if (response.isConfirmed) {
					Swal.fire({
						text: "Articulo eliminado",
						icon: "success",
					}).then((response) => {
						if (response) {
							dispatch(deleteArticle(id));
							allArticle = allArticle.filter((a) => a.id !== id);
							console.log(id);
							refreshPage();
						}
					});
				}
			});
		} catch (error) {
			console.log(error);
		}
	}
	function handleClickInhab(id) {
		try {
			Swal.fire({
				text: "Articulo modificado",
				icon: "success",
			}).then((response) => {
				if (response) {
					dispatch(deleteArticleLogic(id));
					refreshPage();
				}
			});
		} catch (error) {
			console.log(error);
		}
	}

	function handleClickEdit(id) {
		try {
			dispatch(editArticle(id));
			alert(`El Articulo con id: ${id} ha sido modificado!`);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<h2 className="text-black text-2xl">Administrador de Articulos</h2>
			<br />
			<div>
				<input
					value={busqueda}
					className="input input-bordered bg-white text-black h-9 w-28 sm:w-full sm:h-12"
					placeholder="Búsqueda por nombre"
					onChange={handleChange}
				/>
			</div>
			<div>
				<div className={s.table}>
					<br />
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>id</th>
								<th>Marca</th>
								<th>Modelo</th>
								<th>Habilitado</th>
								<th>Existencias</th>
								<th>Precio</th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{articulo &&
								articulo.map((art) => {
									return (
										<tr key={art.id}>
											<td>{art.title}</td>
											<td>{art.id}</td>
											<td>{art.marca}</td>
											<td>{art.modelo}</td>
											<td>
												{art.disable == false
													? "En Venta"
													: "Pendiente"}
											</td>
											<td>{art.stock}</td>
											<td>{art.price}</td>
											<td>
												{!art.disable ? (
													<div>
														<button
															className="btn btn-success btn-xs"
															onClick={() =>
																handleClickInhab(
																	art.id
																)
															}
														>
															Habilitado
														</button>
													</div>
												) : (
													<div>
														<button
															className="btn btn-error btn-xs"
															onClick={() =>
																handleClickInhab(
																	art.id
																)
															}
														>
															Deshabilitado
														</button>
													</div>
												)}
											</td>
											<td>
												<Link
													to={`/admin/articulos/edit/${art.id}`}
												>
													<button className="btn btn-info btn-xs">
														Editar
													</button>
												</Link>
											</td>
											<td>
												<button
													onClick={() =>
														handleClickDelete(
															art.id
														)
													}
													href="#my-modal-2"
													className="btn btn-error btn-xs"
												>
													Eliminar
												</button>
												{/* <div
													className="modal"
													id="my-modal-2"
												>
													<div className="modal-box">
														<h3 className="font-bold">
															El Articulo se
															eliminara de manera
															permanente!
														</h3>
														<div className="modal-action">
															<button
																className="btn btn-error btn-xs"
																onClick={() =>
																	handleClickDelete(
																		art.id
																	)
																}
															>
																Continuar
															</button>
															<a
																href="#"
																className="btn btn-xs"
															>
																Cancelar
															</a>
														</div>
													</div>
												</div> */}
											</td>
										</tr>
									);
								})}
						</tbody>
						<tfoot></tfoot>
					</table>
				</div>
			</div>
		</div>
	);
}
