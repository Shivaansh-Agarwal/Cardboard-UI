import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import { ImageResponsive, ImageCircular } from "./Image.jsx";

const ImageUtility = () => {
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

export default ImageUtility;

const section1Preview = (
  <>
    <ImageResponsive
      src="https://picsum.photos/400/300"
      maxWidth="400"
      maxHeight="300"
    />
  </>
);
const section1Code = `<ImageResponsive
  src="https://picsum.photos/400/300"
  maxWidth="400"
  maxHeight="300"
/>`;
const section1 = CompSectionTemplate({
  sectionHeading: "Normal Input Field",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
});

const section2Preview = (
  <>
    <ImageCircular src="https://picsum.photos/300/300" diameter="300" />
  </>
);
const section2Code = `<ImageCircular src="https://picsum.photos/300/300" diameter="300" />`;
const section2 = CompSectionTemplate({
  sectionHeading: "Circular Input Field",
  sectionDesc: "",
  preview: section2Preview,
  code: section2Code,
});
