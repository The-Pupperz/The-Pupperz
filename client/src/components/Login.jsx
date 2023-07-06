import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth.js";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [Login, { error, data }] = useMutation(LOGIN_USER);

  const history = useHistory();

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      Login({
        variables: { ...formState },
      }).then(({ data }) => {
        if (data && data.login && data.login.token) {
          Auth.login(data.login.token);
          history.push("/home");
        } else {
          console.error('Unexpected response from server:', data);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="w-[350px] mx-auto justify-center py-10">
      <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleInputChange}
            placeholder="Email"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleInputChange}
            placeholder="******************"
          ></input>
          <button
            className="bg-[#A288E3] hover:bg-[#F79764] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
        {/* <div className="flex items-center justify-center">
        </div> */}
      </form>
    </div>
  );
}

export default Login;
