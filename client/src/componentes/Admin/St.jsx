import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import SideBarAdmin from "./SideBarAdmin";
import StArticle from "../Admin/Pages/StGraphics/StArticle";
import StArtPrecio from "../Admin/Pages/StGraphics/StArtPrecio";
import StArtStock from "../Admin/Pages/StGraphics/StStock";
import {Link} from "react-router-dom";
import NavBarAdmin from "../NavBarAdmin";
import Footer from "../Footer";

export default function St() {
	return (
		<div className="m-0 p-0 text-black font-Work">
			<NavBarAdmin />
			<div className="grid " style={{gridTemplateColumns:"14% 84%"}}>
			<SideBarAdmin  />
			<div>
			<h2 className="decoration-gray-500 text-2xl">
				<br />
				Da click en las opciones de Precio, Rating o Disponibilidad
				<br />
			</h2>
			<div className="flex flex-row flex-wrap justify-center ">
				<div className="collapse  w-96 h-96 bg-red transition delay-100 hover:scale-105">
					<input type="checkbox"/>
					<div className="collapse-title text-2xl ">
						 <button className="border-b-2  border-primary ">Medicion por Precio</button>
					</div>
					<div className="collapse-content">
						<StArtPrecio />
					</div>
				</div>
				<div className="collapse  w-96 h-96 bg-red transition delay-100 hover:scale-105">
					<input type="checkbox" />
					<div className="collapse-title text-2xl ">
						<button className="border-b-2  border-primary ">Medicion por Rating</button>
					</div>
					<div className="collapse-content">
						<StArticle />
					</div>
				</div>
				<div className="collapse  w-96 h-96 bg-red transition delay-100 hover:scale-105">
					<input type="checkbox" />
					<div className="collapse-title text-2xl ">
						<button className="border-b-2  border-primary">Medicion por Disponibilidad</button>
					</div>
					<div className="collapse-content">
						<StArtStock />
					</div>
				</div>
			</div>
			</div>
			</div>
			<div className="pt-16">
				<Footer />
			</div>
		</div>
	);
}