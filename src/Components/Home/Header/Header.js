import React from "react";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navabar from "../Navbar/Navabar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navabar />
      <HeaderMain />
      <BusinessInfo />
    </div>
  );
};

export default Header;
