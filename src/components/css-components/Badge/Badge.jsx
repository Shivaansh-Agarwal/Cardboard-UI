import React from "react";
import iconStar from "./assets/icon-star.svg";

export const BadgeProduct = function ({ tag, backgroundColor, color }) {
  return (
    <div className="badge badge-product" style={{ backgroundColor, color }}>
      {tag.toUpperCase()}
    </div>
  );
};

export const BadgeRating = function ({ rating, backgroundColor, color }) {
  return (
    <div className="badge badge-rating" style={{ backgroundColor, color }}>
      <span>{rating}</span>
      <img src={iconStar} alt="star" className="badge-star" />
    </div>
  );
};

export const BadgeCount = function ({ count, backgroundColor, color }) {
  return (
    <div className="badge badge-count" style={{ backgroundColor, color }}>
      {count}
    </div>
  );
};
