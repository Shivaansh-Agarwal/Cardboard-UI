import React, { useState } from "react";

export const ButtonRegular = ({ btnText, btnClass }) => {
  return (
    <>
      <button className={`btn ${btnClass}`}>{btnText}</button>
    </>
  );
};

export const ButtonLike = () => {
  const [likeStatus, setLikeStatus] = useState(false);
  const classActive = "like-active";
  const classInactive = "like-inactive";
  function updateLikeStatus() {
    setLikeStatus((currStatus) => !currStatus);
  }
  return (
    <div className="like-wrapper">
      <span
        className={`material-icons like ${
          likeStatus ? classActive : classInactive
        }`}
        onClick={updateLikeStatus}
        onKeyPress={updateLikeStatus}
        role="button"
        tabIndex="0"
      >
        favorite
      </span>
    </div>
  );
};
