import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_POST, REMOVE_POST } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import { FaDog, FaBone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth.js";

function UserPosts() {
  const { data, loading } = useQuery(QUERY_ME);
  const user = data?.me || {};

  const [showEdit, setShowEdit] = useState(false);
  const [editPost, setEditPost] = useState("");
  const [editId, setEditId] = useState("");

  let navigate = useNavigate();

  
  useEffect(() => {
    
    if (!Auth.loggedIn()) {
      alert("You must be logged in to view this page!")
      return navigate("/");
    }
  }, []);

  const [updatePost, { data: updateData }] = useMutation(UPDATE_POST, {
    refetchQueries: [{ query: QUERY_ME }],
    awaitRefetchQueries: true,
  });

  const [removePost, { data: removeData }] = useMutation(REMOVE_POST, {
    refetchQueries: [{ query: QUERY_ME }],
    awaitRefetchQueries: true,
  });

  const [postSubmitted, setPostSubmitted] = useState(false);

  const handleEdit = (event) => {
    event.preventDefault();
    setShowEdit(!showEdit);
    setEditPost(event.target.value);
    setEditId(event.target.id);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      console.log(editPost, editId);
      const { data } = await updatePost({
        variables: { postBody: editPost, postId: editId },
      });
      setEditPost("");
      setEditId("");
      setShowEdit(false);
      setPostSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemove = async (event) => {
    event.preventDefault();
    try {
      const { data } = await removePost({
        variables: { postId: event.target.id },
      });
      setEditPost("");
      setEditId("");
      setShowEdit(false);
      setPostSubmitted(true);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full bg-[#040F16] h-screen flex flex-row flex-wrap justify-center">
      <div className="w-full md:w-3/4 lg:w-3/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll scrollbar-hide antialiased">
        <div className=" w-full rounded-lg p-5">
          {loading
            ? null
            : user.posts.map((post) => (
                <div className="w-full bg-[#a288e377] shadow rounded-lg p-5 my-5">
                  <div className="w-full flex flex-row flex-wrap justify-between">
                    <div className="w-full md:w-1/2 flex flex-row flex-wrap">
                      <div className="w-11/12 mb-2">
                        <p className="text-[#fcf9f7] font-Comfortaa font-bold text-lg">
                          {post.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-row flex-wrap justify-center">
                    <div className="w-full md:w-3/4 lg:w-2/3">
                      {showEdit && editId === post._id ? (
                        <form onSubmit={handleUpdate}>
                          <textarea
                            className="w-full h-40 text-[#fffdfd] bg-[#040F16]  shadow rounded-lg p-5 my-5"
                            id={post._id}
                            value={editPost}
                            onChange={(event) =>
                              setEditPost(event.target.value)
                            }
                          />

                          <button
                            className="w-1/3 md:w-1/2  lg:w-1/3 border-2 text-[#040F16] font-bold text-lg rounded-lg p-1 my-4 items-center"
                            type="submit"
                          >
                            <div className="flex justify-around items-center">
                              <span className="text-white font-Comfortaa">
                                Woof
                              </span>
                              <span className="text-white">
                                <FaDog />{" "}
                              </span>
                            </div>
                          </button>
                        </form>
                      ) : (
                        <p className="text-[#F79764] border-[#A288E3] border-dotted border-2 rounded-md py-4 px-3 mx-2 bg-[#040F16] text-md">
                          {post.postBody}
                        </p>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 flex flex-row flex-wrap justify-end">
                      <div className="w-1/6 mt-2">
                        <button
                          className="w-10 h-10 font-Comfortaa bg-[#f7986483] text-[#040F16] font-light rounded-full text-sm hover:bg-[#F79764] hover:font-bold hover:translate-x-1"
                          id={post._id}
                          value={post.postBody}
                          onClick={handleEdit}
                        >
                          edit
                        </button>
                      </div>
                      <div className="w-1/8 mt-2 lg:w-1/12">
                        <button
                          className="w-10 h-10 font-Comfortaa bg-[#f7986483] text-[#040F16] font-light rounded-full text-sm hover:bg-[#F79764] hover:font-bold hover:translate-x-1"
                          id={post._id}
                          onClick={handleRemove}
                        >
                          del
                        </button>
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

export default UserPosts;
