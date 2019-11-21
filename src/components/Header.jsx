import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/logo@2x.png';

export default function Header() {
  return (
    <div id="header">
      <Link to='/'>
        <img src={Logo} alt='logo' />
      </Link>
      <div id="title">
        <Link to="/">
          <h1 className="Sacred-Souls-Yoga">Sacred Souls Yoga Studio</h1>
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
