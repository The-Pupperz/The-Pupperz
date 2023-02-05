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
                    className="float-right bg-[#A288E3] hover:bg-[#F79764] text-white p-2 rounded-lg font-Comfortaa"
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
                <div className="bg-[#95553375] font- shadow p-3 text-3xl text-white font-semibold">
                  <div style={{ cursor: "pointer" }} onClick={handleClick}>
                    {post.name}
                  </div>
                  {showProfile && <Profile />}
                </div>
                <div className="bg-[#040F16] border border-[#A288E3] shadow p-5 text-xl text-white font-semibold">
                  {post.postBody}
                </div>
                <div className="bg-[#a288e393] p-1 border  shadow flex flex-row flex-wrap justify-around">
                  <div className="w-1/3 hover:bg-[#F79764] border-2  border-[#A288E3] text-center my-1 py2-3 text-l text-white font-Comfortaa rounded-md">
                    Like
                  </div>
                  <div className="w-1/3 hover:bg-[#F79764] border-2 border-[#A288E3] text-center my-1 py2-3 text-l text-white font-Comfortaa rounded-md">
                    Comment
                  </div>
                </div>

                <div className="bg-[#040F16] border bg-[#040F16] border-[#A288E3] rounded-b-lg shadow p-5 text-l text-white content-center font-semibold flex flex-row flex-wrap">
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