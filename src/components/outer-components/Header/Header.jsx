import React from "react";
import imgCardboard from "../../../assets/cardboard.svg";

const Header = () => {
  return (
    <header className="header-wrapper">
      <img src={imgCardboard} alt="Logo" className="logo" />
      <div className="logo-name">
        Cardboard<span className="logo-name-red"> UI</span>
      </div>
    </header>
  );
};

export default Header;
