// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(e => (
        <Comment comment ={e} />
      ))}
      <CommentInput comments={props.comments}/>
    </div>
  );
};

export default CommentSection;
