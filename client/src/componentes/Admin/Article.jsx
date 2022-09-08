import React from "react";
import SideBarAdmin from "./SideBarAdmin";
import ArticleList from "../Admin/Pages/ArticleList";
import {Link} from "react-router-dom";
import NavBarAdmin from "../NavBarAdmin";
import Footer from "../Footer";

export default function Article({
	id,
	title,
	detail,
	marca,
	modelo,
	ram,
	so,
	color,
	pantalla,
	stock,
	price,
}) {
	return (
		<div className="m-0 p-0 font-Work">
			<NavBarAdmin />
			<div className="flex">
				<SideBarAdmin />
				<div className="overflow-scroll w-4/5 m-8 font-Work">
					<ArticleList />
				</div>
			</div>
			<Link to="/admin/articulos/create">
				<button className="btn btn-accent btn-lg">Agregar nuevo articulo</button>
			</Link>
			<div className="pt-16">
				<Footer />
			</div>
		</div>
	);
}
