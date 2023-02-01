import React from 'react'

const Register = () => {
  return (
<div class="w-[350px] mx-auto justify-center py-10">
            <div class="container max-w-sm mx-auto flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />
                    <div class="flex items-center justify-center">
                    <button
                        type="submit"
                        class=" bg-[#A288E3] hover:bg-[#F79764] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >Create Account</button>
                    </div>

                </div>

                <div class="text-white mt-6">
                    Already have an account? <a class="no-underline border-b border-blue text-blue" href="../login/">Log in </a>.
                </div>
            </div>
        </div>
  )
}

export default Register