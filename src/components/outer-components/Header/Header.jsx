import React from "react";
import { Link } from "react-router-dom";
import imgCardboard from "../../../assets/cardboard.svg";

const Header = () => {
  return (
    <header className="header-wrapper">
      <img src={imgCardboard} alt="Logo" className="logo" />
      <Link className="logo-name" to="/">
        Cardboard<span className="logo-name-red"> UI</span>
      </Link>
    </header>
  );
};

export default Header;
