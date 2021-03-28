import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import { BadgeProduct, BadgeRating, BadgeCount } from "./Badge.jsx";

const BadgeUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <CompPageTemplate
      pageHeading={"Badges"}
      sections={[section1, section2, section3]}
    />
  );
};

export default BadgeUtility;

const section1Preview = (
  <>
    <BadgeProduct tag="BESTSELLER" backgroundColor="orange" />
    <BadgeProduct tag="NEW" color="black" />
    <BadgeProduct tag="EXCLUSIVE" backgroundColor="red" />
  </>
);
const section1Code = `<BadgeProduct tag="BESTSELLER" backgroundColor="orange" />
<BadgeProduct tag="NEW" color="black"/>
<BadgeProduct tag="EXCLUSIVE" backgroundColor="red" />
`;
const section1 = CompSectionTemplate({
  sectionHeading: "Product-Tag",
  sectionDesc:
    "The color and background-color can be customized by passing the it's value as props.",
  preview: section1Preview,
  code: section1Code,
});
const section2Preview = (
  <>
    <BadgeRating rating="4.4" />
    <BadgeRating rating="3.9" backgroundColor="olive" />
  </>
);
const section2Code = `<BadgeRating rating="4.4" />
<BadgeRating rating="3.9" backgroundColor="olive" />
`;
const section2 = CompSectionTemplate({
  sectionHeading: "Product-Rating",
  sectionDesc:
    "The color and background-color can be customized by passing the it's value as props.",
  preview: section2Preview,
  code: section2Code,
});

const section3Preview = (
  <>
    <button className="btn btn-primary">
      Primary
      <BadgeCount count="5" />
    </button>
  </>
);
const section3Code = `<button className="btn btn-primary">
    Primary
    <BadgeCount count="5" />
</button>`;
const section3 = CompSectionTemplate({
  sectionHeading: "Badge-Count on Buttons",
  sectionDesc:
    "The color and background-color can be customized by passing the it's value as props.",
  preview: section3Preview,
  code: section3Code,
});
