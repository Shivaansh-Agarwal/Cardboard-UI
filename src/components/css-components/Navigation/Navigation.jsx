import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { InputSearchField } from "../InputField/InputField.jsx";

export const NavBar = ({
  logoImg = null,
  logoText,
  isSearch = false,
  buttonsList = [],
  backgroundColor = "brown",
  color = "white",
}) => {
  return (
    <nav className="navbar" style={{ backgroundColor, color }}>
      <div className="navbar-left">
        <div className="navbar-logo-wrapper">
          {logoImg && (
            <div className="navbar-logo-img">
              <img src={logoImg} alt="logo" />
            </div>
          )}
          <div className="navbar-logo-text">{logoText}</div>
        </div>
        {isSearch && (
          <div className="navbar-search">
            <InputSearchField />
          </div>
        )}
      </div>
      <div className="navbar-right">
        {buttonsList.length > 0 && (
          <div className="navbar-buttons">
            <Router>
              {buttonsList.map((buttons, index) => {
                return (
                  <Link key={index} to={buttons.link} className="navbar-link">
                    {buttons.text}
                  </Link>
                );
              })}
            </Router>
          </div>
        )}
      </div>
    </nav>
  );
};
