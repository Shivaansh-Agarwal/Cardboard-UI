import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import { AvatarCircular } from "./Avatar.jsx";
import imgAvatar1 from "./img-avatar.png";

const AvatarUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <CompPageTemplate pageHeading={"Avatars"} sections={[section1, section2]} />
  );
};

export default AvatarUtility;

const section1Preview = (
  <>
    <AvatarCircular
      imgSrc={imgAvatar1}
      avatarType="avt-circular"
      avatarSize="avt-big"
    />
    <AvatarCircular
      imgSrc={imgAvatar1}
      avatarType="avt-circular"
      avatarSize="avt-medium"
    />
    <AvatarCircular
      imgSrc={imgAvatar1}
      avatarType="avt-circular"
      avatarSize="avt-small"
    />
  </>
);
const section1Code = `<AvatarCircular
    imgSrc={imgAvatar1}
    avatarType="avt-circular"
    avatarSize="avt-big"
/>
<AvatarCircular
    imgSrc={imgAvatar1}
    avatarType="avt-circular"
    avatarSize="avt-medium"
/>
<AvatarCircular
    imgSrc={imgAvatar1}
    avatarType="avt-circular"
    avatarSize="avt-small"
/>`;
const section1 = CompSectionTemplate({
  sectionHeading: "Circular Avatars",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
});

const section2Preview = (
  <>
    <AvatarCircular
      imgSrc={imgAvatar1}
      avatarType="avt-circular"
      avatarSize="avt-big"
      isBorder={true}
      isHover={true}
    />
    <AvatarCircular
      imgSrc={imgAvatar1}
      avatarType="avt-circular"
      avatarSize="avt-medium"
      isBorder={true}
      isHover={true}
    />
    <AvatarCircular
      imgSrc={imgAvatar1}
      avatarType="avt-circular"
      avatarSize="avt-small"
      isBorder={true}
      isHover={true}
    />
  </>
);
const section2Code = `<AvatarCircular
    imgSrc={imgAvatar1}
    avatarType="avt-circular"
    avatarSize="avt-big"
    isBorder={true}
    isHover={true}
/>
<AvatarCircular
    imgSrc={imgAvatar1}
    avatarType="avt-circular"
    avatarSize="avt-medium"
    isBorder={true}
    isHover={true}
/>
<AvatarCircular
    imgSrc={imgAvatar1}
    avatarType="avt-circular"
    avatarSize="avt-small"
    isBorder={true}
    isHover={true}
/>`;
const section2 = CompSectionTemplate({
  sectionHeading: "Circular Avatars (with Border & Hover)",
  sectionDesc: "This is similar to Twitter Avatar",
  preview: section2Preview,
  code: section2Code,
});
