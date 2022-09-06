import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {
	getUsers,
	deleteUser,
	banUser,
} from "../../../../src/store/actions/index.js";
import s from "../Pages/articleList2.module.css";

export default function UserList() {
	const allUsers = useSelector((state) => state.users);
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	function handleClickDelete(id) {
		try {
			dispatch(deleteUser(id));
			allUsers = allUsers.filter((a) => a.id !== id);
			alert(`El Usuario con id: ${id} fue Eliminado!`);
		} catch (error) {
			console.log(error);
		}
	}

	function handleClickBaned(id) {
		try {
			dispatch(banUser(id));
			alert("Hecho!");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="">
			<br />
			<div className="">
				<table className={s.table}>
					<thead>
						<tr>
							<th>Id</th>
							<th>Last Name</th>
							<th>Address</th>
							<th>Mail</th>
							<th>UserName</th>
							<th>Password</th>
							<th>Coins</th>
							<th>User Type</th>
							<th>Ban</th>
							<th>Action</th>
							<th>Action</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{allUsers?.map((usr) => {
							return (
								<tr>
									<td>{usr.id}</td>
									<td>{usr.name}</td>
									<td>{usr.lastName}</td>
									<td>{usr.address}</td>
									<td>{usr.mail}</td>
									<td>{usr.password}</td>
									<td>{usr.coins}</td>
									<td>
										{usr.userType == 1
											? "ordinario"
											: "Admin"}
									</td>
									<td>{usr.ban}</td>
									<th>
										{usr.disable ? (
											<div>
												<label className="swap">
													<input type="checkbox" />
													<div
														className="swap-on btn btn-success btn-xs"
														onClick={() =>
															handleClickBaned(
																usr.id
															)
														}
													>
														NoBan
													</div>
													<div
														className="swap-off btn btn-error btn-xs btn-active "
														onClick={() =>
															handleClickBaned(
																usr.id
															)
														}
													>
														Ban
													</div>
												</label>
											</div>
										) : (
											<div>
												<label className="swap">
													<input type="checkbox" />
													<div
														className="swap-off btn btn-error btn-xs btn-active"
														onClick={() =>
															handleClickBaned(
																usr.id
															)
														}
													>
														Banned
													</div>
													<div
														className="swap-on btn btn-success btn-xs"
														onClick={() =>
															handleClickBaned(
																usr.id
															)
														}
													>
														NoBanned
													</div>
												</label>
											</div>
										)}
									</th>
									<th>
										<Link
											to={`/admin/users/edit/${usr.id}`}
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
													El Usuario se eliminara de
													manera permanente!
												</h3>
												<div class="modal-action">
													<button
														className="btn btn-error btn-xs"
														onClick={() =>
															handleClickDelete(
																usr.id
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
							<th>id</th>
							<th>Last Name</th>
							<th>Address</th>
							<th>Mail</th>
							<th>UserName</th>
							<th>Password</th>
							<th>Coins</th>
							<th>User Type</th>
							<th>Ban</th>
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
