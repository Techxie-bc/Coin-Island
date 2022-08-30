import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import "./coins.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-links">
          <div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Upcoming</a>
              </li>
              <li>
                <a href="/">Popular</a>
              </li>
              <li>
                <a href="/">Trending</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Terms & Conditions</li>
              <li>Support</li>
              <li>For Developers</li>
              <li>Join Our Team</li>
            </ul>
          </div>
          <div className="icons">
            <ul>
              <li>
                <BsFacebook />
              </li>
              <li>
                <BsTwitter />
              </li>
              <li>
                <BsInstagram />
              </li>
            </ul>
          </div>
        </div>
        <p className="bottom-text">
          <span className="footer-name">Coin Island</span> &copy; 2022 Irene C.
          Onyia
        </p>
      </div>
    </>
  );
};

export default Footer;
