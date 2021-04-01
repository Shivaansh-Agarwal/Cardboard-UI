import React from "react";

export const InputField = ({ placeholder, text }) => {
  return (
    <input
      type="text"
      value={text}
      placeholder={placeholder}
      className="input-text"
    />
  );
};

export const InputSearchField = ({ placeholder = "Search...", text }) => {
  return (
    <input
      type="text"
      value={text}
      placeholder={placeholder}
      className="input-text input-search"
    />
  );
};
