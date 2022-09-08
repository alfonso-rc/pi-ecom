import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import SideBarAdmin from "./SideBarAdmin";
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
		<div /* className="m-0 p-0 " */>
			<NavBarAdmin />
			<div className="flex font-Work">
				<SideBarAdmin />
				<div /* 	 */>
					<div>
						<h2 className="text-black text-2xl pb-6 ">
							Administrador de Usuarios
						</h2>
					</div>
					<UserList />
				</div>
			</div>
			<div className="pt-16">
				<Footer />
			</div>
		</div>
	);
}
