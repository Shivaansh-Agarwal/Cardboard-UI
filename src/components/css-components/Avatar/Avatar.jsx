import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import imgAvatar1 from "./img-avatar.png";

const Avatar = () => {
  /*After rendering have to call the following function for code highlighting to work when using react router*/
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <CompPageTemplate pageHeading={"Avatars"} sections={[section1, section2]} />
  );
};
export default Avatar;

const section1Preview = (
  <>
    <figure className="avatar avt-circular avt-big">
      <img src={imgAvatar1} alt="avatar" />
    </figure>
    <figure className="avatar avt-circular avt-medium">
      <img src={imgAvatar1} alt="avatar" />
    </figure>
    <figure className="avatar avt-circular avt-small">
      <img src={imgAvatar1} alt="avatar" />
    </figure>
  </>
);
const section1Code = (
  <>
    &lt;figure className=&quot;avatar avt-circular avt-big&quot;&gt;
    <br />
    &ensp;&ensp;&lt;img src={imgAvatar1} alt=&quot;avatar&quot; /&gt;
    <br />
    &lt;/figure&gt;
    <br />
    &lt;figure className=&quot;avatar avt-circular avt-medium&quot;&gt;
    <br />
    &nbsp;&nbsp;&lt;img src={imgAvatar1} alt=&quot;avatar&quot; /&gt;
    <br />
    &lt;/figure&gt;
    <br />
    &lt;figure className=&quot;avatar avt-circular avt-small&quot;&gt;
    <br />
    &nbsp;&nbsp;&lt;img src={imgAvatar1} alt=&quot;avatar&quot; /&gt;
    <br />
    &lt;/figure&gt;
    <br />
  </>
);
const section1 = CompSectionTemplate({
  sectionHeading: "Circular Avatars",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
});

const section2Preview = (
  <>
    <figure className="avatar avt-circular avt-big avt-brd-4px avt-hover">
      <img src={imgAvatar1} alt="avatar" />
    </figure>
    <figure className="avatar avt-circular avt-medium avt-brd-4px avt-hover">
      <img src={imgAvatar1} alt="avatar" />
    </figure>
    <figure className="avatar avt-circular avt-small avt-brd-4px avt-hover">
      <img src={imgAvatar1} alt="avatar" />
    </figure>
  </>
);
const section2Code = (
  <>
    &lt;figure className=&quot;avatar avt-circular avt-big avt-brd-4px
    avt-hover&quot;&gt;
    <br />
    &lt;img src={imgAvatar1} alt=&quot;avatar&quot; /&gt;
    <br />
    &lt;/figure&gt;
    <br />
    &lt;figure className=&quot;avatar avt-circular avt-medium avt-brd-4px
    avt-hover&quot;&gt;
    <br />
    &lt;img src={imgAvatar1} alt=&quot;avatar&quot; /&gt;
    <br />
    &lt;/figure&gt;
    <br />
    &lt;figure className=&quot;avatar avt-circular avt-small avt-brd-4px
    avt-hover&quot;&gt;
    <br />
    &lt;img src={imgAvatar1} alt=&quot;avatar&quot; /&gt;
    <br />
    &lt;/figure&gt;
    <br />
  </>
);
const section2 = CompSectionTemplate({
  sectionHeading: "Circular Avatars (with Border & Hover)",
  sectionDesc: "This is similar to Twitter Avatar",
  preview: section2Preview,
  code: section2Code,
});
