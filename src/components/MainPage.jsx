import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="main">
      <div className="section-1">
        <div className='info-1'>
          <h2>YOGA</h2>
                  <div className="yoga-buttons">
          <Link id='classes' to="">CLASSES</Link>
          <Link id='private' to="">SCHEDULE</Link>
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className='info-2'>
          <h2>REIKI</h2>
          <div className="reiki-button">
          <Link to="">BOOK</Link>
        </div>
       </div>
     </div>
    </div>
  );
  
    }
