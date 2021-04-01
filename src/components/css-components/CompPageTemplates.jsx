import React from "react";
import { v4 as uuidv4 } from "uuid";

export const CompPageTemplate = ({ pageHeading, sections }) => {
  return (
    <div className="comp-page">
      <h1 className="page-heading">{pageHeading}</h1>
      {sections.map((section) => section)}
    </div>
  );
};

export const CompSectionTemplate = ({
  sectionHeading,
  sectionDesc,
  preview,
  code,
  isFlexRow = true,
}) => {
  const flexClass = isFlexRow ? "flex-row" : "flex-column";
  return (
    <section className="comp-section" key={uuidv4()}>
      <h2 className="comp-section-heading">{sectionHeading}</h2>
      <div className={`comp-preview ${flexClass}`}>{preview}</div>
      <p className="comp-section-desc">{sectionDesc}</p>
      <div className="comp-clipboard">
        <pre>
          <code className="html">{code}</code>
        </pre>
      </div>
    </section>
  );
};
