import React from 'react';
import '../App.css';
import { Button_c } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/video-1.mp4' autoPlay loop muted />
      <h1>Welcome to Anibal's group</h1>
      
      <div className='hero-btns'>
      
        <Button_c
          className='btns'
          Button_Style='btn--outline'
          Button_Size='btn--large'
          onClick={event =>  window.location.href='/opportunities'}
        >
          See Open Positions
        </Button_c>
        <Button_c
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={event =>  window.location.href='/publications'}
        >
          Check Out Our Youtube Channel<i className='far fa-play-circle' />
        </Button_c>
      </div>
    </div>
  );
}

export default HeroSection;
