import React from "react";
import { ALERT_TYPE_CLASS } from "./constants.js";

export const Alert = ({ alertType, alertTitle, alertDescription }) => {
  return (
    <div className={`alert ${ALERT_TYPE_CLASS[alertType]}`}>
      <span>
        <strong>{alertTitle + " "}</strong>
        {alertDescription}
      </span>
      <button className="alert-btn-close">×</button>
    </div>
  );
};

export const AlertWithLink = ({
  alertType,
  alertTitle,
  alertDescription,
  alertLink,
  alertLinkMsg,
}) => {
  return (
    <div className={`alert ${ALERT_TYPE_CLASS[alertType]}`}>
      <span>
        <strong>{alertTitle + " "}</strong>
        {alertDescription}
        <a href={alertLink} className="alert-link">
          {" " + alertLinkMsg}
        </a>
      </span>
      <button className="alert-btn-close">×</button>
    </div>
  );
};
