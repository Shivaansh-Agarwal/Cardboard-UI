import React from "react";
import { ButtonRegular } from "../Buttons/Button.jsx";

export const Modal = ({ title, description, btnNoText, btnYesText }) => {
  return (
    <div className="modal">
      <div className="modal-title">{title}</div>
      <div className="modal-description">{description}</div>
      <div className="modal-buttons">
        <ButtonRegular btnText={btnNoText} btnClass="btn-secondary" />
        <ButtonRegular btnText={btnYesText} btnClass="btn-primary" />
      </div>
    </div>
  );
};
