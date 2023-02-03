import React from 'react'

const Settings = () => {
    return ( 

<div class="bg-[#040F16] flex justify-center items-center h-screen py-12">
  <div class="w-full max-w-[550px]">
 
        <div class="w-full sm:w-1/2">
          <div class="mb-5 text-4xl text-[#F79764]">
            <label>
    
              Account Settings
            </label>
            
            </div> 
            </div>  
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="fName"
              class="py-3 mb-3 block text-base font-medium text-[#F79764]"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              class="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#F79764] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="username"
              class="py-3 mb-3 block text-base font-medium text-[#F79764]"
            >
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              class="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
     

      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="email"
              class="py-3 mb-3 block text-base font-medium text-white"
            >
              Email
            </label>
            <input
              type="input"
              name="email"
              id="userEmail"
              placeholder="email"
              class="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="bio"
              class="py-3 mb-3 block text-base font-medium text-white"
            >
              Bio
            </label>
            <input
              type="input"
              name="bio"
              id="bio"
              placeholder="bio"
              class="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div class="mb-5">
        <label class="mb-3 block text-base font-medium text-white">
          Darkmode | Lightmode
        </label>
        <div class="flex items-center space-x-6">
          <div class="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              class="h-5 w-5"
            />
            <label
              for="radioButton1"
              class="pl-3 text-base font-medium text-white"
            >
              Darkmode
            </label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              class="h-5 w-5"
            />
            <label
              for="radioButton2"
              class="pl-3 text-base font-medium text-white"
            >
              Lightmode
            </label>
          </div>
        </div>
      </div>

      <div>
        <button
          class="hover:shadow-form rounded-md bg-[#A288E3] hover:bg-[#F79764] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Update Settings
        </button>
      </div>
    </form>
  </div>
</div>



) }

export default Settings
