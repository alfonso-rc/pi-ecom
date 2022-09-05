import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {Link, history,useHistory} from "react-router-dom";
import s from "../Pages/articleList.module.css";
import {
	getAllArticles,
	deleteArticle,
	deleteArticleLogic,
	editArticle,
} from "../../../../src/store/actions/index.js";

export default function ArticleList() {
	let allArticle = useSelector((state) => state.articles);
	let dispatch = useDispatch();
	const history = useHistory();
	const [article, setArticle] = useState(null);
	const refreshPage = ()=>{
		window.location.reload();
	 }

	useEffect(() => {
		dispatch(getAllArticles());
	}, []);

	function handleClickDelete(id) {
		try {
			dispatch(deleteArticle(id));
			allArticle = allArticle.filter((a) => a.id !== id);
			console.log(id);
			alert(`El Articulo con id: ${id} fue Eliminado!`);
		} catch (error) {
			console.log(error);
		}
	}

	function handleClickInhab(id) {
		try {
			dispatch(deleteArticleLogic(id));
			alert('Hecho!');
			// history.push('/admin/articulos/');
			refreshPage();
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
		<div className="">
			<div>
				<table className={s.table}/*className="table table-compact w-full" */>
					<thead>
						<tr>
							<th>Name</th>
							<th>id</th>
							<th>Marca</th>
							<th>Modelo</th>
							<th>Habilitado</th>
							<th>Stock</th>
							<th>Price</th>
							<th>Action</th>
							<th>Action</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{allArticle?.map((art) => {
							return (
								<tr>
									<td>{art.title}</td>
									<td>{art.id}</td>
									<td>{art.marca}</td>
									<td>{art.modelo}</td>
									<td>{art.disable}</td>
									<td>{art.stock}</td>
									<td>{art.price}</td>
									<td>
							 {(!art.disable)?
							 	<div>
								<button className="btn btn-success btn-xs" onClick={() =>handleClickInhab(art.id)}>Habilitar</button>
							 	</div>:
								 <div>
								 	<button className="btn btn-error btn-xs" onClick={() =>handleClickInhab(art.id)}>Deshabilitar</button>
							 	</div>
							 }
									</td>
									<td>
										<Link
											to={`/admin/articulos/edit/${art.id}`}
										>
											<button className="btn btn-info btn-xs">
												Edit
											</button>
										</Link>
									</td>
									<td>
										<a
											href="#my-modal-2"
											class="btn btn-error btn-xs"
										>
											Delete
										</a>
										<div class="modal" id="my-modal-2">
											<div class="modal-box">
												<h3 class="font-bold">
													El Articulo se eliminara de
													manera permanente!
												</h3>
												<div class="modal-action">
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
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
					<tfoot>
					</tfoot>
				</table>
			</div>
		</div>
	);
}
