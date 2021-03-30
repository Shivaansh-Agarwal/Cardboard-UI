import React from "react";

export const AvatarCircular = ({
  imgSrc,
  avatarType,
  avatarSize,
  isBorder,
  isHover,
}) => {
  return (
    <div
      className={`avatar ${avatarType} ${avatarSize} ${
        isBorder ? "avt-brd-4px" : null
      } ${isHover ? "avt-hover" : null}`}
    >
      <img src={imgSrc} alt="avatar" />
    </div>
  );
};
