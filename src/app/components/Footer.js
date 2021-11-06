import React from "react";
import Navbar from "./shared/Navbar";
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer --flex container">
      <Navbar />
      <div className="footer__contacts --flex">
        <div className="phone">
          <img src="../images/phone-icon" />
          <span> +7 (495) 555-55-55</span>
        </div>
        <div className="address">
          <img src="../images/address-icon" />
          <span>г. Алматы, ул. Фурманова, 24</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
