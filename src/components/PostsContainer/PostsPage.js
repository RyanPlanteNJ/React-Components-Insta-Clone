//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import data from "../../dummy-data";
// import data

const PostsPage = props => {
  const [post, setPost] = useState(data);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {post.map(post => {
        return <Post post ={ post } setPost = {setPost} />;
      })}
    </div>
  );
};

export default PostsPage;
