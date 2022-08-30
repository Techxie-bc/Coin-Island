import React from "react";
import { FaCoins } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <div>
        <div className="navbar">
          <FaCoins className="logo" />
          <h1 className="logo-name">Coin Island</h1>
        </div>
      </div>
    </Link>
  );
};

export default Navbar;
