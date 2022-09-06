import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import SideBar from "./SideBar";
import StArticle from "../Admin/Pages/StGraphics/StArticle";
import StArtPrecio from "../Admin/Pages/StGraphics/StArtPrecio";
import StArtStock from "../Admin/Pages/StGraphics/StStock";
import {Link} from "react-router-dom";
import NavBarAdmin from "../NavBarAdmin";
import Footer from "../Footer";

export default function St() {
	return (
		<div className="m-0 p-0">
			<NavBarAdmin />
			<h2 className="decoration-gray-500 text-2xl">
				<br />
				Da click en las opciones de Precio, Rating o Disponibilidad
				<br />
			</h2>

			<div className="flex ">
				<SideBar />

				<div className="collapse  w-96 h-96 bg-red ">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium">
						Medicion por Precio
					</div>
					<div className="collapse-content">
						<StArtPrecio />
					</div>
				</div>
				<div className="collapse  w-96 h-96 bg-red">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium">
						Medicion por Rating
					</div>
					<div className="collapse-content">
						<StArticle />
					</div>
				</div>
				<div className="collapse  w-96 h-96 bg-red">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium">
						Medicion por Disponibilidad
					</div>
					<div className="collapse-content">
						<StArtStock />
					</div>
				</div>
			</div>
			<div className="pt-16">
				<Footer />
			</div>
		</div>
	);
}
