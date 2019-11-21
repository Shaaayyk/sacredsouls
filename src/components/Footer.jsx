import React from "react";
import Fb from '../images/iconmonstr-facebook-1-240.png'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="information">
        <p>
          sacredsoulyoga@gmail.com <br /> Tel: 201-238-9903
        </p>
      </div>

      <div className="address">
        <p>2983 John F. Kennedy Blvd. <br /> Suite 403 <br /> Jersey City, NJ07306</p>
      </div>

      <div className="social-links">
        <a href='https://www.facebook.com/sacredsoulsyoga/' target='_blank'><img className='facebook' src={Fb} width='36px' height='auto' alt='facebook logo' /></a>
        <a href='https://www.yelp.com/biz/sacred-souls-yoga-studio-jersey-city' target='_blank'><i className="fab fa-yelp"></i></a>
      </div>

    </footer>
  );
}
