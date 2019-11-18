import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.svg';

export default function Header() {
  return (
    <div id="header">
      <img />
      <div id="title">
          <img src={Logo} alt='logo' />
        <Link to="/">
          <h1>Sacred Souls Yoga Studio</h1>
          <p>Yoga Classes in Jersey City</p>
      </Link>
      </div>

      <nav id="navbar">
        <Link to="/classes">
          CLASSES
        </Link>
        <Link to="/schedule">
          SCHEDULE
        </Link>
        <Link to="/reiki">
          REIKI
        </Link>
        <Link to="/about">
          ABOUT
          </Link>
      </nav>

    </div>
  )
}
