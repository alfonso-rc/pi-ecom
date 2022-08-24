import axios from "axios";
import Logo from "../ECOM-10_2.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {registerUser} from "../store/actions"
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
  if (!user.address) {
    errors.address = 'Se necesita añadir una direccion';
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
  if (!user.password) {
    errors.password = 'Se necesita una contraseña de usuario';
  }
  return errors;
}


export default function Example() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    address: "",
    mail: "",
    userName: "",
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
    if (!Object.getOwnPropertyNames(errors).length && user.name && user.lastName && user.address && user.mail && user.userName && user.password) {
    dispatch(registerUser(user));
    alert('New user successfully created');
    setUser({
      name: "",
      lastName: "",
      address: "",
      mail: "",
      userName: "",
      password: "",
    });
    }
    else alert('Faltan datos para crear');    
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">

        <div>
          <img
            className="mx-auto h-32 justify-center w-auto"
            src={Logo}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">New user</h2>
        </div>

        <form
          onSubmit={submitData}
          className="mt-8 space-y-6 rounded-md"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />

          <div className="rounded-md shadow-sm -space-y-px">

            <div>
              <input
                name="name"
                onChange={e =>handleInputChange(e)}
                value={user.name}
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-6 rounded-md"
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
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-6 rounded-md"
                placeholder="Last name"
              />
              {errors.lastname && (
                <p><strong>{errors.lastName}</strong></p>
              )}
            </div>

            <div>
              <input
                name="address"
                onChange={handleInputChange}
                value={user.address}
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-6 rounded-md"
                placeholder="Address"
              />
              {errors.address && (
                <p><strong>{errors.address}</strong></p>
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
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-6 rounded-md"
                placeholder="Email"
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
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-6 rounded-md"
                placeholder="User name"
              />
              {errors.userName && (
                <p><strong>{errors.userName}</strong></p>
              )}
            </div>

            <div>
              <input
                name="password"
                onChange={handleInputChange}
                value={user.password}
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-6 rounded-md"
                placeholder="Password"
              />
              {errors.password && (
                <p><strong>{errors.password}</strong></p>
              )}
            </div>

          </div>

          <div>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Register
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}
