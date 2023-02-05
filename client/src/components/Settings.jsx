import React from 'react'



const Settings = () => {
    return ( 

<div class="bg-[#040F16] flex justify-center items-center h-screen py-12">
  <div class="w-full max-w-[550px]">
 
        <div className="w-full sm:w-1/2">
          <div className="mb-3 mt-3 text-3xl text-[#F79764] font-Comfortaa">
            <label>
              Account Settings
            </label>
            
          </div> 
        </div>  
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="fName"
              className="py-3 mb-3 block text-base font-medium text-[#F79764] font-Comfortaa"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#F79764] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="username"
              className="py-3 mb-3 block text-base font-medium text-[#F79764] font-Comfortaa"
            >
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              className="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#F79764] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
     

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="email"
              className="py-3 mb-3 block text-base font-medium text-[#F79764] font-Comfortaa"
            >
              Email
            </label>
            <input
              type="input"
              name="email"
              id="userEmail"
              placeholder="email"
              className="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  text-[#F79764] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="bio"
              className="py-3 mb-3 block text-base font-medium text-[#F79764] font-Comfortaa"
            >
              Bio
            </label>
            <input
              type="input"
              name="bio"
              id="bio"
              placeholder="bio"
              className="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#F79764] font-Comfortaa">
          Darkmode | Lightmode
        </label>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              className="h-5 w-5"
            />
            <label
              for="radioButton1"
              className="pl-3 text-base font-medium text-[#F79764] font-Comfortaa"
            >
              Darkmode
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              className="h-5 w-5"
            />
            <label
              for="radioButton2"
              className="pl-3 text-base font-medium text-[#F79764] font-Comfortaa"
            >
              Lightmode
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-5">
        <button
          className="hover:shadow-form rounded-md  bg-[#A288E3] hover:bg-[#F79764] py-3 px-8 text-center text-base font-semibold text-white outline-none font-Comfortaa"
        >
          Update Settings
        </button>
      </div>
    </form>
  </div>
</div>



) }

export default Settings
