import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className='input-areas'>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>SENTINELS</h2>
            <Link to={{ pathname: "https://in.linkedin.com/in/abhinav-umesh-257658273" }} target="_blank"> Abhinav Umesh </Link>
            <Link to={{ pathname: "https://www.linkedin.com/in/a-ramnarayan-839a5b25a/" }} target="_blank"> Ram Narayan </Link>
            <Link to={{ pathname: "https://www.linkedin.com/in/ayush-mukherjee-4a87b42b6/" }} target="_blank" > Ayush Mukherjee </Link>
            <Link to={{ pathname: "https://www.linkedin.com/in/aditi-roy-394246277/" }} target="_blank"> Aditi Roy </Link>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Footer;
