import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {
	getOffers,
	deleteOffer,
    validityOffer,
    editOffer,
} from "../../../../src/store/actions/index.js";
import s from "../Pages/articleList2.module.css";

export default function OfferList() {
    const allArticle = useSelector((state) => state.articles);
	// const allOffers = useSelector((state) => state.offers);
    const [allOffers, setAllOffers] = useState([]);
    const [totalPrecio, settotalPrecio] = useState(0);
	let dispatch = useDispatch();
	const refreshPage = () => {
		window.location.reload();
	};

	useEffect(async() => {
		const ofertas = (await axios.get('http://localhost:3001/offer')).data;
        setAllOffers(ofertas);
        console.log(ofertas)
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
						</tr>
					</thead>
					<tbody>
						{allOffers?.map((ofr) => {
                             priceFinal= Math.ceil(ofr.price - ((ofr.price * ofr.porcent)/100))
							return (
								<tr>
									<td>{ofr.id}</td>
                                    
									<td>{ofr.title}</td>
									<td>$ {ofr.price}</td>
									<td>{ofr.porcent} %</td>                
									<td>$ {priceFinal}</td>
									<td>{ofr.stock} </td>
                                    
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
									<td>
										<a
											href="#my-modal-2"
											class="btn btn-error btn-xs"
										>
											Borrar
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
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
}

