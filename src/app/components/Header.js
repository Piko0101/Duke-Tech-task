import React from "react";
import SearchInput from "./shared/SearchInput";
import "../styles/Header.scss";
import Navbar from "./shared/Navbar";

function Header() {
  return (
    <div className="header container">
      <Navbar />
      <SearchInput />
    </div>
  );
}

export default Header;
