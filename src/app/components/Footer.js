import React from "react";
import Navbar from "./shared/Navbar";
import phoneIcon from "../images/phone-icon.png"
import addressIcon from "../images/address-icon.png"
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer --flex container">
      <Navbar />
      <div className="footer__contacts --flex">
        <div className="phone">
          <img src={phoneIcon} />
          <span> +7 (495) 555-55-55</span>
        </div>
        <div className="address">
          <img src={addressIcon} />
          <span>г. Алматы, ул. Фурманова, 24</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
