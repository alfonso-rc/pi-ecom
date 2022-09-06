import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {
	getOffers,
	deleteOffer,
    validityOffer,
    editOffer,
} from "../../../../src/store/actions/index.js";
import s from "../Pages/articleList2.module.css";

export default function OfferList() {

	const allOffers = useSelector((state) => state.offers);
    const [totalPrecio, settotalPrecio] = useState(0);
	let dispatch = useDispatch();
	const refreshPage = () => {
		window.location.reload();
	};

	useEffect(() => {
		dispatch(getOffers());
	}, []);

	function handleClickDelete(id) {
		try {
			dispatch(deleteOffer(id));
			allOffers = allOffers.filter((offer) => offer.id !== id);
			alert(`La oferta se Elimino!`);
			refreshPage();
		} catch (error) {
			console.log(error);
		}
	}

	function handleClickValidity(id) {
		try {
			dispatch(validityOffer(id));
			alert("Hecho!");
			refreshPage();
		} catch (error) {
			console.log(error);
		}
	};
    let priceFinal=0;

	return (
		<div>
			<div>
				<table className={s.table}>
					<thead>
						<tr>
							<th>Id</th>
							<th>Articulo</th>
							<th>PrecioOriginal</th>
							<th>Porcentaje</th>
							<th>PrecioFinal</th>
							<th>Stock</th>
							<th>Vigencia</th>
							<th>Action</th>
							<th>Action</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{allOffers?.map((ofr) => {
                             priceFinal= (ofr.articles[0]?.price - ((ofr.articles[0]?.price * ofr.porcent)/100))
							return (
								<tr>
									<td>{ofr.id}</td>
									<td>{ofr.articles[0]?.title}</td>
									<td>$ {ofr.articles[0]?.price}</td>
									<td>{ofr.porcent} %</td>                
									<td>$ {priceFinal}</td>
									<td>{ofr.articles[0]?.stock} </td>
									<td>{ofr.expiration}</td>
									<th>
										{!ofr.validity ? (
											<div>
												<button
													className="btn btn-success btn-xs"
													onClick={() =>
														handleClickValidity(ofr.id)
													}
												>
													En Oferta
												</button>
											</div>
										) : (
											<div>
												<button
													className="btn btn-error btn-xs"
													onClick={() =>
														handleClickValidity(ofr.id)
													}
												>
													Sin Oferta
												</button>
											</div>
										)}
									</th>
									<th>
										<Link
											to={`/admin/offer/edit/${ofr.id}`}
										>
											<button className="btn btn-info btn-xs">
												Edit
											</button>
										</Link>
									</th>
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
													La oferta se eliminara de
													manera permanente!
												</h3>
												<div class="modal-action">
													<button
														className="btn btn-error btn-xs"
														onClick={() =>
															handleClickDelete(
																ofr.id
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
						<tr>
                            <th>Id</th>
							<th>Articulo</th>
							<th>PrecioOriginal</th>
							<th>Porcentaje</th>
							<th>PrecioFinal</th>
							<th>Stock</th>
							<th>Vigencia</th>
							<th>Action</th>
							<th>Action</th>
							<th>Action</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
}

