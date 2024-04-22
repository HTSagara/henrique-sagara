import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Henrique</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact me
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/henrique-sagara/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/htsagara"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://github.com/coffeecollab"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-coffee"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; {year} Copyright. All rights reserved to Henrique Sagara.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
