import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart} from "../store/actions";
import {BsLinkedin, BsGithub} from "react-icons/bs";
import React from "react";
import juani from "../imagenes/imgNosotros/juani.jpg";
import nico from "../imagenes/imgNosotros/Nico.jpeg";
import mari from "../imagenes/imgNosotros/mari.png";
import carlos from "../imagenes/imgNosotros/carlos.jpg";
import lautaro from "../imagenes/imgNosotros/lauti.jpeg";
import alfonso from "../imagenes/imgNosotros/alfonso.jpeg";
import alejo from "../imagenes/imgNosotros/ale.jpeg";

export default function CardUs({}) {
	const dispatch = useDispatch();

	return (
		<div className="flex flex-row flex-wrap justify-center  gap-10 font-Work">
			<div className="card w-64 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20 ">
				<div className="card-body">
					<h2 className="card-title text-lg">Juan I. Biondi</h2>
					<div className="avatar">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={juani} alt="img not found" />
						</div>
					</div>

					<div className="card-actions">
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://github.com/Juani50"
						>
							<BsGithub />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://www.linkedin.com/in/juan-ignacio-biondi-b628aa21a/"
						>
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>

			<div className="card w-64 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
				<div className="card-body">
					<h2 className="card-title text-lg">Nicolas Lautaro Z.</h2>
					<div className="avatar">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={nico} alt="img not found" />
						</div>
					</div>
					<div className="card-actions justify-end">
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://github.com/nicolaszacarias"
						>
							<BsGithub />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="http://linkedin.com/in/nicol%C3%A1s-lautaro-zacar%C3%ADas-438a98216"
						>
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>
			<div className="card w-64 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
				<div className="card-body">
					<h2 className="card-title text-lg">
						Alejandro Jaramillo S
					</h2>
					<div className="avatar">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={alejo} alt="img not found" />
						</div>
					</div>
					<div className="card-actions justify-end">
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://github.com/alejoyodax"
						>
							<BsGithub />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://www.linkedin.com/in/alejandro-silva-jaramillo-774a3b189"
						>
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>

			<div className="card w-64 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
				<div className="card-body">
					<h2 className="card-title text-lg">Mariana Mercado</h2>
					<div className="avatar">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={mari} alt="img not found" />
						</div>
					</div>
					<div className="card-actions justify-end">
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://github.com/MarMerc"
						>
							<BsGithub />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://www.linkedin.com/in/marianafernandamercado/"
						>
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>

			<div className="card w-64 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
				<div className="card-body">
					<h2 className="card-title text-lg">Carlos Cruz</h2>
					<div className="avatar">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={carlos} alt="img not found" />
						</div>
					</div>
					<div className="card-actions justify-end">
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://github.com/CarlosArte91"
						>
							<BsGithub />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://www.linkedin.com/in/carlos-arturo-cruz-gutierrez-870119204/#"
						>
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>

			<div className="card w-64 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
				<div className="card-body">
					<h2 className="card-title text-lg">Lautaro Retamozo</h2>
					<div className="avatar">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={lautaro} alt="img not found" />
						</div>
					</div>
					<div className="card-actions justify-end">
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://github.com/RetamozoL"
						>
							<BsGithub />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://www.linkedin.com/in/lautaro-ivan-retamozo-152510239/"
						>
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>

			<div className="card w-64 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
				<div className="card-body">
					<h2 className="card-title text-lg">Alfonso Rosas C.</h2>
					<div className="avatar">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={alfonso} alt="img not found" />
						</div>
					</div>
					<div className="card-actions justify-end">
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://github.com/alfonso-rc"
						>
							<BsGithub />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
							href="https://www.linkedin.com/in/jose-alfonso-rosas-caama%C3%B1o75/"
						>
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
