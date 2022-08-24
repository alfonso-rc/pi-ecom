import axios from "axios";
import Logo from "../ECOM-10_2.png";
import { useState } from "react";

export default function Example() {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
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
  }

  async function submitData(e) {
    e.preventDefault();
    let response = (await axios.post("http://localhost:3001/user", user)).data;
    localStorage.setItem('token', response.token);
    alert('New user successfully created');
    console.log(response);

    setUser({
        name: "",
        lastname: "",
        address: "",
        mail: "",
        userName: "",
        password: "",    
    });
  }

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
                onChange={handleInputChange}
                value={user.name}
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-6 rounded-md"
                placeholder="Name"
              />
            </div>

            <div>
              <input
                name="lastname"
                onChange={handleInputChange}
                value={user.lastname}
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-6 rounded-md"
                placeholder="Lastname"
              />
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
