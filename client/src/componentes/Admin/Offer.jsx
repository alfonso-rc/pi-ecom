import React from "react";
import SideBarAdmin from "./SideBarAdmin";
import OfferList from "./Pages/OfferList";
import {Link} from "react-router-dom";
import NavBarAdmin from "../../componentes/NavBarAdmin";
import Footer from "../Footer";

export default function Offer() {
  return (
		<div className="m-0 p-0 font-Work">
			<NavBarAdmin />
			<div className="flex">
				<SideBarAdmin />
				<div className="overflow-scroll h-96 w-4/5 m-8 font-Work">
					<OfferList />
				</div>
			</div>
			<Link to="/admin/ofertas/create">
				<button class="btn btn-accent btn-lg">Crear Oferta</button>
			</Link>
			<div className="pt-16">
				<Footer />
			</div>
		</div>
  );
}
