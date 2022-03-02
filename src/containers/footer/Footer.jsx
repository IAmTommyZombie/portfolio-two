import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Get in touch!</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Download Resume</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>LinkedIn</p>
        <p>Indeed</p>
        <p>Github</p>
        <p>Instagram</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contact</h4>
        <p>339-224-1974</p>
        <p>ThomasScales1@gmail.com</p>
      </div>
      <div className="gpt3__footer-links_div"></div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Thomas Scales. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
