import React from "react";

export const ImageResponsive = ({ src, maxWidth, maxHeight }) => {
  return (
    <div
      className="img-responsive"
      style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    >
      <img src={src} alt="responsive Img" />
    </div>
  );
};

export const ImageCircular = ({ src, diameter }) => {
  return (
    <div
      className="img-responsive"
      style={{ width: diameter + "px", height: diameter + "px" }}
    >
      <img src={src} alt="img-circular" className="img-circular" />
    </div>
  );
};
