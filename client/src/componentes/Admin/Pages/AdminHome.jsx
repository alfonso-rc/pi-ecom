import React from "react";
import SideBarAdmin from "../SideBarAdmin";
import Logo from "../../../ECOM-10_2.png";
import NavBarAdmin from "../../NavBarAdmin";
import Footer from "../../Footer";
import {useSelector} from "react-redux";
let user = sessionStorage;

export default function Admin() {
	const usuario = useSelector((state) => state.users);
	return (
		<div>
			<NavBarAdmin />
			<div className="flex font-Work">
				<SideBarAdmin />
				<div className="flex flex-wrap mt-6 justify-center">
					{user.name ? (
						<h2 className="text-black text-4xl pt-6">
							¡Hola!{" "}
							{user.name[0].toUpperCase() +
								user.name.substring(1)}{" "}
							Bienvenido al Administrador del sitio
						</h2>
					) : (
						<h2></h2>
					)}
					<section className="text-gray-800 body-font font-Work ">
						<div className="container px-5 ">
							<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
								<p className="lg:w-1/2 w-full leading-relaxed text-gray-800">
									En el panel de la izquierda podrá acceder a
									todas las funcionalidades que poseé el admin
									para poder asi, organizar los datos del
									negocio.
								</p>
							</div>
							<div className="flex flex-wrap -m-4">
								<div className="xl:w-1/3 md:w-1/2 p-4">
									<div className="border border-gray-200 p-6 rounded-lg">
										<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-primary mb-4">
											<svg
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												className="w-6 h-6"
												viewBox="0 0 24 24"
											>
												<circle
													cx="6"
													cy="6"
													r="3"
												></circle>
												<circle
													cx="6"
													cy="18"
													r="3"
												></circle>
												<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
											</svg>
										</div>
										<h2 className="text-lg text-gray-900 font-bold title-font mb-2">
											Articulos
										</h2>
										<p className="leading-relaxed text-base">
											En el apartado de articulos puede
											habilitar y deshabilitar los
											productos, editarlos, eliminarlos y
											crear uno nuevo.
										</p>
									</div>
								</div>
								<div className="xl:w-1/3 md:w-1/2 p-4">
									<div className="border border-gray-200 p-6 rounded-lg">
										<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-primary mb-4">
											<svg
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												className="w-6 h-6"
												viewBox="0 0 24 24"
											>
												<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
												<circle
													cx="12"
													cy="7"
													r="4"
												></circle>
											</svg>
										</div>
										<h2 className="text-lg text-gray-900 title-font mb-2 font-bold">
											Usuarios
										</h2>
										<p className="leading-relaxed text-base">
											En el apartado de usuarios puede
											banear y desbanear cuentas, editar
											sus datos y borrarlos de la base de
											datos.
										</p>
									</div>
								</div>
								<div className="xl:w-1/3 md:w-1/2 p-4">
									<div className="border border-gray-200 p-6 rounded-lg ">
										<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-primary mb-4">
											<svg
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												className="w-6 h-6"
												viewBox="0 0 24 24"
											>
												<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
											</svg>
										</div>
										<h2 className="text-lg text-gray-900 title-font mb-2 font-bold">
											Ofertas
										</h2>
										<p className="leading-relaxed text-base h10">
											En el apartado Ofertas puedes
											manejar las notificaciones por
											correo que se envian al usuarios
											cuando se suscriben.
										</p>
									</div>
								</div>
								<div className="xl:w-1/3 md:w-1/2 p-4">
									<div className="border border-gray-200 p-6 rounded-lg">
										<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-primary mb-4">
											<svg
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												className="w-6 h-6"
												viewBox="0 0 24 24"
											>
												<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
											</svg>
										</div>
										<h2 className="text-lg text-gray-900 font-bold title-font mb-2">
											Estadísticas
										</h2>
										<p className="leading-relaxed text-base">
											En el apartado de estadísticas puede
											visualizar graficos correspondientes
											a mediciones por precio, rating y
											disponibilidad.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<Footer />
		</div>
	);
}
