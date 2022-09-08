import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {
	getUsers,
	deleteUser,
	banUser,
	typeUser,
} from "../../../../src/store/actions/index.js";
import s from "../Pages/articleList2.module.css";
import Swal from "sweetalert2";

export default function UserList() {
	const allUsers = useSelector((state) => state.users);
	let dispatch = useDispatch();
	
	const refreshPage = () => {
		window.location.reload();
	};
	const history = useHistory();

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	function handleClickDelete(id) {
		try {
			Swal.fire({
				text: "El usuario se eliminará permanentemente. ¿Desea continuar?",
				icon: "warning",
				showDenyButton: true,
				denyButtonText: "Cancelar",
				denyButtonColor: "red",
				confirmButtonText: "Aceptar"
			}).then(response => {
				if (response.isDenied) history.push("/admin/usuarios");
				else if (response.isConfirmed) {
					Swal.fire({
						text: "Usuario eliminado",
						icon: "success"
					}).then(response => {
						if (response) {
							dispatch(deleteUser(id));
							//allUsers = allUsers.filter((a) => a.id !== id);
							refreshPage();
						}
					});
				}
			})
			
		} catch (error) {
			console.log(error);
		}
	}

	function handleClickTypeUser(id) {
		try {
			Swal.fire({
				text: "Tipo de usuario modificado",
				icon: "success"
			}).then(response => {
				if (response) {
					dispatch(typeUser(id));
					refreshPage();
				}
			});
			
		} catch (error) {
			console.log(error);
		}
	}

	function handleClickBaned(id) {
		try {
			Swal.fire({
				text: "Cambios realizados",
				icon: "success"
			}).then(response => {
				if (response ){
					dispatch(banUser(id));
					refreshPage();
				}
			});

		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<div>
				<table className={s.table}>
					<thead>
						<tr>
							<th>Id</th>
							<th>Nombre</th>
							<th>Dirección</th>
							<th>Correo</th>
							<th>Usuario</th>
							<th>Tipo</th>
							<th>Bloqueo</th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{allUsers?.map((usr) => {
							return (
								<tr>
									<td>{usr.id}</td>
									<td>{usr.name}</td>
									<td>{usr.address}</td>
									<td>{usr.mail}</td>
									<td>{usr.userName}</td>
									<td>
										{usr.userType == 1
											? "Ordinario"
											: "Admin"}
									</td>
									<td>{usr.ban}</td>
									<td>
										{!usr.ban ? (
											<div>
												<button
													className="btn btn-success btn-xs"
													onClick={() =>
														handleClickBaned(usr.id)
													}
												>
													No baneado
												</button>
											</div>
										) : (
											<div>
												<button
													className="btn btn-error btn-xs"
													onClick={() =>
														handleClickBaned(usr.id)
													}
												>
													Baneado
												</button>
											</div>
										)}
									</td>
									<td>
										{usr.userType === "1" ? (
											<div>
												<button
													className="btn btn-error btn-xs"
													onClick={() =>
														handleClickTypeUser(
															usr.id
														)
													}
												>
													Admin
												</button>
											</div>
										) : (
											<div>
												<button
													className="btn btn-success btn-xs"
													onClick={() =>
														handleClickTypeUser(
															usr.id
														)
													}
												>
													Ordinario
												</button>
											</div>
										)}
									</td>
									<td>
										<button
											onClick={() => handleClickDelete( usr.id )}
											href="#my-modal-2"
											className="btn btn-error btn-xs"
										>
											Eliminar
										</button>
										{/* <div className="modal" id="my-modal-2">
											<div className="modal-box">
												<h3 className="font-bold">
													El Usuario se eliminara de
													manera permanente!
												</h3>
												<div className="modal-action">
													<button
														className="btn btn-error btn-xs"
														onClick={() => handleClickDelete( usr.id )}
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
					<tfoot>
						<tr>
							<th>id</th>
							<th>Nombre</th>
							<th>Dirección</th>
							<th>Correo</th>
							<th>Usuario</th>
							<th>Tipo</th>
							<th>Bloqueo</th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
}
