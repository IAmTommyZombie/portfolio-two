import React from "react";
import people from "../../assets/people.png";
import Tommy from "../../assets/Tommy_Lobster_Rolls.jpg";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Who is Thomas Scales?</h1>
      <p>
        I am a front-end web developer based in Boston. I picked up front-end
        development as a hobby, and achieved a certificate from the Harvard
        Extension School in Web Development. By nature I have a hunger for
        learning, with creative outlouds in the form of playing guitar in a
        band, former bartender and mixologist, also a passionate at-home cook, I
        have a creative mind.
      </p>

      <div className="gpt3__header-content__input">
        <button type="button">Projects</button>
      </div>

      <div className="gpt3__header-content__people"></div>
    </div>

    <div className="gpt3__header-image">
      <img src={Tommy} />
    </div>
  </div>
);

export default Header;
