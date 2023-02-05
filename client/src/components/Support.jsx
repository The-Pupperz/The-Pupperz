import React from 'react'
import { IoIosHelpCircleOutline } from 'react-icons/io'; 


const Support = () => {
    return (
<div className="bg-[#040F16] flex justify-center h-screen p-4">
  <div className="mx-auto w-full max-w-[550px]">
  <div className="text-3xl text-[#F79764] font-Comfortaa">
            <label>
              Support
            </label>
            
            </div> 

    <form action="https://getform.io/f/07e3a107-6dc3-47d1-9663-d20ef83bc3ca" method="POST">
      <div className="mb-5">
        <label
          for="name"
          className="mb-3 block text-base font-medium py-4 text-[#F79764] font-Comfortaa"
        >
          Username
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="username"
          className="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="email"
          className="mb-3 block text-base font-medium py-4 text-[#F79764] font-Comfortaa"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="subject"
          className="mb-3 block text-base font-medium py-4 text-[#F79764] font-Comfortaa"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          className="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="message"
          className="mb-3 block text-base font-medium py-4 text-[#F79764] font-Comfortaa"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          className="hover:placeholder-white hover:bg-[#A288E3] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div className="flex items-center py-5 justify-center">
        <button
          className="hover:shadow-form rounded-md flex space-between bg-[#A288E3] hover:bg-[#F79764] px-8 text-base font-semibold text-white outline-none py-3 font-Comfortaa"
        >
          <span className= "p-1"><IoIosHelpCircleOutline/> </span> Support
        </button>
      </div>
    </form>
  </div>
</div>
    )
}

export default Support 