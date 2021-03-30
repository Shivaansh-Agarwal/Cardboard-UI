import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import { InputField, InputSearchField } from "./InputField.jsx";

const InputFieldUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <CompPageTemplate
      pageHeading={"Input Fields"}
      sections={[section1, section2]}
    />
  );
};

export default InputFieldUtility;

const section1Preview = (
  <>
    <InputField placeholder="Enter Username" />
    <InputField
      placeholder="Enter Username"
      text="Lorem ipsum dolor sit amet."
    />
  </>
);
const section1Code = `<InputField 
  placeholder="Enter Username" 
/>

<InputField
  placeholder="Enter Username"
  text="Lorem ipsum dolor sit amet."
/>`;
const section1 = CompSectionTemplate({
  sectionHeading: "Normal Input Field",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
});

const section2Preview = (
  <>
    <InputSearchField placeholder="Search..." />
  </>
);
const section2Code = `<InputSearchField placeholder="Search..."/>`;
const section2 = CompSectionTemplate({
  sectionHeading: "Search Input Field",
  sectionDesc: "",
  preview: section2Preview,
  code: section2Code,
});
