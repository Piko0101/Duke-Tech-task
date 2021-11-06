import React from "react";
import SearchInput from "./shared/SearchInput";
import "../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__nav --flex">
        <div className="header__logo">
          <img src="./logo.png" />
        </div>
        <ul className="header__links --flex">
          <li>Каталог</li>
          <li>Доставка</li>
          <li>Оплата</li>
          <li>Контакты</li>
          <li>О галерее</li>
        </ul>
      </div>
      <div className="header__search">
        <SearchInput />
      </div>
    </div>
  );
}

export default Header;
