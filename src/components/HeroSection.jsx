import React from 'react';
import '../styles/Herosection.css';
import Image from '../images/background_image.webp';

function HeroSection({darkMode}) {
  return (
    <div className={darkMode ? 'hero-section active' : 'hero-section'} id='home'>
      <div className="description_section">
        <h3>Hello, My Name is</h3>
        <h1>Oladiipo <span className='span-blue'>Ayomide</span></h1>
        <div className="wrapper">
          <div className="static-txt">I'm a</div>
          <ul className="dynamic-txts">
             <li className={darkMode ? 'active' : ''}>Developer</li>
            <li className={darkMode ? 'active' : ''}>Freelancer</li>
            <li className={darkMode ? 'active' : ''}>Designer</li>
            <li className={darkMode ? 'active' : ''}>Student</li>
          </ul>
        </div>
        <div className='email-btn'>
          <input type="email" placeholder='Enter Your Email' />
          <button type='button' className='pointer'>Let's Chat</button>
        </div>
      </div>
      <div className="image_section">
        <img src={Image} alt = "" />
      </div>
    </div>
  )
}

export default HeroSection;
