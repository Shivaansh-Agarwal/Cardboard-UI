import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import { Modal } from "./Modal.jsx";

const ModalUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return <CompPageTemplate pageHeading={"Modals"} sections={[section1]} />;
};
export default ModalUtility;

const section1Preview = (
  <>
    <Modal
      title="Modal Title"
      description="This is the modal description. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
      btnYesText="Proceed"
      btnNoText="Close"
    />
  </>
);
const section1Code = `<Modal
    title="Modal Title"
    description="This is the modal description..."
    btnYesText="Proceed"
    btnNoText="Close"
/>`;
const section1 = CompSectionTemplate({
  sectionHeading: "Modal Type-1",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
});
