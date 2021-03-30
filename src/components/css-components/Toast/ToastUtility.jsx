import React, { useEffect } from "react";
import hljs from "highlight.js";
// import {
//   CompPageTemplate,
//   CompSectionTemplate,
// } from "../CompPageTemplates.jsx";
// import { ButtonRegular } from "../Buttons/Button.jsx";
import { Toast, ToastList } from "./Toast.jsx";
import { useToastList } from "./toast-context.js";

const ToastUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      {/* <CompPageTemplate pageHeading={"Toast"} sections={[section1]} /> */}
      <CustomButton />
      <ToastList position="2" />
    </>
  );
};
export default ToastUtility;

const CustomButton = () => {
  const { setToastList } = useToastList();
  function showToast(toastType) {
    if (toastType === "success") {
      const newToast = Toast({
        title: "Success",
        description: "Item added to cart",
        toastType: "success",
      });
      setToastList([newToast]);
    }
  }
  return (
    <>
      <button
        onClick={() => {
          showToast("success");
        }}
      >
        Success
      </button>
    </>
  );
};

// const section1Preview = <></>;
// const section1Code = ``;
// const section1 = CompSectionTemplate({
//   sectionHeading: "Success Toast",
//   sectionDesc: "",
//   preview: section1Preview,
//   code: section1Code,
// });
