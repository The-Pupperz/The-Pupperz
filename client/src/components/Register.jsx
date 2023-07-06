import React from 'react'
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../utils/mutations";
import { useHistory } from "react-router-dom";
import Auth from "../utils/auth";



function Register() {
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      password: "",
    });
  
    const [register, { error, data }] = useMutation(REGISTER_USER);
  
    const handleInputChange = ({ target: { name, value } }) => {
      setFormState({ ...formState, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        register({
          variables: { ...formState },
        })
        .then(({ data }) => {
          console.log(data);
          if (data && data.register && data.register.token) {
            Auth.login(data.register.token);
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
                    <div className="container max-w-sm mx-auto flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                            <form onSubmit={handleFormSubmit}>
                                <input 
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleInputChange}
                                    placeholder="Full Name" />

                                <input 
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleInputChange}
                                    placeholder="Email" />

                                <input 
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    value={formState.password}
                                    onChange={handleInputChange}
                                    placeholder="Password" />
                                {/* <input 
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="confirm_password"
                                    placeholder="Confirm Password" /> */}
                                <button
                                    type="submit"
                                    className=" bg-[#A288E3] hover:bg-[#F79764] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >Create Account</button>
                                {/* <div className="flex items-center justify-center">
                                </div> */}
                            </form>

                        </div>

                        <div className="text-white mt-6">
                            Already have an account? <a className="no-underline border-b border-blue text-blue" href="../login/">Log in </a>.
                        </div>
                    </div>
                </div>
    );
}

export default Register;