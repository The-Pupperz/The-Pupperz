import React from 'react'

const Support = () => {
    return (
<div class="bg-[#040F16] flex items-center text-centerjustify-center h-screen p-12">
  <div class="mx-auto w-full max-w-[550px]">
  <div class="mb-5 text-4xl text-center text-[#F79764]">
            <label>
    
              Account Settings
            </label>
            
            </div> 

    <form action="https://getform.io/f/07e3a107-6dc3-47d1-9663-d20ef83bc3ca" method="POST">
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium py-4 text-[#F79764] "
        >
          Username
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="username"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#F79764] outline-none focus:bg-[#A288E3] focus:shadow-md hover:translate-y-1  hover:placeholder-white"
        />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block text-base font-medium py-4 text-[#F79764]"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#F79764] outline-none focus:bg-[#A288E3] focus:shadow-md hover:translate-y-1  hover:placeholder-white"
        />
      </div>
      <div class="mb-5">
        <label
          for="subject"
          class="mb-3 block text-base font-medium py-4 text-[#F79764]"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:bg-[#A288E3] focus:shadow-md hover:translate-y-1  hover:placeholder-white"
        />
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium py-4 text-[#F79764]"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:bg-[#A288E3] focus:shadow-md hover:translate-y-1  hover:placeholder-white"
        ></textarea>
      </div>
      <div class="flex items-center py-5 justify-center">
        <button
          class="hover:shadow-form rounded-md bg-[#A288E3] hover:bg-[#F79764] px-8 text-base font-semibold text-white outline-none py-3"
        >
          Get Support
        </button>
      </div>
    </form>
  </div>
</div>
    )
}

export default Support 