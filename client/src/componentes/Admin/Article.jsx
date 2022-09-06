import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import SideBar from "./SideBar";
import ArticleList from "../Admin/Pages/ArticleList";
import Logo from "../../../../client/src/ECOM-10_2.png";
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
		<div className="m-0 p-0">
			<NavBarAdmin />
			<div className="flex">
				<SideBar />
				<div className="overflow-scroll h-96 w-4/5 m-8">
					<ArticleList />
				</div>
			</div>
			<Link to="/admin/articulos/create">
				<button class="btn btn-outline btn-accent">Add Article</button>
			</Link>
			<div className="pt-16">
				<Footer />
			</div>
		</div>
	);
}
