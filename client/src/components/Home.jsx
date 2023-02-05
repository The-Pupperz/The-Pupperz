import React, { useState } from "react";
import Profile from "./Profile";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import { QUERY_ME, QUERY_POSTS } from "../utils/queries";



function Home() {
  const { data: user } = useQuery(QUERY_ME);
  const [addPost, { data: postData }] = useMutation(ADD_POST);
  const { data: postsData, loading } = useQuery(QUERY_POSTS);
  console.log(postsData);
  const posts = postsData?.getPosts || [];

  const [showProfile, setShowProfile] = useState({
    posts: posts.map(post => ({
      _id: post._id,
      show: false
    }))
  });
  const handleClick = (_id) => {
    let posts = JSON.parse(JSON.stringify(showProfile.posts));
    posts = posts.map(post => {
      if(post._id === _id) {
        post.show = !post.show;
      }});
    setShowProfile({ posts });
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
      window.location.reload();
      
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="w-full flex flex-row flex-wrap ">
      <div className="w-full bg-[#040F16] h-screen flex flex-row flex-wrap justify-center">
        <div className="w-full md:w-3/4 lg:w-3/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll scrollbar-hide antialiased">
          <form onSubmit={handleFormSubmit}>
            <div className="bg-[#a288e360] w-full shadow rounded-lg p-5">
              <textarea
                className="bg-[#040F16] hover:translate-y-1 text-white w-full rounded-lg shadow font-Comfortaa p-2 hover:"
                name="postBody"
                rows="5"
                value={formState.postBody}
                onChange={handleInputChange}
                placeholder="Speak your mind"
              ></textarea>

              <div className="w-full flex flex-row flex-wrap mt-3">
               
                <div className="w-2/3 flex">
                  <button
                    type="Submit"
                    className=" float-right hover:translate-y-1 bg-[#A288E3] hover:bg-[#F79764] text-white p-2 rounded-lg font-Comfortaa"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>

          {loading ? null : posts.map((post, i) => (
            <div className="mt-3 flex flex-col">
              <div className="bg-[#040F16] mt-3">

                <div className="heading bg-[#040F16] rounded-md shadow p-3 text-3xl text-white font-semibold cusor:"pointer">
                  <div >
      
                    {post.name}
                  </div>
                  {/* {showProfile.posts[i].show && <Profile />} */}
                </div>
                <div className="bg-[#040F16] rounded-md border-2 border-[#A288E3] shadow p-5 text-xl text-white font-Comfortaa">
                  {post.postBody}
                </div>
                <div className="bg-[#a288e393] p-1 rounded-md shadow flex flex-row flex-wrap justify-around">
                  <div className="w-1/3 hover:bg-[#F79764] border-2  border-[#A288E3] text-center my-1 py2-3 text-l  text-white font-Comfortaa rounded-md bg-[#A288E3] hover:translate-y-1 cursor-pointer">
                    Like
                  </div>
                  <div className="w-1/3 hover:bg-[#F79764] border-2 border-[#A288E3] text-center my-1 py2-3 text-l text-white font-Comfortaa rounded-md bg-[#A288E3] hover:translate-y-1 cursor-pointer">
                    Comment
                  </div>
                </div>

                <div className=" heading bg-[#040F16] border-2 border-[#A288E3] rounded-b-lg shadow p-5 text-l text-white content-center flex flex-row flex-wrap rounded-md font-Comfortaa">
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