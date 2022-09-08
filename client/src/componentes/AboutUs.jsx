import Footer from "./Footer";
import NavBarDetail from "./NavBarDetail";
import {BsLinkedin} from "react-icons/bs";
import logo from "../imagenes/logo-ecom.png";
import CardUs from "./CardUs";
export default function AboutUs() {
	return (
		<div>
			<div>
				<NavBarDetail />
			</div>
			<div className="bg-slate-100 min-h-screen pt-10">
				<div className="hero ">
					<title className="text-5xl font-bold text-black ">
						SOBRE NOSOTROS
					</title>
					{/* <p>
         Ecom es una empresa de venta de articulos tecnologicos ficticia con el fin de desarrollar nuestras habilidades aprendidas en la academia de Henry. El proyecto es grupal con la finalidad de poder acercarnos a como vendria siendo a un trabajo. 
         Este trabajo deja mostrar la logica y la forma que se veria un E-COMERCE. 
          </p> */}
					<div>
						<div className="hero-content flex flex-col flex-wrap md:grid sm:grid-cols-2 text-black font-Work">
							<p className="flex py-6 text-start text-sm sm:text-base md:text-lg">
								Ecom es un Ecommerce de artículos de tecnología
								desarrollada sobre la premisa de una simulacion
								de un proyecto grupal en un ambito laboral, con
								el cual quisimos sacar nuestro mayor provecho de
								nuestros conocimientos aprendidos en la academia
								de Henry. Es por eso que nuestro modelo se basa
								en un Ecommerce ya que tiene funcionalidades
								tanto como en el front, como en el back igual de
								complejas y implementar nuevas tecnologias
								aprendidas en el trayecto. Nos asociamos con
								nuestros compañeros de trabajo para diseñar los
								primeros productos electronicos para clientes.
								Esto para crear un mercado tecnologico con
								opciones mejores y estilizado lo mas amigable
								para el cliente. De forma de practica pudimos
								demostrar en lo que ustedes ven ahora mismo como
								nuestro Proyecto Final o como el Primero de
								muchos.
							</p>
							<img
								className="w-60 sm:w-full rounded-lg shadow-2xl place-self-center"
								alt="hero"
								src={logo}
							/>
						</div>
					</div>
				</div>
				<div className="m-4 px-4">
					<h1 className="flex justify-start font-bold text-black font-Work p-10 mx-10">
						Esto no se podria haber desarrollado sin el esfuerzo de:
					</h1>
					<div className="pb-8 mb-4 pt-4">
						<CardUs />
					</div>
				</div>
				<div className="pt-8">
					<Footer />
				</div>
			</div>
		</div>
	);
}
