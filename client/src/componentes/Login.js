import Logo from "../imagenes/logo-ecom.png";
import logoGoogle from "../imagenes/google.png";
import axios from "axios";
import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import Swal from "sweetalert2";

function validate(user) {
	let errors = {};
	if (!user.mail) {
		errors.mail = "Se necesita poner un mail";
	}
	if (!user.password) {
		errors.password = "Se necesita una password";
	}
	return errors;
}

export default function Example() {
	const history = useHistory();
	const [errors, setErrors] = useState({});
	const [user, setUser] = useState({
		mail: "",
		password: "",
	});
	const BASE_URL = process.env.REACT_APP_API_URL;

	function handleInputChange(e) {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...user,
				[e.target.name]: e.target.value,
			})
		);
	}

	async function submitData(e) {
		e.preventDefault();
		if (
			!Object.getOwnPropertyNames(errors).length &&
			user.password &&
			user.mail
		) {
			const USER_LOGIN =
				process.env.NODE_ENV === "production"
					? BASE_URL + "/user/login"
					: "http://localhost:3001/user/login";
			let response = (await axios.post(USER_LOGIN, user)).data;

			if (response.error) {
				Swal.fire({
					text: `${response.error}`,
					icon: "error",
				}).then((response) => {
					if (response) {
						setUser({
							mail: "",
							password: "",
						});
					}
				});
			} else {
				setUser({
					mail: "",
					password: "",
				});

				sessionStorage.clear();
				for (const item in response) {
					sessionStorage.setItem(item, response[item]);
				}

				Swal.fire({
					text: "Sesión iniciada",
					icon: "success",
				}).then((response) => {
					if (response) history.push("/home");
				});
			}
		} else {
			alert("Faltan datos para ingresar");
		}
	}

	const googleAuth = () => {
		const USER_LOGIN_GOOGLE =
			process.env.NODE_ENV === "production"
				? BASE_URL + "/auth/google/callback"
				: "http://localhost:3001/auth/google/callback";
		window.open(USER_LOGIN_GOOGLE, "_self");
	};

	return (
		<>
			<div className="flex min-h-full justify-center pt-44">
				<div className="bg-white max-w-md w-full space-y-8 pt-20 pb-24 px-14 rounded-md border border-indigo-400">
					<div className="mb-20">
						<img
							className="mx-auto justify-center w-52"
							src={Logo}
							alt="Workflow"
						/>
					</div>

					<form
						onSubmit={submitData}
						className="mt-8 space-y-6 mb-20"
						action="#"
						method="POST"
					>
						<input
							type="hidden"
							name="remember"
							defaultValue="true"
						/>

						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label
									htmlFor="email-address"
									className="sr-only"
								>
									Email address
								</label>
								<input
									id="email-address"
									name="mail"
									onChange={handleInputChange}
									value={user.mail}
									type="email"
									autoComplete="email"
									required
									className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Correco electrónico"
								/>
								{errors.mail && (
									<p>
										<strong>{errors.mail}</strong>
									</p>
								)}
							</div>

							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									onChange={handleInputChange}
									value={user.password}
									type="password"
									autoComplete="current-password"
									required
									className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Contraseña"
								/>
								{errors.password && (
									<p>
										<strong>{errors.password}</strong>
									</p>
								)}
							</div>
						</div>

						<div className="text-sm flex items-center">
							<div className="inline">
								{/* <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label> */}
								<span className="ml-1 font-medium text-gray-700">
									¿No eres usuario registrado?
								</span>
							</div>

							<div className="inline">
								<Link to="/newUser">
									<h3 className="ml-3 font-bold text-indigo-600 hover:text-indigo-500 cursor-pointer">
										Crea aquí tu cuenta
									</h3>
								</Link>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10"
							>
								<span className="absolute left-0 inset-y-0 flex items-center pl-3">
									{/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
								</span>
								Iniciar sesión
							</button>

							<button
								className="group relative w-auto flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-8 mx-auto"
								type="submit"
								onClick={googleAuth}
							>
								<img
									className="rounded w-7 mr-3"
									src={logoGoogle}
									alt="google icon"
								/>
								Inicia sesión con google
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
