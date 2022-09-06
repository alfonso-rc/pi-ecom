import React from "react";
import SideBar from "../SideBar";
import NavBarAdmin from "../../NavBarAdmin";
import Footer from "../../Footer";
let user = sessionStorage;

export default function Admin() {
	return (
		<div>
			<NavBarAdmin />
			<div className="flex min-h-screen">
				<SideBar />
				<div className="flex mx-auto my-2.5">
					<h2 className="decoration-black	 text-2xl ">
						¡Hola!
						{` ${
							user.name[0].toUpperCase() + user.name.substring(1)
						} `}
						bienvenido al administrador del sitio
					</h2>
				</div>
			</div>
			<Footer />
		</div>
	);
}
