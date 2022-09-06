import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import SideBar from "./SideBar";
import UserList from "../Admin/Pages/UserList";
//import Logo from "../../../../client/src/ECOM-10_2.png";
import {Link} from "react-router-dom";
import NavBarAdmin from "../NavBarAdmin";
import Footer from "../Footer";

export default function User({
	id,
	name,
	lastName,
	address,
	mail,
	userType,
	image,
	ban,
}) {
	return (
		<div className="m-0 p-0">
			<NavBarAdmin />
			<div className="flex">
				<SideBar />
				<div className="overflow-scroll h-96  w-4/5 m-8">
					<div>
						<h2 className="decoration-gray-500 text-2xl">
							Administrador de Usuarios
						</h2>
					</div>
					<UserList />
				</div>
			</div>
			<Link to="/admin/user/create">
				<button class="btn btn-outline btn-accent">Add Article</button>
			</Link>
			<div className="pt-16">
				<Footer />
			</div>
		</div>
	);
}
