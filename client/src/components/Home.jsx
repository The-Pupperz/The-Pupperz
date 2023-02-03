import React, { useState } from 'react'
import Profile from './Profile'

const Home = () => {
const [showProfile, setShowProfile] = useState(false)
const handleClick = () => {
  setShowProfile(!showProfile)
}

  return (
    <div class="w-full flex flex-row flex-wrap ">

<div class="w-full bg-[#040F16] h-screen flex flex-row flex-wrap justify-center">
  
  <div class="w-full md:w-3/4 lg:w-3/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll scrollbar-hide antialiased">
    <div class="bg-[#040F16] w-full border-2 border-[#F79764] shadow rounded-lg p-5">
      <textarea class="bg-[#040F16] text-white w-full rounded-lg shadow border p-2" rows="5" placeholder="Speak your mind"></textarea>
      
      <div class="w-full flex flex-row flex-wrap mt-3">
        <div class="w-1/3">
          <select class="w-full p-2 rounded-lg bg-gray-200 shadow border float-left">
            <option>Public</option>
            <option>Private</option>
          </select>
        </div>
        <div class="w-2/3">
          <button type="button" class="float-right bg-[#A288E3] hover:bg-[#F79764] text-white p-2 rounded-lg">Submit</button>
        </div>
      </div>
    </div>
    
    <div class="mt-3 flex flex-col">
      
      <div class="bg-[#040F16] mt-3">
      <div class="bg-[#040F16] shadow p-3 text-3xl text-white font-semibold">
          {/* POST USERNAME */}
          <div style={{cursor:"pointer"}} onClick={handleClick}>USERNAME</div>
          {showProfile && <Profile />}
        </div>
        <div class="bg-[#040F16] border border-[#F79764] shadow p-5 text-xl text-white font-semibold">
          {/* POST BODY */}
          USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. 
          USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. 
        </div>
        <div class="bg-[#A288E3] p-1 border border-[#F79764] shadow flex flex-row flex-wrap justify-center">
          <div class="w-1/3 hover:bg-[#F79764] border-4 text-center text-xl text-white font-semibold">Like</div>
          <div class="w-1/3 hover:bg-[#F79764] border-4 text-center text-xl text-white font-semibold">Comment</div>
        </div>
        
        <div class="bg-[#040F16] border bg-[#040F16] border-[#F79764] rounded-b-lg shadow p-5 text-l text-white content-center font-semibold flex flex-row flex-wrap">
          <div class="w-full">
            <div class="w-full text-left text-2xl underline text-[#F79764] py-1">
              {/* COMMENTER */}
              Some Person
            </div>
            {/* COMMENTS? */}
            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
          </div>
        </div>
      </div>
      

      <div class="bg-[#040F16] mt-3">
      <div class="bg-[#040F16] shadow p-3 text-3xl text-white font-semibold">
          {/* POST BODY */}
          USERNAME
        </div>
        <div class="bg-[#040F16] border border-[#F79764] shadow p-5 text-xl text-white font-semibold">
          {/* POST BODY */}
          USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. 
          USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. 
        </div>
        <div class="bg-[#A288E3] p-1 border border-[#F79764] shadow flex flex-row flex-wrap justify-center">
          <div class="w-1/3 hover:bg-[#F79764] border-4 text-center text-xl text-white font-semibold">Like</div>
          <div class="w-1/3 hover:bg-[#F79764] border-4 text-center text-xl text-white font-semibold">Comment</div>
        </div>
        
        <div class="bg-[#040F16] border bg-[#040F16] border-[#F79764] rounded-b-lg shadow p-5 text-l text-white content-center font-semibold flex flex-row flex-wrap">
          <div class="w-full">
            <div class="w-full text-left text-2xl underline text-[#F79764] py-1">
              {/* COMMENTER */}
              Some Person
            </div>
            {/* COMMENTS? */}
            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
          </div>
        </div>
      </div>
      <div class="bg-[#040F16] mt-3">
      <div class="bg-[#040F16] shadow p-3 text-3xl text-white font-semibold">
          {/* POST BODY */}
          USERNAME
        </div>
        <div class="bg-[#040F16] border border-[#F79764] shadow p-5 text-xl text-white font-semibold">
          {/* POST BODY */}
          USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. 
          USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. USERS POST BODY CONTENT. 
        </div>
        <div class="bg-[#A288E3] p-1 border border-[#F79764] shadow flex flex-row flex-wrap justify-center">
          <div class="w-1/3 hover:bg-[#F79764] border-4 text-center text-xl text-white font-semibold">Like</div>
          <div class="w-1/3 hover:bg-[#F79764] border-4 text-center text-xl text-white font-semibold">Comment</div>
        </div>
        
        <div class="bg-[#040F16] border bg-[#040F16] border-[#F79764] rounded-b-lg shadow p-5 text-l text-white content-center font-semibold flex flex-row flex-wrap">
          <div class="w-full">
            <div class="w-full text-left text-2xl underline text-[#F79764] py-1">
              {/* COMMENTER */}
              Some Person
            </div>
            {/* COMMENTS? */}
            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
          </div>
        </div>
      </div>


    </div>
  </div>
</div>

</div>
  )
}

export default Home