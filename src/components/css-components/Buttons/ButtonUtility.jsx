import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import { ButtonRegular, ButtonLike } from "./Button.jsx";

const ButtonUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <CompPageTemplate
      pageHeading={"Buttons"}
      sections={[section1, section2, section3]}
    />
  );
};

export default ButtonUtility;

const section1Preview = (
  <>
    <ButtonRegular btnText="Primary" btnClass="btn-primary" />
    <ButtonRegular btnText="Secondary" btnClass="btn-secondary" />
    <ButtonRegular btnText="Success" btnClass="btn-success" />
    <ButtonRegular btnText="Danger" btnClass="btn-danger" />
    <ButtonRegular btnText="Warning" btnClass="btn-warning" />
    <ButtonRegular btnText="Link" btnClass="btn-link" />
  </>
);
const section1Code = `<ButtonRegular btnText="Primary" btnClass="btn-primary" />
<ButtonRegular btnText="Secondary" btnClass="btn-secondary" />
<ButtonRegular btnText="Success" btnClass="btn-success" />
<ButtonRegular btnText="Danger" btnClass="btn-danger" />
<ButtonRegular btnText="Warning" btnClass="btn-warning" />
<ButtonRegular btnText="Link" btnClass="btn-link" />
`;
const section1 = CompSectionTemplate({
  sectionHeading: "Standard Buttons",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
});

const section2Preview = (
  <>
    <ButtonRegular btnText="Primary" btnClass="btn-outline-primary" />
    <ButtonRegular btnText="Secondary" btnClass="btn-outline-secondary" />
    <ButtonRegular btnText="Success" btnClass="btn-outline-success" />
    <ButtonRegular btnText="Danger" btnClass="btn-outline-danger" />
    <ButtonRegular btnText="Warning" btnClass="btn-outline-warning" />
  </>
);
const section2Code = `<ButtonRegular btnText="Primary" btnClass="btn-outline-primary" />
<ButtonRegular btnText="Secondary" btnClass="btn-outline-secondary" />
<ButtonRegular btnText="Success" btnClass="btn-outline-success" />
<ButtonRegular btnText="Danger" btnClass="btn-outline-danger" />
<ButtonRegular btnText="Warning" btnClass="btn-outline-warning" />
`;
const section2 = CompSectionTemplate({
  sectionHeading: "Outline Buttons",
  sectionDesc: "",
  preview: section2Preview,
  code: section2Code,
});

const section3Preview = (
  <>
    <ButtonLike />
  </>
);
const section3Code = `<ButtonLike />`;
const section3 = CompSectionTemplate({
  sectionHeading: "Like Button",
  sectionDesc: "Can be used for adding an item to Wishlist List",
  preview: section3Preview,
  code: section3Code,
});
