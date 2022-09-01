import Logo from "../../imagenes/logo-ecom.png";
import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import imageDefault from '../../imagenes/userImage.png';

function validate(user) {
  let errors = {};
//   if (!user.name) {
//     errors.name = 'Se necesita poner un nombre';
//   }
//   else if (user.name.length > 30) {
//     errors.name = 'Ese es un nombre demasiado largo.';
//   }
//   else if (!isNaN(Number(user.name))) {
//     errors.name = 'El nombre debe tener letras';
//   }
//   if (!user.lastName) {
//     errors.lastName = 'Se necesita un apellido';
//   }
//   else if (user.lastName.length > 30) {
//     errors.lastName = 'Ese es un apellido demasiado largo.';
//   }
//   else if (!isNaN(Number(user.lastName))) {
//     errors.lastName = 'El apellido debe tener letras';
//   }
//   if (!user.mail) {
//     errors.mail = 'Se necesita una direccion de correo electronico para continuar';
//   }
//   // expresion regular para validar email
//   if (!user.userName) {
//     errors.userName = 'Se necesita un nombre de usuario';
//   }
//   else if (user.userName.length > 30) {
//     errors.userName = 'Ese es un usuario demasiado largo.';
//   }
//   else if (!isNaN(Number(user.userName))) {
//     errors.userName = 'El usuario debe tener letras';
//   }
//   else if (!user.address) {
//     errors.address = 'El campo no puede estar vacio';
//   }
//   if (!user.password) {
//     errors.password = 'Se necesita una contraseña de usuario';
//   }
  return errors;
}

function InfoUser() {
    let useri = sessionStorage;
    let imagen = useri.image === "null" ? imageDefault : useri.image;
    let resid = useri.address === "null" ? "Aún no ingresas tu dirección de residencia" : useri.address;

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
  
    const descartar = () => {
      history.push("/home")
    };  

  return (
    <>
      <div className="flex min-h-full px-20 py-24 w-full">
        <div className="bg-white max-w-full w-full space-y-8 pt-10 pb-16 px-14 rounded-md border border-indigo-400">
          <div className="mb-10 flex justify-start items-center text-center">
            <img
              className="w-40 h-14"
              src={Logo}
              alt="Workflow"
            />
            <span className="text-3xl tracking-tight font-bold text-gray-700 ml-14">
              {useri.userName}
            </span>
            <div className="ml-8">
                <img className="rounded-full w-14" src={imagen} alt="profile" />
            </div>
          </div>

          <form
            onSubmit={submitData}
            className="mt-8 space-y-6 mb-14"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />

            <div className="rounded-md shadow-sm -space-y-px">
              <div className="flex justify-start items-center">
                <label className="w-32 mr-4 text-gray-700" htmlFor="user-name">Nombre</label>
                <input
                  id="user-name"
                  name="name"
                  onChange={handleInputChange}
                  value={user.name}
                  type="text"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={useri.name}
                />
                {errors.name && (
                  <p>
                    <strong>{errors.name}</strong>
                  </p>
                )}
              </div>

              <div className="flex justify-start items-center">
                <label className="w-32 ml-0 pl-0 mr-4 text-gray-700" htmlFor="user-lastName">Apellido</label>
                <input
                  id="user-lastName"
                  name="lastName"
                  onChange={handleInputChange}
                  value={user.lastName}
                  type="text"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={useri.lastName}
                />
                {errors.lastName && (
                  <p>
                    <strong>{errors.lastName}</strong>
                  </p>
                )}
              </div>

              <div className="flex justify-start items-center">
                <label className="w-32 mr-4 text-gray-700" htmlFor="user-mail">Correo</label>
                <input
                  id="user-mail"
                  name="mail"
                  onChange={handleInputChange}
                  value={user.mail}
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={useri.mail}
                />
                {errors.mail && (
                  <p>
                    <strong>{errors.mail}</strong>
                  </p>
                )}
              </div>

              <div className="flex justify-start items-center">
                <label className="w-32 mr-4 text-gray-700" htmlFor="user-userName">Usuario</label>
                <input
                  id="user-userName"
                  name="userName"
                  onChange={handleInputChange}
                  value={user.userName}
                  type="text"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={useri.userName}
                />
                {errors.userName && (
                  <p>
                    <strong>{errors.userName}</strong>
                  </p>
                )}
              </div>

              <div className="flex justify-start items-center">
                <label className="w-32 mr-4 text-gray-700" htmlFor="user-address">Residencia</label>
                <input
                  id="user-address"
                  name="address"
                  onChange={handleInputChange}
                  value={user.address}
                  type="text"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={resid}
                />
                {errors.address && (
                  <p>
                    <strong>{errors.address}</strong>
                  </p>
                )}
              </div>

              <div className="flex justify-start items-center">
                <label className="w-32 mr-4 text-gray-700" htmlFor="user-password">Residencia</label>
                <input
                  id="user-password"
                  name="password"
                  onChange={handleInputChange}
                  value={user.password}
                  type="password"
                  required
                  className="bg-slate-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {errors.password && (
                  <p>
                    <strong>{errors.password}</strong>
                  </p>
                )}
              </div>
            </div>

            <div className="flex place-content-around">
              <button
                type="submit"
                className="w-40 group relative justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10"
              >
                Guardar cambios
              </button>

              <button
                className="w-40 group relative justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10"
                type="submit"
                onClick={descartar}
              >
                Descartar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default InfoUser;
