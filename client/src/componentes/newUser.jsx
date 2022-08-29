import Logo from "../imagenes/logo-ecom.png";
import logoGoogle from "../imagenes/google.png";
import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

function validate(user) {
  let errors = {};
  if (!user.name) {
    errors.name = 'Se necesita poner un nombre';
  }
  else if (user.name.length > 30) {
    errors.name = 'Ese es un nombre demasiado largo.';
  }
  else if (!isNaN(Number(user.name))) {
    errors.name = 'El nombre debe tener letras';
  }
  if (!user.lastName) {
    errors.lastName = 'Se necesita un apellido';
  }
  else if (user.lastName.length > 30) {
    errors.lastName = 'Ese es un apellido demasiado largo.';
  }
  else if (!isNaN(Number(user.lastName))) {
    errors.lastName = 'El apellido debe tener letras';
  }
  if (!user.mail) {
    errors.mail = 'Se necesita una direccion de correo electronico para continuar';
  }
  // expresion regular para validar email
  if (!user.userName) {
    errors.userName = 'Se necesita un nombre de usuario';
  }
  else if (user.userName.length > 30) {
    errors.userName = 'Ese es un usuario demasiado largo.';
  }
  else if (!isNaN(Number(user.userName))) {
    errors.userName = 'El usuario debe tener letras';
  }
  else if (!user.address) {
    errors.address = 'El campo no puede estar vacio';
  }
  if (!user.password) {
    errors.password = 'Se necesita una contraseña de usuario';
  }
  return errors;
}

export default function Example() {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    mail: "",
    userName: "",
    address: "",
    password: "",
  });

  function handleInputChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
      ...user,
      [e.target.name]: e.target.value,
    }))
  }

  async function submitData(e) {
    e.preventDefault();
    if (!Object.getOwnPropertyNames(errors).length && user.name && user.lastName && user.mail && user.userName && user.address && user.password) {
      let response = (await axios.post("http://localhost:3001/user/create", user)).data;
      if (response.error) {
        alert(response.error);
        setUser({
          name: "",
          lastName: "",
          mail: "",
          userName: "",
          address: "",
          password: "",
        });
      }
      else {
        setUser({
          name: "",
          lastName: "",
          mail: "",
          userName: "",
          address: "",
          password: "",
        });

        sessionStorage.clear();
        for (const item in response) {
          sessionStorage.setItem(item, response[item]);
        }

        alert('New user successfully created');
        history.push('/home');
      }
    }
    else alert('Faltan datos para crear');    
  };

  const googleAuth = () => {
		window.open("http://localhost:3001/auth/google/callback", "_self" );
	};

  return (
    <>
      <div className="flex min-h-full justify-center pt-28">
        <div className="bg-white max-w-md w-full space-y-8 pt-16 pb-16 px-14 rounded-md">

          <div className="mb-10">
            <img
              className="mx-auto justify-center w-52"
              src={Logo}
              alt="Workflow"
            />
            <h3 className="mt-10 text-center text-3xl tracking-tight font-bold text-gray-700">
              ¡create new user!
            </h3>
          </div>

          <form onSubmit={submitData} className="mt-8 space-y-6 mb-14" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />

            <div className="rounded-md shadow-sm -space-y-px">
              
              <div>
                <input
                  name="name"
                  onChange={handleInputChange}
                  value={user.name}
                  type="text"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
                {errors.name && (
                  <p><strong>{errors.name}</strong></p>
                )}
              </div>

              <div>
                <input
                  name="lastName"
                  onChange={handleInputChange}
                  value={user.lastName}
                  type="text"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p><strong>{errors.lastName}</strong></p>
                )}
              </div>

              <div>
                <input
                  name="mail"
                  onChange={handleInputChange}
                  value={user.mail}
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {errors.mail && (
                  <p><strong>{errors.mail}</strong></p>
                )}
              </div>

              <div>                
                <input
                  name="userName"
                  onChange={handleInputChange}
                  value={user.userName}
                  type="text"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="User name"
                />
                {errors.userName && (
                  <p><strong>{errors.userName}</strong></p>
                )}
              </div>

              <div>                
                <input
                  name="address"
                  onChange={handleInputChange}
                  value={user.address}
                  type="text"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Address"
                />
                {errors.address && (
                  <p><strong>{errors.address}</strong></p>
                )}
              </div>

              <div>
                <input
                  name="password"
                  onChange={handleInputChange}
                  value={user.password}
                  type="password"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {errors.password && (
                  <p><strong>{errors.password}</strong></p>
                )}
              </div>

            </div>

            
            <div className="text-sm flex items-center">

              <div className="inline">
                <span className="ml-1 font-medium text-gray-700">
                  You have an account?
                </span>
              </div>

              <div className="inline">
                <Link to='/login'>
                  <h3 className="ml-3 font-bold text-indigo-600 hover:text-indigo-500 cursor-pointer">
                    Sign in
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
                Sign up
              </button>

              <button
                className="group relative w-auto flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-8 mx-auto"
                type="submit"
                onClick={googleAuth}                
              >
                <img className="rounded w-7 mr-3" src={logoGoogle} alt="google icon"/>
                Sign up with google
              </button>

            </div>

          </form>

        </div>
      </div>
    </>
  )
};
