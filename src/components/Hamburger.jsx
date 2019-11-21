import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/Logo.svg';

export default function Hamburger() {
  return (
    <div className="hamburger">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>

      <div className="hamMenu">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul className="menu">
          <li>
            <Link to="/classes">CLASSES</Link>
          </li>
          <li>
            <Link to="/schedule">SCHEDULE</Link>
          </li>
          <li>
            <Link to="/reiki">REIKI</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
