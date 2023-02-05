import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_POST, REMOVE_POST } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";


function UserPosts() {
  const { data, loading } = useQuery(QUERY_ME);
  const user = data?.me || {};

  const [showEdit, setShowEdit] = useState(false);
  const [editPost, setEditPost] = useState("");
  const [editId, setEditId] = useState("");



  const [updatePost, { data: updateData }] = useMutation(UPDATE_POST);
  const [removePost, { data: removeData }] = useMutation(REMOVE_POST);

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
        <div className="bg-[#040F16] w-full border-2 border-[#F79764] shadow rounded-lg p-5">
          {loading ? null : user.posts.map((post) => (
            <div className="w-full bg-[#040F16] border-2 border-[#F79764] shadow rounded-lg p-5 my-5">
              <div className="w-full flex flex-row flex-wrap justify-between">
                <div className="w-full md:w-1/2 flex flex-row flex-wrap">
                    
                    <div className="w-11/12">
                        <p className="text-[#F79764] font-bold text-lg">{post.name}</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-row flex-wrap justify-end">
                    <div className="w-1/12">
                        <button
                            className="w-10 h-10 rounded-full bg-[#F79764] text-[#040F16] font-bold text-lg"
                            id={post._id}
                            value={post.postBody}
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                    </div>
                    <div className="w-1/12">
                        <button
                            className="w-10 h-10 rounded-full bg-[#F79764] text-[#040F16] font-bold text-lg"
                            id={post._id}
                            onClick={handleRemove}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                </div>
                <div className="w-full flex flex-row flex-wrap justify-center">
                    <div className="w-full md:w-3/4 lg:w-2/3">
                        {showEdit && editId === post._id ? (
                            <form onSubmit={handleUpdate}>
                                <textarea
                                    className="w-full h-40 text-[#F79764] bg-[#040F16] border-2 border-[#F79764] shadow rounded-lg p-5 my-5"
                                    id={post._id}
        
                                    value={editPost}
                                    onChange={(event) => setEditPost(event.target.value)}
                                />
                                
                                <button
                                    className="w-full md:w-1/2 lg:w-1/3 bg-[#F79764] text-[#040F16] font-bold text-lg rounded-lg p-2 my-2"
                                    type="submit"
                                >   
                                    Update
                                </button>
                            </form>
                        ) : (
                            <p className="text-[#F79764] font-bold text-lg">{post.postBody}</p>
                        )}
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