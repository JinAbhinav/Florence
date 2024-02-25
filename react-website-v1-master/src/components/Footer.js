import React from 'react';
import './Footer.css';
import { Button } from './Button';
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
            <h2>About Us</h2>
            <Link to='/sign-up'>Memeber Names</Link>
            <Link to='/'>Abhinav Umesh</Link>
            <Link to='/'>Ram Narayan</Link>
            <Link to='/'>Ayush Mukherjee</Link>
            <Link to='/'>Aditi Roy</Link>
          </div>
        </div>
      </div>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SENTINELS
            </Link>
          </div>
          
        </div>
  );
}

export default Footer;
