import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";

const Alert = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <CompPageTemplate pageHeading={"Alerts"} sections={[section1, section2]} />
  );
};

export default Alert;

const section1Preview = (
  <>
    <div className="alert alert-success">
      <span>
        <strong>Success! </strong>
        This alert box indicates a successful or positive action.
      </span>
      <button className="alert-btn-close">×</button>
    </div>
    <div className="alert alert-danger">
      <span>
        <strong>Danger! </strong>
        This alert box indicates a dangerous or potentially negative action.
      </span>
      <button className="alert-btn-close">×</button>
    </div>
    <div className="alert alert-warning">
      <span>
        <strong>Warning! </strong>
        This alert box indicates a warning that might need attention.
      </span>
      <button className="alert-btn-close">×</button>
    </div>
    <div className="alert alert-info">
      <span>
        <strong>Info! </strong>
        This alert box indicates a neutral informative change or action.
      </span>
      <button className="alert-btn-close">×</button>
    </div>
  </>
);

let section1Code = (
  <>
    &lt;div className=&quot;alert alert-success&quot;&gt;
    <br />
    &lt;span&gt;
    <br />
    &lt;strong&gt;Success! &lt;/strong&gt;
    <br />
    This alert box indicates a successful or positive action.
    <br />
    &lt;/span&gt;
    <br />
    &lt;button className=&quot;alert-btn-close&quot;&gt;&times;&lt;/button&gt;
    <br />
    &lt;/div&gt;
    <br />
    &lt;div className=&quot;alert alert-danger&quot;&gt;
    <br />
    &lt;span&gt;
    <br />
    &lt;strong&gt;Danger! &lt;/strong&gt;
    <br />
    This alert box indicates a dangerous or potentially negative action.
    <br />
    &lt;/span&gt;
    <br />
    &lt;button className=&quot;alert-btn-close&quot;&gt;&times;&lt;/button&gt;
    <br />
    &lt;/div&gt;
    <br />
    &lt;div className=&quot;alert alert-warning&quot;&gt;
    <br />
    &lt;span&gt;
    <br />
    &lt;strong&gt;Warning! &lt;/strong&gt;
    <br />
    This alert box indicates a warning that might need attention.
    <br />
    &lt;/span&gt;
    <br />
    &lt;button className=&quot;alert-btn-close&quot;&gt;&times;&lt;/button&gt;
    <br />
    &lt;/div&gt;
    <br />
    &lt;div className=&quot;alert alert-info&quot;&gt;
    <br />
    &lt;span&gt;
    <br />
    &lt;strong&gt;Info! &lt;/strong&gt;
    <br />
    This alert box indicates a neutral informative change or action.
    <br />
    &lt;/span&gt;
    <br />
    &lt;button className=&quot;alert-btn-close&quot;&gt;&times;&lt;/button&gt;
    <br />
    &lt;/div&gt;
    <br />
  </>
);

const section1 = CompSectionTemplate({
  sectionHeading: "Alerts",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
});

const section2Preview = (
  <>
    <div className="alert alert-success">
      <span>
        <strong>Success! </strong>
        You should{" "}
        <a href="http://cardboardcss.netlify.app/" className="alert-link">
          {" "}
          read this message
        </a>
      </span>
      <button className="alert-btn-close">×</button>
    </div>
    <div className="alert alert-danger">
      <span>
        <strong>Danger! </strong>
        You should{" "}
        <a href="http://cardboardcss.netlify.app/" className="alert-link">
          {" "}
          read this message
        </a>
      </span>
      <button className="alert-btn-close">×</button>
    </div>
    <div className="alert alert-warning">
      <span>
        <strong>Warning! </strong>
        You should{" "}
        <a href="http://cardboardcss.netlify.app/" className="alert-link">
          {" "}
          read this message
        </a>
      </span>
      <button className="alert-btn-close">×</button>
    </div>
    <div className="alert alert-info">
      <span>
        <strong>Info! </strong>
        You should{" "}
        <a href="http://cardboardcss.netlify.app/" className="alert-link">
          {" "}
          read this message
        </a>
      </span>
      <button className="alert-btn-close">×</button>
    </div>
  </>
);
const section2Code = (
  <>
    &lt;div className=&quot;alert alert-success&quot;&gt;
    <br />
    &lt;span&gt;
    <br />
    &lt;strong&gt;Success! &lt;/strong&gt;
    <br />
    You should
    <br />
    &lt;a href=&quot;http://cardboardcss.netlify.app/&quot;
    className=&quot;alert-link&quot;&gt;
    <br />
    read this message
    <br />
    &lt;/a&gt;
    <br />
    &lt;/span&gt;
    <br />
    &lt;button className=&quot;alert-btn-close&quot;&gt;&times;&lt;/button&gt;
    <br />
    &lt;/div&gt;
    <br />
    &lt;div className=&quot;alert alert-danger&quot;&gt;
    <br />
    &lt;span&gt;
    <br />
    &lt;strong&gt;Danger! &lt;/strong&gt;
    <br />
    You should
    <br />
    &lt;a href=&quot;http://cardboardcss.netlify.app/&quot;
    className=&quot;alert-link&quot;&gt;
    <br />
    read this message
    <br />
    &lt;/a&gt;
    <br />
    &lt;/span&gt;
    <br />
    &lt;button className=&quot;alert-btn-close&quot;&gt;&times;&lt;/button&gt;
    <br />
    &lt;/div&gt;
    <br />
    &lt;div className=&quot;alert alert-warning&quot;&gt;
    <br />
    &lt;span&gt;
    <br />
    &lt;strong&gt;Warning! &lt;/strong&gt;
    <br />
    You should
    <br />
    &lt;a href=&quot;http://cardboardcss.netlify.app/&quot;
    className=&quot;alert-link&quot;&gt;
    <br />
    read this message
    <br />
    &lt;/a&gt;
    <br />
    &lt;/span&gt;
    <br />
    &lt;button className=&quot;alert-btn-close&quot;&gt;&times;&lt;/button&gt;
    <br />
    &lt;/div&gt;
    <br />
    &lt;div className=&quot;alert alert-info&quot;&gt;
    <br />
    &lt;span&gt;
    <br />
    &lt;strong&gt;Info! &lt;/strong&gt;
    <br />
    You should
    <br />
    &lt;a href=&quot;http://cardboardcss.netlify.app/&quot;
    className=&quot;alert-link&quot;&gt;
    <br />
    read this message
    <br />
    &lt;/a&gt;
    <br />
    &lt;/span&gt;
    <br />
    &lt;button className=&quot;alert-btn-close&quot;&gt;&times;&lt;/button&gt;
    <br />
    &lt;/div&gt;
    <br />
  </>
);
const section2 = CompSectionTemplate({
  sectionHeading: "Alerts (with Links)",
  sectionDesc: "",
  preview: section2Preview,
  code: section2Code,
});
