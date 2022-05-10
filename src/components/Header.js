import React from "react";
import logo from "./images/pokemon-logo.png";
import "../index.css";
const Header = () => {
  return (
    <header className="header__logo">
      <img src={logo} alt="logo" className="header__image" />
      <p className="header__info">
        <i className=" underline">Click image to view info</i>
      </p>
    </header>
  );
};

export default Header;
