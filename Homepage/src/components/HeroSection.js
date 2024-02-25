import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vid.mp4' autoPlay loop muted />
      <h1>F l o r e n c e</h1>
      <p>"Where care meets technology"</p>
      <div className='hero-btns'>
      <Link to={{ pathname: "https://ramn25.github.io" }} target="_blank"> 
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Talk to the Bot 🤖
        </Button>
      </Link>
      <Link to={{ pathname: "https://youtu.be/hN6cyUdXB1s" }} target="_blank">
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          DEMO VIDEO <i className='far fa-play-circle' />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
