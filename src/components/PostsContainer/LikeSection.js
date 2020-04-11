import React from "react";

const LikeSection = props => {

  const addLike = event => {
    event.target.classList.toggle("add-like");

    if (event.target.classList.value.includes("add-like")) {
      props.setLikes(props.likes + 1);
      event.target.style.color = "red";
    } else {
      props.setLikes(props.likes - 1);
      event.target.style.color = "black";
    }
  };
  return (
    <div>
      <div  className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i onClick={addLike} className="far fa-heart" />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">{props.likes} likes</p>
    </div>
  );
};

export default LikeSection;
