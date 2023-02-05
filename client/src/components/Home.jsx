import React, { useState } from "react";
import Profile from "./Profile";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import { QUERY_ME, QUERY_POSTS } from "../utils/queries";

function Home() {
  const { data: user } = useQuery(QUERY_ME);
  const [addPost, { data: postData }] = useMutation(ADD_POST);
  const { data: postsData } = useQuery(QUERY_POSTS);
  console.log(postsData);
  const posts = postsData?.getPosts || [];

  const [showProfile, setShowProfile] = useState(false);
  const handleClick = () => {
    setShowProfile(!showProfile);
  };


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


  const [formState, setFormState] = useState({
    postBody: "",
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const [postSubmitted, setPostSubmitted] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!user || !user.me) {
      return;
    }

    try {
      const { data } = await addPost({
        variables: { name: user.me.name, postBody: formState.postBody },
      });
      setFormState({ postBody: "" });
      setPostSubmitted(true);
      // window.location.reload();
      
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="w-full flex flex-row flex-wrap ">
      <div className="w-full bg-[#040F16] h-screen flex flex-row flex-wrap justify-center">
        <div className="w-full md:w-3/4 lg:w-3/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll scrollbar-hide antialiased">
          <form onSubmit={handleFormSubmit}>
            <div className="bg-[#040F16] w-full border-2 border-[#F79764] shadow rounded-lg p-5">
              <textarea
                className="bg-[#040F16] text-white w-full rounded-lg shadow border p-2"
                name="postBody"
                rows="5"
                value={formState.postBody}
                onChange={handleInputChange}
                placeholder="Speak your mind"
              ></textarea>

              <div className="w-full flex flex-row flex-wrap mt-3">
               
                <div className="w-2/3">
                  <button
                    type="Submit"
                    className="float-right bg-[#A288E3] hover:bg-[#F79764] text-white p-2 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>

          {posts.map((post) => (
            <div className="mt-3 flex flex-col">
              <div className="bg-[#040F16] mt-3">
                <div className="bg-[#040F16] shadow p-3 text-3xl text-white font-semibold">
                  <div style={{ cursor: "pointer" }} onClick={handleClick}>
                    {post.name}
                  </div>
                  {showProfile && <Profile />}
                </div>
                <div className="bg-[#040F16] border border-[#F79764] shadow p-5 text-xl text-white font-semibold">
                  {post.postBody}
                </div>
                <div className="bg-[#A288E3] p-1 border border-[#F79764] shadow flex flex-row flex-wrap justify-center">
                  <div className="w-1/3 hover:bg-[#F79764] border-4 text-center text-xl text-white font-semibold">
                    Like
                  </div>
                  <div className="w-1/3 hover:bg-[#F79764] border-4 text-center text-xl text-white font-semibold">
                    Comment
                  </div>
                </div>

                <div className="bg-[#040F16] border bg-[#040F16] border-[#F79764] rounded-b-lg shadow p-5 text-l text-white content-center font-semibold flex flex-row flex-wrap">
                  <div className="w-full">
                    <div className="w-full text-left text-2xl underline text-[#F79764] py-1">
                      {/* {post.replies.length} Comments */}
                      
                    </div>
                    {/* COMMENTS? */}A Pretty Cool photo from the mountains.
                    Image credit to @danielmirlea on Unsplash. A Pretty Cool
                    photo from the mountains. Image credit to @danielmirlea on
                    Unsplash.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;