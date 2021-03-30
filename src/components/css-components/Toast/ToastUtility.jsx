import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import { Toast } from "./Toast.jsx";
// import { useToastList } from "./toast-context.js";

const ToastUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <CompPageTemplate pageHeading={"Toast"} sections={[section1]} />
    </>
  );
};
export default ToastUtility;

const section1Preview = (
  <>
    <Toast
      title="Success!"
      description="Record added successfully"
      toastType="success"
    />
    <Toast
      title="Error!"
      description="Record addition failed"
      toastType="error"
    />
    <Toast
      title="Warning!"
      description="This is a warning"
      toastType="warning"
    />
    <Toast
      title="Info!"
      description="This is an information toast!"
      toastType="info"
    />
  </>
);
const section1Code = `<Toast
  title="Success!"
  description="Record added successfully"
  toastType="success"
/>

<Toast
  title="Error!"
  description="Record addition failed"
  toastType="error"
/>
    
<Toast
  title="Warning!"
  description="This is a warning"
  toastType="warning"
/>

<Toast
  title="Info!"
  description="This is an information toast!"
  toastType="info"
/>`;
const section1 = CompSectionTemplate({
  sectionHeading: "Toast Messages",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
  isFlexRow: false,
});

// const CustomButton = () => {
//   const { setToastList } = useToastList();
//   function showToast(toastType) {
//     if (toastType === "success") {
//       const newToast = Toast({
//         title: "Success",
//         description: "Item added to cart",
//         toastType: "success",
//       });
//       setToastList([newToast]);
//     }
//   }
//   return (
//     <>
//       <button
//         onClick={() => {
//           showToast("success");
//         }}
//       >
//         Success
//       </button>
//     </>
//   );
// };
