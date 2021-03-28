import React from "react";
import { imgSuccess, imgError, imgInfo, imgWarning } from "./assets";
import { useToastList } from "./toast-context.js";

const getPositionClass = function (positionNum) {
  switch (positionNum) {
    case "1":
      return "toast-top-left";
    case "2":
      return "toast-top-right";
    case "3":
      return "toast-bottom-right";
    case "4":
      return "toast-bottom-left";
  }
};

const getIconName = function (type) {
  switch (type.toLowerCase()) {
    case "success":
      return imgSuccess;
    case "warning":
      return imgWarning;
    case "error":
      return imgError;
    case "info":
      return imgInfo;
  }
};

const TOASTBGCOLORS = {
  success: "green",
  warning: "yellow",
  error: "red",
  info: "lightblue",
};

export const Toast = ({ title, description, toastType }) => {
  const { setToastList } = useToastList();
  const iconImg = getIconName(toastType);
  return (
    <div
      className={`toast`}
      style={{ backgroundColor: TOASTBGCOLORS[toastType] }}
    >
      <div className="toast-icon">
        <img src={iconImg} alt="icon" />
      </div>
      <div className="toast-details">
        <div className="toast-title">{title}</div>
        <div className="toast-description">{description}</div>
      </div>
      <div className="toast-close">
        <button
          onClick={() => {
            setToastList([]);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export const ToastList = ({ position }) => {
  const { toastList } = useToastList();
  const posClass = getPositionClass(position);
  return (
    <div className={`toast-list ${posClass}`}>
      {toastList.map((toast) => toast)}
    </div>
  );
};
