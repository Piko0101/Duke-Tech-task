import React from "react";
import logo from "../../images/logo.png"
import '../../styles/Navbar.scss'

function Navbar() {
  return (
    <div className="navbar --flex">
      <div className="navbar__logo">
        <img src={logo} />
      </div>
      <ul className="navbar__links --flex">
        <li>Каталог</li>
        <li>Доставка</li>
        <li>Оплата</li>
        <li>Контакты</li>
        <li>О галерее</li>
      </ul>
    </div>
  );
}

export default Navbar;
