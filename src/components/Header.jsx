import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div id="header">
      <img />
      <div id="title">
      <Link to="/">
          <h1 className="Sacred-Souls-Yoga">Sacred Souls Yoga Studio</h1>
          <p>Yoga Classes in Jersey City</p>
      </Link>
      </div>

      <nav id="navbar">
        <Link to="/classes">
          <a>CLASSES</a>
        </Link>
        <Link to="/schedule">
          <a>SCHEDULE</a>
        </Link>
        <Link to="/reiki">
          <a>REIKI</a>
        </Link>
        <Link to="/about">
          <a>ABOUT</a>
          </Link>
      </nav>

    </div>
  )
}
