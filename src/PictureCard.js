import React from "react";

const PictureCard = props => {
  return (
    <div className="img_title">
      <h2>{props.title}</h2>
      <h2>{props.date}</h2>
        <img src={props.url} alt=""></img>
      </div>
  );
};

export default PictureCard;
