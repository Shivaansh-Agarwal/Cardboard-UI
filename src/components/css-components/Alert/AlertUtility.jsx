import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import { Alert, AlertWithLink } from "./Alert.jsx";

const AlertUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <CompPageTemplate pageHeading={"Alerts"} sections={[section1, section2]} />
  );
};

export default AlertUtility;

const section1Preview = (
  <>
    <Alert
      alertType="success"
      alertTitle="Success!"
      alertDescription="Your request was successful"
    />
    <Alert
      alertType="error"
      alertTitle="Error!"
      alertDescription="Your request was not successful"
    />
    <Alert
      alertType="warning"
      alertTitle="Warning!"
      alertDescription="Proceeding further may lead to data-loss"
    />
    <Alert
      alertType="info"
      alertTitle="Info!"
      alertDescription="The following page contains info about Alerts"
    />
  </>
);

let section1Code = `<Alert
    alertType="success"
    alertTitle="Success!"
    alertDescription="Your request was successful"
/>
<Alert
    alertType="error"
    alertTitle="Error!"
    alertDescription="Your request was not successful"
/>
<Alert
    alertType="warning"
    alertTitle="Warning!"
    alertDescription="Proceeding further may lead to data-loss"
/>
<Alert
    alertType="info"
    alertTitle="Info!"
    alertDescription="The following page contains info about Alerts"
/>`;

const section1 = CompSectionTemplate({
  sectionHeading: "Alerts",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
});

const section2Preview = (
  <>
    <AlertWithLink
      alertType="success"
      alertTitle="Success!"
      alertDescription="Your request was successful"
      alertLink="https://cardboard-ui-dev.netlify.app/"
      alertLinkMsg="read this message"
    />
    <AlertWithLink
      alertType="error"
      alertTitle="Error!"
      alertDescription="Your request was not successful"
      alertLink="https://cardboard-ui-dev.netlify.app/"
      alertLinkMsg="read this message"
    />
    <AlertWithLink
      alertType="warning"
      alertTitle="Warning!"
      alertDescription="Proceeding further may lead to data-loss"
      alertLink="https://cardboard-ui-dev.netlify.app/"
      alertLinkMsg="read this message"
    />
    <AlertWithLink
      alertType="info"
      alertTitle="Info!"
      alertDescription="The following page contains info about alerts"
      alertLink="https://cardboard-ui-dev.netlify.app/"
      alertLinkMsg="read this message"
    />
  </>
);
const section2Code = `<AlertWithLink
    alertType="success"
    alertTitle="Success!"
    alertDescription="Your request was successful"
    alertLink="https://cardboard-ui-dev.netlify.app/"
    alertLinkMsg="read this message"
/>
<AlertWithLink
    alertType="error"
    alertTitle="Error!"
    alertDescription="Your request was not successful"
    alertLink="https://cardboard-ui-dev.netlify.app/"
    alertLinkMsg="read this message"
/>
<AlertWithLink
    alertType="warning"
    alertTitle="Warning!"
    alertDescription="Proceeding further may lead to data-loss"
    alertLink="https://cardboard-ui-dev.netlify.app/"
    alertLinkMsg="read this message"
/>
<AlertWithLink
    alertType="info"
    alertTitle="Info!"
    alertDescription="The following page contains info about alerts"
    alertLink="https://cardboard-ui-dev.netlify.app/"
    alertLinkMsg="read this message"
/>`;

const section2 = CompSectionTemplate({
  sectionHeading: "Alerts (with Links)",
  sectionDesc: "",
  preview: section2Preview,
  code: section2Code,
});
